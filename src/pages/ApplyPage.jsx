import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { CheckOutlined, PaperClipOutlined } from "@ant-design/icons";
import PageHeader from "../components/PageHeader";
import NotFound from "../components/NotFound";
import { applications } from "../data/applications";
import { ORG } from "../data/nav";

const STEPS = ["참가자", "부문·종목", "작품·사진", "확인"];

const EMPTY = {
  name: "",
  birth_date: "",
  gender: "",
  contact: "",
  school_name: "",
  grade: "",
  address: "",
  division: "",
  category: [],
  academy_name: "",
  teacher_name: "",
  academy_contact: "",
  academy_address: "",
  piece_title: "",
  piece_desc: "",
  awards: "",
  agree: false,
};

// ---- 입력 포맷 ----
const formatBirth = (v) => {
  const d = v.replace(/\D/g, "").slice(0, 8);
  if (d.length <= 4) return d;
  if (d.length <= 6) return `${d.slice(0, 4)}.${d.slice(4)}`;
  return `${d.slice(0, 4)}.${d.slice(4, 6)}.${d.slice(6)}`;
};
const formatPhone = (v) => {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length < 4) return d;
  if (d.length < 8) return `${d.slice(0, 3)}-${d.slice(3)}`;
  if (d.length < 11) return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`;
};
const isValidBirth = (v) => {
  if (!/^\d{4}\.\d{2}\.\d{2}$/.test(v)) return false;
  const [y, m, d] = v.split(".").map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d && dt < new Date();
};
const isValidPhone = (v) => /^0\d{1,2}-\d{3,4}-\d{4}$/.test(v);

// ---- 단계별 검증 ----
function validate(step, f, file, app) {
  const e = {};
  if (step === 0) {
    if (!f.name.trim()) e.name = "성명을 입력해 주세요.";
    if (!isValidBirth(f.birth_date)) e.birth_date = "생년월일을 YYYY.MM.DD 형식으로 입력해 주세요.";
    if (!f.gender) e.gender = "성별을 선택해 주세요.";
    if (!isValidPhone(f.contact)) e.contact = "연락처를 010-0000-0000 형식으로 입력해 주세요.";
    if (!f.address.trim()) e.address = "집 주소를 입력해 주세요.";
  }
  if (step === 1) {
    if (!f.division) e.division = "참가 부문을 하나 선택해 주세요.";
    if (f.category.length === 0) e.category = "참가 종목을 하나 이상 선택해 주세요.";
    if (f.academy_contact && !isValidPhone(f.academy_contact))
      e.academy_contact = "연락처 형식을 확인해 주세요.";
  }
  if (step === 2) {
    if (!f.piece_title.trim()) e.piece_title = "작품명을 입력해 주세요.";
    if (app.photoRequired && !file) e.file = "참가자 사진을 첨부해 주세요.";
  }
  if (step === 3 && !f.agree) e.agree = "개인정보 수집·이용에 동의해 주세요.";
  return e;
}

// ---- 공용 필드 UI ----
function Field({ label, required, optional, error, hint, children, htmlFor }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-primary">*</span>}
        {optional && <span className="ml-1.5 text-xs font-normal text-ink-muted">선택</span>}
      </label>
      {children}
      {error ? (
        <p className="m-0 mt-1 text-xs text-red-700" role="alert">
          {error}
        </p>
      ) : (
        hint && <p className="m-0 mt-1 text-xs text-ink-muted">{hint}</p>
      )}
    </div>
  );
}

function Chips({ options, value, multiple, onChange }) {
  const selected = (opt) => (multiple ? value.includes(opt) : value === opt);
  const toggle = (opt) => {
    if (!multiple) return onChange(opt);
    onChange(selected(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
  };
  return (
    <div className="flex flex-wrap gap-2" role="group">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          className="chip"
          aria-pressed={selected(opt)}
          onClick={() => toggle(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function Summary({ f, file }) {
  const rows = [
    ["성명", f.name],
    ["생년월일", f.birth_date],
    ["성별", f.gender],
    ["연락처", f.contact],
    ["학교 / 학년", [f.school_name, f.grade].filter(Boolean).join(" / ") || "—"],
    ["집 주소", f.address],
    ["참가 부문", f.division],
    ["참가 종목", f.category.join(", ")],
    ["소속 학원", f.academy_name || "—"],
    ["지도교사", f.teacher_name || "—"],
    ["작품명", f.piece_title],
    ["작품 내용", f.piece_desc || "—"],
    ["입상 경력", f.awards || "—"],
    ["첨부 사진", file ? file.name : "—"],
  ];
  return (
    <dl className="divide-y divide-line rounded-card border border-line bg-surface">
      {rows.map(([k, v]) => (
        <div key={k} className="grid grid-cols-[110px_1fr] gap-3 px-4 py-2.5 text-sm">
          <dt className="text-ink-muted">{k}</dt>
          <dd className="m-0 whitespace-pre-wrap break-words text-ink">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ApplyPage() {
  const { formId } = useParams();
  const app = applications[formId];
  if (!app) return <NotFound />;
  return <ApplyForm app={app} />;
}

function ApplyForm({ app }) {
  const draftKey = `apply-draft-${app.id}`;
  const [step, setStep] = useState(0);
  const [f, setF] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(draftKey) || "null");
      return saved ? { ...EMPTY, ...saved, agree: false } : EMPTY;
    } catch {
      return EMPTY;
    }
  });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [done, setDone] = useState(null);

  const hasDraft = useMemo(() => Object.keys(f).some((k) => k !== "agree" && f[k]?.length), [f]);

  useEffect(() => {
    try {
      const { agree, ...rest } = f;
      localStorage.setItem(draftKey, JSON.stringify(rest));
    } catch {}
  }, [f, draftKey]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const set = (k) => (v) => {
    setF((prev) => ({ ...prev, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };
  const onInput = (k, fmt) => (e) => set(k)(fmt ? fmt(e.target.value) : e.target.value);

  const onFile = (e) => {
    const picked = e.target.files?.[0] ?? null;
    if (picked && picked.size > app.maxFileMB * 1024 * 1024) {
      setErrors((p) => ({ ...p, file: `파일은 ${app.maxFileMB}MB 이하만 첨부할 수 있습니다.` }));
      setFile(null);
      return;
    }
    setFile(picked);
    setErrors((p) => ({ ...p, file: undefined }));
  };

  const next = () => {
    const e = validate(step, f, file, app);
    setErrors(e);
    if (Object.keys(e).length === 0) setStep((s) => s + 1);
  };

  const reset = () => {
    try {
      localStorage.removeItem(draftKey);
    } catch {}
    setF(EMPTY);
    setFile(null);
    setStep(0);
  };

  const submit = async () => {
    const e = validate(3, f, file, app);
    setErrors(e);
    if (Object.keys(e).length) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      let attachment_link = "";
      if (file) {
        const cloudUrl = (import.meta.env.VITE_CLOUDINARY_CLOUD_URL || "").replace("/image/", "/auto/");
        const fd = new FormData();
        fd.append("file", file);
        fd.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET || "");
        const res = await fetch(cloudUrl, { method: "POST", body: fd });
        if (!res.ok) throw new Error("파일 업로드에 실패했습니다.");
        attachment_link = (await res.json()).secure_url;
      }
      const { agree, ...fields } = f;
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...fields,
          category: f.category.join(", "),
          attachment_link,
          form_title: app.title,
          submitted_at: new Date().toLocaleString("ko-KR"),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      try {
        localStorage.removeItem(draftKey);
      } catch {}
      setDone({ ...f, fileName: file?.name });
    } catch (err) {
      console.error(err);
      setSubmitError(
        err.message?.includes("업로드")
          ? err.message
          : "접수 중 오류가 발생했습니다. 잠시 후 다시 시도하거나 전화로 문의해 주세요."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <>
        <PageHeader title="접수 완료" breadcrumb={[{ label: "공지사항", to: "/notices" }, { label: app.title }]} />
        <div className="container-site max-w-[720px] py-12 md:py-16">
          <div className="rounded-card border border-line bg-surface p-8 text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary">
              <CheckOutlined style={{ fontSize: 22 }} />
            </span>
            <h2 className="mt-4 text-2xl font-bold">신청서가 접수되었습니다</h2>
            <p className="mt-2 text-ink-muted">
              {done.name} 님의 {app.title.replace(" 참가 신청서", "")} 참가 신청이 접수되었습니다.
              <br />
              확인 후 {done.contact}로 연락드립니다.
            </p>
          </div>
          <dl className="mt-6 divide-y divide-line rounded-card border border-line bg-surface">
            {[
              ["참가 부문", done.division],
              ["참가 종목", done.category.join(", ")],
              ["작품명", done.piece_title],
              ["첨부 사진", done.fileName || "—"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[110px_1fr] gap-3 px-4 py-2.5 text-sm">
                <dt className="text-ink-muted">{k}</dt>
                <dd className="m-0 text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-ink-muted">
            문의: {ORG.name} 사무국{" "}
            <a href={`tel:${ORG.phone.replace(/-/g, "")}`} className="font-semibold text-ink">
              {ORG.phone}
            </a>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to={app.backTo} className="btn-primary">
              공지사항으로
            </Link>
            <Link to="/" className="btn-secondary">
              홈으로
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title={app.title}
        description={app.description}
        breadcrumb={[{ label: "공지사항", to: "/notices" }, { label: "참가 신청" }]}
      />
      <div className="container-site max-w-[720px] py-10 md:py-14">
        {/* 진행 표시 */}
        <ol className="mb-8 flex items-center gap-2 text-xs text-ink-muted sm:text-sm" aria-label="진행 단계">
          {STEPS.map((label, i) => {
            const state = i < step ? "done" : i === step ? "current" : "todo";
            return (
              <li key={label} className="flex flex-1 items-center gap-2 last:flex-none">
                <span className={`flex items-center gap-1.5 ${state === "current" ? "font-semibold text-ink" : ""}`}>
                  <span
                    className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${
                      state === "done"
                        ? "bg-ink text-white"
                        : state === "current"
                          ? "bg-primary text-white"
                          : "bg-line text-white"
                    }`}
                    aria-current={state === "current" ? "step" : undefined}
                  >
                    {state === "done" ? <CheckOutlined style={{ fontSize: 11 }} /> : i + 1}
                  </span>
                  <span className={i !== step ? "hidden sm:inline" : ""}>{label}</span>
                </span>
                {i < STEPS.length - 1 && <span className="h-px flex-1 bg-line" aria-hidden="true" />}
              </li>
            );
          })}
        </ol>

        <div className="rounded-card border border-line bg-surface p-5 md:p-8">
          {step === 0 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-bold">참가자는 누구인가요?</h2>
                <p className="m-0 mt-1 text-sm text-ink-muted">신청서에 기재될 참가자 본인의 정보입니다.</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="성명" required error={errors.name} htmlFor="ap-name">
                  <input id="ap-name" className="field-input" value={f.name} onChange={onInput("name")} placeholder="홍길동" aria-invalid={!!errors.name} autoComplete="name" />
                </Field>
                <Field label="생년월일" required error={errors.birth_date} htmlFor="ap-birth" hint="숫자만 입력하면 자동으로 점이 들어갑니다.">
                  <input id="ap-birth" className="field-input" inputMode="numeric" value={f.birth_date} onChange={onInput("birth_date", formatBirth)} placeholder="2010.01.01" aria-invalid={!!errors.birth_date} />
                </Field>
                <Field label="성별" required error={errors.gender}>
                  <Chips options={["남", "여"]} value={f.gender} onChange={set("gender")} />
                </Field>
                <Field label="참가자 연락처" required error={errors.contact} htmlFor="ap-contact">
                  <input id="ap-contact" className="field-input" inputMode="tel" value={f.contact} onChange={onInput("contact", formatPhone)} placeholder="010-0000-0000" aria-invalid={!!errors.contact} autoComplete="tel" />
                </Field>
                <Field label="학교명" optional htmlFor="ap-school">
                  <input id="ap-school" className="field-input" value={f.school_name} onChange={onInput("school_name")} placeholder="00예술고등학교" />
                </Field>
                <Field label="학년" optional htmlFor="ap-grade">
                  <input id="ap-grade" className="field-input" value={f.grade} onChange={onInput("grade")} placeholder="2학년" />
                </Field>
              </div>
              <Field label="집 주소" required error={errors.address} htmlFor="ap-address">
                <input id="ap-address" className="field-input" value={f.address} onChange={onInput("address")} placeholder="도로명 주소 전체" aria-invalid={!!errors.address} autoComplete="street-address" />
              </Field>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold">어느 부문과 종목으로 참가하나요?</h2>
                <p className="m-0 mt-1 text-sm text-ink-muted">부문은 하나, 종목은 여러 개 선택할 수 있습니다.</p>
              </div>
              <Field label="참가 부문" required error={errors.division}>
                <Chips options={app.divisions} value={f.division} onChange={set("division")} />
              </Field>
              <Field label="참가 종목" required error={errors.category} hint="중복 선택 가능">
                <Chips options={app.categories} value={f.category} multiple onChange={set("category")} />
              </Field>
              <div className="border-t border-line pt-6">
                <h3 className="m-0 font-sans text-base font-bold">소속 학원 · 지도교사</h3>
                <p className="m-0 mt-1 text-sm text-ink-muted">소속이 없으면 비워 두세요.</p>
                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  <Field label="학원명 (소속)" optional htmlFor="ap-academy">
                    <input id="ap-academy" className="field-input" value={f.academy_name} onChange={onInput("academy_name")} />
                  </Field>
                  <Field label="지도교사" optional htmlFor="ap-teacher">
                    <input id="ap-teacher" className="field-input" value={f.teacher_name} onChange={onInput("teacher_name")} />
                  </Field>
                  <Field label="학원 · 지도자 연락처" optional error={errors.academy_contact} htmlFor="ap-academy-contact">
                    <input id="ap-academy-contact" className="field-input" inputMode="tel" value={f.academy_contact} onChange={onInput("academy_contact", formatPhone)} placeholder="010-0000-0000" aria-invalid={!!errors.academy_contact} />
                  </Field>
                  <Field label="학원 주소" optional htmlFor="ap-academy-address">
                    <input id="ap-academy-address" className="field-input" value={f.academy_address} onChange={onInput("academy_address")} />
                  </Field>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-bold">작품 정보와 사진</h2>
                <p className="m-0 mt-1 text-sm text-ink-muted">작품명과 참가자 사진은 심사 자료로 사용됩니다.</p>
              </div>
              <Field label="작품명" required error={errors.piece_title} htmlFor="ap-piece">
                <input id="ap-piece" className="field-input" value={f.piece_title} onChange={onInput("piece_title")} aria-invalid={!!errors.piece_title} />
              </Field>
              <Field label="작품 내용" optional htmlFor="ap-desc">
                <textarea id="ap-desc" className="field-input min-h-[96px] py-2.5" rows={3} value={f.piece_desc} onChange={onInput("piece_desc")} placeholder="작품의 주제나 구성을 간략히 적어 주세요." />
              </Field>
              <Field label="입상 경력 및 특기" optional htmlFor="ap-awards">
                <textarea id="ap-awards" className="field-input min-h-[96px] py-2.5" rows={3} value={f.awards} onChange={onInput("awards")} />
              </Field>
              <Field label="참가자 사진" required={app.photoRequired} error={errors.file} htmlFor="ap-file" hint={`JPG, PNG, PDF · ${app.maxFileMB}MB 이하 · 1개`}>
                <label
                  htmlFor="ap-file"
                  className={`flex cursor-pointer items-center gap-3 rounded-card border border-dashed px-4 py-4 text-sm transition-colors hover:border-primary ${
                    errors.file ? "border-red-600" : file ? "border-primary bg-primary-soft/40" : "border-line"
                  }`}
                >
                  <PaperClipOutlined className="text-lg text-ink-muted" />
                  <span className="min-w-0 flex-1 truncate text-ink">
                    {file ? file.name : "파일을 선택하세요"}
                  </span>
                  <span className="shrink-0 rounded border border-line bg-surface px-2.5 py-1 text-xs">
                    {file ? "변경" : "선택"}
                  </span>
                </label>
                <input id="ap-file" type="file" accept="image/*,.pdf" className="sr-only" onChange={onFile} />
              </Field>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-bold">입력 내용을 확인해 주세요</h2>
                <p className="m-0 mt-1 text-sm text-ink-muted">수정할 항목이 있으면 이전 단계로 돌아가 고칠 수 있습니다.</p>
              </div>
              <Summary f={f} file={file} />
              <label className="flex items-start gap-3 rounded-card border border-line bg-surface-2/60 p-4 text-sm">
                <input
                  id="ap-agree"
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 accent-[#8E2A48]"
                  checked={f.agree}
                  onChange={(e) => set("agree")(e.target.checked)}
                  aria-invalid={!!errors.agree}
                />
                <span>
                  참가 신청 처리를 위해 위 정보를 수집·이용하는 데 동의합니다. 수집한 정보는 심사와 연락 외의 목적으로
                  사용하지 않습니다.{" "}
                  <Link to="/privacy" className="text-primary underline underline-offset-2" target="_blank">
                    개인정보처리방침
                  </Link>
                </span>
              </label>
              {errors.agree && (
                <p className="m-0 text-xs text-red-700" role="alert">
                  {errors.agree}
                </p>
              )}
              {submitError && (
                <div className="rounded-card border border-red-300 bg-red-50 p-4 text-sm text-red-800" role="alert">
                  {submitError}
                  <div className="mt-1">
                    전화 문의:{" "}
                    <a href={`tel:${ORG.phone.replace(/-/g, "")}`} className="font-semibold">
                      {ORG.phone}
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 flex items-center justify-between gap-3 border-t border-line pt-6">
            {step > 0 ? (
              <button type="button" className="btn-secondary" onClick={() => setStep((s) => s - 1)} disabled={submitting}>
                ← 이전
              </button>
            ) : (
              <Link to={app.backTo} className="btn-secondary">
                취소
              </Link>
            )}
            {step < STEPS.length - 1 ? (
              <button type="button" className="btn-primary" onClick={next}>
                다음: {STEPS[step + 1]} →
              </button>
            ) : (
              <button type="button" className="btn-primary !px-7" onClick={submit} disabled={submitting}>
                {submitting ? "접수 중…" : "신청서 제출"}
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-ink-muted">
          <span>
            {step + 1} / {STEPS.length} 단계 · 입력 내용은 이 기기에 자동 저장됩니다.
          </span>
          {hasDraft && (
            <button type="button" onClick={reset} className="underline underline-offset-2 hover:text-ink">
              처음부터 다시 쓰기
            </button>
          )}
        </div>
      </div>
    </>
  );
}

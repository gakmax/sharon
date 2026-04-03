import React, { useState } from "react";
import {
  Modal,
  Button,
  Input,
  Form,
  message,
  Upload,
  Radio,
  Row,
  Col,
  Divider,
  Checkbox,
} from "antd";
import { UploadOutlined, PaperClipOutlined } from "@ant-design/icons";
import emailjs from "@emailjs/browser";

const EmailModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();

  // 환경 변수 설정 (기존과 동일)
  const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_CLOUD_URL || "";
  const CLOUDINARY_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET || "";
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

  const handleFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList.slice(-1)); // 파일 1개만 유지
  };

  // Cloudinary 업로드 함수 (기존과 동일)
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_PRESET);
    // 한글 파일명 유지를 위한 옵션 (필요시 주석 해제)
    // formData.append("use_filename", "true");
    // formData.append("unique_filename", "false");

    const response = await fetch(CLOUDINARY_URL.replace("/image/", "/auto/"), {
      // auto로 변경하여 모든 파일 형식 대응
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("업로드 실패");
    const data = await response.json();
    return data.secure_url;
  };

  const handleSubmit = async (values) => {
    // [필수 체크 추가] 파일이 첨부되지 않았으면 진행 막기
    if (fileList.length === 0) {
      message.error("사진(또는 신청서 파일)을 반드시 첨부해주세요!");
      return;
    }

    setLoading(true);
    try {
      message.loading("파일을 안전하게 저장 중입니다...", 1);
      // 파일 업로드 진행
      const uploadedFileUrl = await uploadToCloudinary(
        fileList[0].originFileObj,
      );

      // EmailJS 전송 데이터 매핑
      const templateParams = {
        ...values, // 폼에 입력된 모든 데이터를 펼쳐서 넣음
        category: values.category ? values.category.join(", ") : "",
        attachment_link: uploadedFileUrl, // 업로드된 파일 주소 추가
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      message.success("참가 신청서가 성공적으로 접수되었습니다!");
      form.resetFields();
      setFileList([]);
      onClose();
    } catch (error) {
      console.error("제출 에러:", error);
      message.error("접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  // =================================================================
  // 💡 반응형 그리드 설정값
  // xs: 모바일 (<576px), sm: 태블릿 이상 (≥576px)
  // span 24는 전체 너비, span 12는 절반 너비를 의미합니다.
  // =================================================================
  const grid3Col = { xs: 24, sm: 8 }; // 모바일 1열, PC 3열
  const grid2Col = { xs: 24, sm: 12 }; // 모바일 1열, PC 2열
  const gridRadio = { xs: 12, sm: 8, md: 6 }; // 라디오 버튼 반응형 배치

  return (
    <Modal
      title="제48회 전국무용예술제 참가 신청서"
      open={isOpen}
      onCancel={onClose}
      footer={null}
      destroyOnClose
      width={800} // PC 최대 너비
      style={{ maxWidth: "calc(100vw - 32px)", top: 20 }} // 모바일에서 꽉 차게 보정
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        scrollToFirstError
      >
        {/* === 1. 인적사항 섹션 === */}
        <Divider orientation="left">인적사항 (필수)</Divider>
        <Row gutter={16}>
          <Col {...grid3Col}>
            <Form.Item
              label="성명"
              name="name"
              rules={[{ required: true, message: "성명을 입력해주세요." }]}
            >
              <Input placeholder="홍길동" />
            </Form.Item>
          </Col>
          <Col {...grid3Col}>
            <Form.Item
              label="생년월일"
              name="birth_date"
              rules={[{ required: true, message: "생년월일을 입력해주세요." }]}
            >
              <Input placeholder="예: 2010.01.01" />
            </Form.Item>
          </Col>
          <Col {...grid3Col}>
            <Form.Item
              label="성별"
              name="gender"
              rules={[{ required: true, message: "성별을 선택해주세요." }]}
            >
              <Radio.Group buttonStyle="solid">
                <Radio.Button value="남">남</Radio.Button>
                <Radio.Button value="여">여</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={10}>
            <Form.Item
              label="학교명"
              name="school_name"
              rules={[{ required: true, message: "학교명을 입력해주세요." }]}
            >
              <Input placeholder="00예술고등학교" />
            </Form.Item>
          </Col>
          {/* 모바일에서는 학년과 연락처가 나란히 보이도록 xs={12} 설정 */}
          <Col xs={12} sm={6}>
            <Form.Item
              label="학년"
              name="grade"
              rules={[{ required: true, message: "학년을 입력해주세요." }]}
            >
              <Input placeholder="2학년" />
            </Form.Item>
          </Col>
          <Col xs={12} sm={8}>
            <Form.Item
              label="참가인 연락처"
              name="contact"
              rules={[{ required: true, message: "연락처를 입력해주세요." }]}
            >
              <Input placeholder="010-0000-0000" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="집 주소"
          name="address"
          rules={[{ required: true, message: "주소를 입력해주세요." }]}
        >
          <Input placeholder="도로명 주소 전체 입력" />
        </Form.Item>

        {/* === 2. 소속/학원 섹션 === */}
        <Divider orientation="left">소속/학원 정보 (필수)</Divider>
        <Row gutter={16}>
          <Col {...grid3Col}>
            <Form.Item
              label="학원명 (소속)"
              name="academy_name"
              rules={[
                { required: true, message: "학원명(소속)을 입력해주세요." },
              ]}
            >
              <Input placeholder="없으면 '없음' 기재" />
            </Form.Item>
          </Col>
          <Col {...grid3Col}>
            <Form.Item
              label="지도교사"
              name="teacher_name"
              rules={[
                { required: true, message: "지도교사 성함을 입력해주세요." },
              ]}
            >
              <Input placeholder="없으면 '없음' 기재" />
            </Form.Item>
          </Col>
          <Col {...grid3Col}>
            <Form.Item
              label="학원/지도자 연락처"
              name="academy_contact"
              rules={[{ required: true, message: "연락처를 입력해주세요." }]}
            >
              <Input placeholder="없으면 본인 연락처 기재" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="학원 주소"
          name="academy_address"
          rules={[{ required: true, message: "학원 주소를 입력해주세요." }]}
        >
          <Input placeholder="없으면 '없음' 기재" />
        </Form.Item>

        {/* === 3. 참가 구분 === */}
        <Divider orientation="left">참가 부문 선택 (필수)</Divider>

        <Form.Item
          name="division"
          rules={[{ required: true, message: "참가 부문을 선택해주세요!" }]}
        >
          <Radio.Group style={{ width: "100%" }}>
            <Row gutter={[8, 8]}>
              {" "}
              {/* 모바일에서 보기 좋게 간격 추가 */}
              {[
                "초등부",
                "중등부",
                "고등부",
                "신인부(대학)",
                "시니어부",
                "일반부",
                "명인부",
              ].map((item) => (
                <Col key={item} {...gridRadio}>
                  <Radio value={item} style={{ whiteSpace: "nowrap" }}>
                    {item}
                  </Radio>
                </Col>
              ))}
            </Row>
          </Radio.Group>
        </Form.Item>

        <Divider orientation="left">참가 종목 선택 (필수/중복 가능)</Divider>
        <Form.Item
          name="category"
          rules={[
            { required: true, message: "참가 종목을 하나 이상 선택해주세요!" },
          ]}
        >
          {/* Radio.Group을 Checkbox.Group으로 변경 */}
          <Checkbox.Group style={{ width: "100%" }}>
            <Row gutter={[8, 8]}>
              {[
                "한국전통",
                "한국창작",
                "발레클래식",
                "발레창작",
                "현대무용",
                "재즈댄스",
                "댄스스포츠",
                "에어로빅",
                "벨리댄스",
                "힙합댄스",
                "방송댄스",
                "라인댄스",
              ].map((item) => (
                <Col key={item} {...gridRadio}>
                  {/* Radio를 Checkbox로 변경 */}
                  <Checkbox value={item} style={{ whiteSpace: "nowrap" }}>
                    {item}
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>

        {/* === 4. 작품 정보 === */}
        <Divider orientation="left">작품 정보 (필수)</Divider>
        <Form.Item
          label="작품명"
          name="piece_title"
          rules={[{ required: true, message: "작품명을 입력해주세요." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="작품 내용"
          name="piece_desc"
          rules={[
            { required: true, message: "작품 내용을 간략히 입력해주세요." },
          ]}
        >
          <Input.TextArea
            rows={3}
            placeholder="내용이 없다면 '내용 없음'으로 적어주세요."
          />
        </Form.Item>

        <Form.Item
          label="입상 경력 및 특기"
          name="awards"
          rules={[{ required: true, message: "경력사항을 입력해주세요." }]}
        >
          <Input.TextArea
            rows={3}
            placeholder="없으면 '없음'으로 적어주세요."
          />
        </Form.Item>

        {/* === 5. 사진 첨부 === */}
        <Divider orientation="left" style={{ borderColor: "#ff4d4f" }}>
          사진 제출 (필수)
        </Divider>
        <Form.Item
          required // 시각적으로 필수임을 표시
          extra={
            <span
              style={{ color: fileList.length === 0 ? "#ff4d4f" : undefined }}
            >
              참가자 사진을 반드시 첨부해주세요.
            </span>
          }
        >
          <Upload
            fileList={fileList}
            onChange={handleFileChange}
            beforeUpload={() => false} // 수동 업로드 처리
            maxCount={1}
            onRemove={() => setFileList([])} // 파일 삭제 시 상태 초기화
          >
            <Button
              icon={<UploadOutlined />}
              type={fileList.length === 0 ? "dashed" : "default"}
              danger={fileList.length === 0}
            >
              {fileList.length > 0 ? "파일 재선택" : "파일 선택하기 (클릭)"}
            </Button>
          </Upload>
          {fileList.length > 0 && (
            <div style={{ marginTop: 8, color: "#52c41a" }}>
              <PaperClipOutlined /> {fileList[0].name} 파일이 선택되었습니다.
            </div>
          )}
        </Form.Item>

        <div
          style={{
            textAlign: "center",
            marginTop: 30,
            marginBottom: 20,
            color: "#666",
          }}
        >
          위와 같이 참가하고자 신청서를 제출합니다.
          <br />
          2026년 {new Date().getMonth() + 1}월 {new Date().getDate()}일
        </div>

        <div style={{ textAlign: "right" }}>
          <Button onClick={onClose} style={{ marginRight: 8 }} size="large">
            취소
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            size="large"
            shape="round"
            style={{ paddingLeft: 30, paddingRight: 30 }}
          >
            신청서 제출하기
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default EmailModal;

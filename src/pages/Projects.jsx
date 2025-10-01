import React from "react";
import { Card, Row, Col, Button } from "antd";
import { business } from "../data/business";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  const programsByYear = projects.reduce((acc, program) => {
    if (!acc[program.year]) acc[program.year] = [];
    acc[program.year].push(program);
    return acc;
  }, {});

  return (
    <div className=" ">
      <h2 className="text-2xl font-bold ">교육 프로그램</h2>
      {Object.keys(programsByYear)
        .sort((a, b) => b - a)
        .map((year) => (
          <div key={year} className="space-y-6 mb-12">
            <h3 className="text-2xl text-gray-400 border-b-2 border-grey-200 pb-2">
              {year}년
            </h3>

            <Row gutter={[16, 16]}>
              {programsByYear[year].map((p) => (
                <Col xs={24} sm={12} md={8} key={p.id}>
                  <Link to={"/projects/" + p.id}>
                    <div className="relative rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300">
                      <img
                        src={p.image} // 이미지 필드
                        alt={p.title}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h4 className="text-white font-bold text-lg">
                          {p.title}
                        </h4>
                        <p className="text-gray-200 text-sm mb-0">
                          대상: {p.target}
                        </p>
                        <p className="text-gray-200 text-sm mb-0">
                          기간: {p.duration}
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        ))}
    </div>
  );
}

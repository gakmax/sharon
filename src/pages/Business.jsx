import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { business } from "../data/business";

export default function Business() {
  const businessByYear = business.reduce((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {});

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">주요사업</h2>

      {Object.keys(businessByYear)
        .sort((a, b) => b - a)
        .map((year) => (
          <div key={year} className="mb-12">
            <h3 className="text-2xl text-gray-500 border-b-2 border-gray-200 pb-2 mb-6">
              {year}년
            </h3>

            <Row gutter={[16, 16]}>
              {businessByYear[year].map((p) => (
                <Col xs={24} sm={12} md={8} key={p.id}>
                  <Link to={"/business/" + p.id}>
                    <div className="relative rounded-sm overflow-hidden shadow-lg hover:shadow-slate-500 hover:-translate-y-1 transform transition-all duration-300">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-56 object-cover block"
                        loading="lazy"
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

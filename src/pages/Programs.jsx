import React from 'react'
import { programs } from '../data/programs'
import { Card, Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'

export default function Programs(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">교육프로그램</h2>
      <Row gutter={[16,16]}>
        {programs.map(p=>(
          <Col xs={24} sm={12} md={8} key={p.id}>
            <Card title={p.title} extra={<Link to={'/programs/'+p.id}>자세히</Link>}>
              <p>{p.summary}</p>
              <p className="text-sm text-gray-500">대상: {p.target} / 기간: {p.duration}</p>
              <div className="mt-3">
                <Button><Link to={'/programs/'+p.id}>상세보기</Link></Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

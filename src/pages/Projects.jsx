import React from 'react'
import { Card, Row, Col, Button } from 'antd'
import { projects } from '../data/projects'
import { Link } from 'react-router-dom'

export default function Projects(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">주요사업</h2>
      <Row gutter={[16,16]}>
        {projects.map(p=>(
          <Col xs={24} sm={12} md={8} key={p.id}>
            <Card title={p.title} extra={<Link to={'/projects/'+p.id}>자세히</Link>}>
              <p>{p.summary}</p>
              <p className="text-sm text-gray-500">일시: {p.date} / 장소: {p.location}</p>
              <div className="mt-3">
                <Button type="primary"><Link to={'/projects/'+p.id}>상세보기</Link></Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

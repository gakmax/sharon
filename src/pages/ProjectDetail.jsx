import React from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { Card, Descriptions } from 'antd'

export default function ProjectDetail(){
  const { id } = useParams()
  const p = projects.find(x=>x.id===id)
  if(!p) return <div>프로젝트를 찾을 수 없습니다.</div>
  return (
    <Card>
      <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
      <Descriptions column={1}>
        <Descriptions.Item label="연도">{p.year}</Descriptions.Item>
        <Descriptions.Item label="일시">{p.date}</Descriptions.Item>
        <Descriptions.Item label="장소">{p.location}</Descriptions.Item>
        <Descriptions.Item label="예산">{p.budget.toLocaleString()} 원</Descriptions.Item>
        <Descriptions.Item label="요약">{p.summary}</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

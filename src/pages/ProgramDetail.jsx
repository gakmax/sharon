import React from 'react'
import { useParams } from 'react-router-dom'
import { programs } from '../data/programs'
import { Card, Descriptions } from 'antd'

export default function ProgramDetail(){
  const { id } = useParams()
  const p = programs.find(x=>x.id===id)
  if(!p) return <div>프로그램을 찾을 수 없습니다.</div>
  return (
    <Card>
      <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
      <Descriptions column={1}>
        <Descriptions.Item label="대상">{p.target}</Descriptions.Item>
        <Descriptions.Item label="기간">{p.duration}</Descriptions.Item>
        <Descriptions.Item label="요금">{p.fee}</Descriptions.Item>
        <Descriptions.Item label="요약">{p.summary}</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}

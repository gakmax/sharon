import React from 'react'
import { Table, Button } from 'antd'
import { resources } from '../data/resources'

export default function Resources(){
  const cols = [
    { title:'파일명', dataIndex:'name', key:'name' },
    { title:'작성일', dataIndex:'date', key:'date' },
    { title:'다운로드', key:'link', render:(t, r)=>(<Button href={r.link} disabled>다운로드</Button>)}
  ]
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">자료실</h2>
      <Table dataSource={resources} columns={cols} rowKey="id" />
    </div>
  )
}

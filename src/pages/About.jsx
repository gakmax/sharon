import React from 'react'
import { Descriptions, Card, Table } from 'antd'
import { members } from '../data/members'

export default function About(){
  const execData = members.executives.map((name, idx)=>({ key: idx, name }))
  return (
    <div className="space-y-6">
      <Card>
        <Descriptions title="법인 일반현황" bordered column={1}>
          <Descriptions.Item label="법인명">{members.organization.name}</Descriptions.Item>
          <Descriptions.Item label="대표(이사장)">{members.organization.representative}</Descriptions.Item>
          <Descriptions.Item label="소재지">{members.organization.address}</Descriptions.Item>
          <Descriptions.Item label="사무국">{members.organization.office}</Descriptions.Item>
          <Descriptions.Item label="비전">전통문화예술의 계승과 인재 양성</Descriptions.Item>
        </Descriptions>
      </Card>

      <Card title="임원명단">
        <Table dataSource={execData} pagination={false} columns={[{title:'임원', dataIndex:'name', key:'name'}]} />
      </Card>
    </div>
  )
}

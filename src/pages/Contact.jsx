import React from 'react'
import { Form, Input, Button, Card } from 'antd'

export default function Contact(){
  const onFinish = (values)=> {
    console.log('문의 제출', values)
    alert('문의가 접수되었습니다 (더미).')
  }
  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">문의하기</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="이름" name="name" rules={[{ required:true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="이메일" name="email" rules={[{ required:true, type:'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="문의내용" name="message" rules={[{ required:true }]}>
          <Input.TextArea rows={6} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">전송</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

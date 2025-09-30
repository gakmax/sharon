import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'antd'

export default function NoticeDetail() {
  const { id } = useParams()
  const notices = [
    {
      id: "1",
      title: "제40회 전국무용예술제 안내",
      date:
        <div className='flex border-b-[1px] mb-4 pb-4'>
          <div className='text-gray-400 mr-1'>관리자 | </div>
          <div className='text-gray-400'>2018-01-28</div>
        </div>,
      content: <>
        <img src={image403} className='mx-auto' />
        <img src={image401} className='mx-auto' />
        <img src={image402} className='mx-auto' />
      </>
    },
    {
      id: "2",
      title: "제41회 전국무용예술제 안내",
      date:
        <div className='flex border-b-[1px] mb-4 pb-4'>
          <div className='text-gray-400 mr-1'>관리자 | </div>
          <div className='text-gray-400'>2019-01-31</div>
        </div>,
      content: <>
        <img src={image411} className='mx-auto' />
        <img src={image412} className='mx-auto' />
      </>
    },
    {
      id: "3",
      title: "제42회 전국무용예술제 안내",
      date:
        <div className='flex border-b-[1px] mb-4 pb-4'>
          <div className='text-gray-400 mr-1'>관리자 | </div>
          <div className='text-gray-400'>2020-02-05</div>
        </div>,
      content: <>
        <img src={image421} className='mx-auto' />
        <img src={image422} className='mx-auto' />
        <img src={image423} className='mx-auto' />
        <img src={image424} className='mx-auto' />
      </>
    },
    {
      id: "4",
      title: "제43회 전국무용예술제 안내",
      date:
        <div className='flex border-b-[1px] mb-4 pb-4'>
          <div className='text-gray-400 mr-1'>관리자 | </div>
          <div className='text-gray-400'>2021-03-25</div>
        </div>,
      content: <>
        <img src={image431} className='mx-auto' />
        <img src={image432} className='mx-auto' />
      </>
    },
    {
      id: "5",
      title: "제44회 전국무용예술제 안내",
      date:
        <div className='flex border-b-[1px] mb-4 pb-4'>
          <div className='text-gray-400 mr-1'>관리자 | </div>
          <div className='text-gray-400'>2022-02-18</div>
        </div>,
      content: <>
        <img src={image441} className='mx-auto' />
        <img src={image442} className='mx-auto' />
      </>
    },
    {
      id: "6",
      title: "제45회 전국무용예술제 안내",
      date:
        <div className='flex border-b-[1px] mb-4 pb-4'>
          <div className='text-gray-400 mr-1'>관리자 | </div>
          <div className='text-gray-400'>2023-02-09</div>
        </div>,
      content: <>
        <img src={image451} className='mx-auto' />
        <img src={image452} className='mx-auto' />
        <img src={image453} className='mx-auto' />
      </>
    },
    {
      id: "7",
      title: "제47회 전국무용예술제 안내",
      date:
        <div className='flex border-b-[1px] mb-4 pb-4'>
          <div className='text-gray-400 mr-1'>관리자 | </div>
          <div className='text-gray-400'>2025-03-03</div>
        </div>,
      content: <>
        <img src={image471} className='mx-auto' />
        <img src={image472} className='mx-auto' />
      </>
    }
  ]

  const n = notices.find(x => x.id === id)

  if (!n) return <div>공지사항을 찾을 수 없습니다.</div>

  return (
    <Card className="p-6">
      <h1>공지사항</h1>
      <h2 className="text-2xl font-bold mb-4">{n.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{n.date}</p>
      {/* JSX content는 그냥 렌더링 */}
      <div>{n.content}</div>
    </Card>
  )
}

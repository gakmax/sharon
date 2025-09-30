import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Programs from './pages/Programs'
import ProgramDetail from './pages/ProgramDetail'
import Resources from './pages/Resources'
import Notices from './pages/Notices'
import NoticeDetail from './pages/NoticeDetail'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const { Content } = Layout

export default function App(){
  return (
    <Layout className="min-h-screen">
      <Navbar />
      <Content style={{ paddingTop: 64 }}>
        <div className="max-w-6xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/projects/:id" element={<ProjectDetail/>} />
            <Route path="/programs" element={<Programs/>} />
            <Route path="/programs/:id" element={<ProgramDetail/>} />
            <Route path="/resources" element={<Resources/>} />
            <Route path="/notices" element={<Notices/>} />
            <Route path="/notices/:id" element={<NoticeDetail/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>© 사단법인 무궁화예술단</Footer>
    </Layout>
  )
}

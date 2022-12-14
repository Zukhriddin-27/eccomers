import React from 'react'
import { Space, Spin } from 'antd'
import './style.css'
const Loading = () => (
  <Space
    direction='vertical'
    center
    style={{
      width: '320%',
      alignItems: 'center',
    }}
  >
    <Spin tip='Loading...'></Spin>
  </Space>
)
export default Loading

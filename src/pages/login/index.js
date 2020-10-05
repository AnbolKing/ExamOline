import React, { useState } from 'react';
import { 
  Form,
  Input,
  Button,
 } from 'antd';
import './style.css';
import loginLogo from '../../assets/login-log.png';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
 
const Login = () => {

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const onFinish = (event) => {
    setName(event.username);
    setPass(event.userpass);
    console.log(name,pass);
  }

  const onFinishFailed = () => {
    console.log('error');
  }

  return (
    <div className="index-login">
      <div className="login-contain">
        <div className="content">
          <img src={loginLogo} alt=""/>
          <h1>iNCU-Exam for Ncuhomers📌</h1>
          <span className="wel-word">Welcome you gays!~</span>
          <Form
            className="login-form"
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div className="input-box">
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input size="large" placeholder="请输入US账号" prefix={<UserOutlined />} className="login-input" />
            </Form.Item>
            <Form.Item
              name="userpass"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input.Password size="large" placeholder="请输入US账号密码" prefix={<LockOutlined />} className="login-input" />
            </Form.Item>
            </div>
            <Form.Item>
              <div className="button-box">
                <Button type="primary" className="button" htmlType="submit">登录</Button>
                <Button type="default" className="button password-btn">
                  <a href="http://us.ncuos.com/user/login">
                    忘记密码
                  </a>
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login;
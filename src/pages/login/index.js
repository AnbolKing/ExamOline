import React , { Component } from 'react';
import { 
  Input,
  Button,
  message
 } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
  BoxContain,
  InputBox,
  inputStyle,
  ButtonBox,
  buttonStyle,
  loginBox
} from './style';
// import axios from 'axios';
 
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'',
      pass:'',
    }
    this.handleName = this.handleName.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    //账号不为空
    if(this.state.name==='') {
      message.warning({
        content:'账号不可以为空哦~',
        style:{
          marginTop:'20px',
        }
      });
      return ;
    }
    //密码不为空
    if(this.state.pass==='') {
      message.warning({
        content:'密码不可以为空哦~',
        style:{
          marginTop:'20px',
        }
      });
      return ;
    }
    //TODO 发送请求
    console.log('ok');
  }

  handleName(event) {
    this.setState({
      name:event.target.value
    })
  }

  handlePass(event) {
    this.setState({
      pass:event.target.value
    })
  }

  render() {
    return (
      <div style={loginBox} className="loginBox">
        <div style={BoxContain} className="BoxContain">
          <div style={InputBox} className="InputBox">
            <Input size="large" placeholder="账号" prefix={<UserOutlined />} style={inputStyle} onChange={this.handleName} value={this.state.name}/>
            <Input.Password size="large" placeholder="密码" prefix={<LockOutlined />} style={inputStyle} onChange={this.handlePass} value={this.state.pass}/>
          </div>
          <div style={ButtonBox} className="ButtonBox">
            <Button type="primary" style={buttonStyle} onClick={this.handleLogin}>登 录</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
import React, { Component } from 'react';
import {
  contentHeader,
  textStyle,
  buttonBox,
  buttonStyle
} from './style'
import { Button, Dropdown, Menu } from 'antd'
import { DownOutlined, ArrowRightOutlined } from '@ant-design/icons';


class ExamManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
       menu: (
        <Menu>
          <Menu.Item key="1" icon={<ArrowRightOutlined />}>
            分类一
          </Menu.Item>
          <Menu.Item key="2" icon={<ArrowRightOutlined />}>
            分类二
          </Menu.Item>
        </Menu>
       )
    }
  }
  render() {
    return (
      <div className="indexBox">
        <div className="buttonBox" style={buttonBox}>
          <Button style={buttonStyle}>创建考试</Button>
          <Dropdown overlay={this.state.menu}>
            <Button style={buttonStyle}>
              试卷分类 <DownOutlined />
            </Button>
          </Dropdown>
          <Button style={buttonStyle}>分类管理</Button>
        </div>
        <div className="content">
          <div className="content-header" style={contentHeader}>
            <div style={textStyle}>名称</div>
            <div style={textStyle}>创建人</div>
            <div style={textStyle}>开始时间</div>
            <div style={textStyle}>结束时间</div>
            <div style={textStyle}>考试时长</div>
            <div style={textStyle}>创建时间</div>
          </div>
          <div className="content-body" style={contentHeader}>
            <div style={textStyle}>研发组</div>
            <div style={textStyle}>古新宇</div>
            <div style={textStyle}>2020/8/22 18：00</div>
            <div style={textStyle}>2020/8/22 20：00</div>
            <div style={textStyle}>两小时</div>
            <div style={textStyle}>2020/8/22 15；00</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ExamManage;
//TODO 补充子路由
import React, { Component } from 'react';
import {
  contentStyle,
  submitStyle,
  submitButtonStyle
} from './style';
import {
  Button,
  Drawer,
  Menu,
  Dropdown,
  Card
} from 'antd';
import { DownOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Choose from '../../title/components/choose';
import Tiankong from '../../title/components/tiankong/index';
import Question from '../../title/components/question/index';
import Judge from '../../title/components/judge/index';
import Pic from '../../title/components/pic/index';
import './style.css';

class LookExam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible:false,
      titleType:['选择题型','选择题','填空题','问答题','作图题','判断题'],
      titleKey:1,
    }
  }
  

  handleAddTitle = () => {
    this.setState({
      isVisible:true,
    })
  }

  handleClose = () => {
    this.setState({
      isVisible:false,
    })
  }

  handleTitleMaker = () => {
    if(this.state.titleKey === 1) {
      return (
        <Choose />
      )
    }
    if(this.state.titleKey === 2) {
      return (
        <Tiankong />
      )
    }
    if(this.state.titleKey === 3) {
      return (
        <Question />
      )
    }
    if(this.state.titleKey === 4) {
      return (
        <Pic />
      )
    }
    if(this.state.titleKey === 5) {
      return (
        <Judge />
      )
    }
    else {
      return null;
    }
  }

  handleChangeClass = (event) => {
    this.setState({
      titleKey:parseInt(event.key)
    })
  }

  render() {
    return (
      <div className="indexBox">
        <Drawer
          width={700}
          visible={this.state.isVisible}
          onClose={this.handleClose}
          title="添加题目"
        >
          <Dropdown overlay={
            <Menu onClick={this.handleChangeClass}>
              <Menu.Item key="1" icon={<ArrowRightOutlined />}>
                选择题
              </Menu.Item>
              <Menu.Item key="2" icon={<ArrowRightOutlined />}>
                填空题
              </Menu.Item>
              <Menu.Item key="3" icon={<ArrowRightOutlined />}>
                问答题
              </Menu.Item>
              <Menu.Item key="4" icon={<ArrowRightOutlined />}>
                作图题
              </Menu.Item>
              <Menu.Item key="5" icon={<ArrowRightOutlined />}>
                判断题
              </Menu.Item>
            </Menu>
            }
          >
            <Button>
              {(this.state.titleType)[this.state.titleKey]} <DownOutlined />
            </Button>
          </Dropdown>
          {
            this.handleTitleMaker()
          }
        </Drawer>
        <div className="titleContent" style={contentStyle}>
          <Card
            actions={[
              <div className="action-log" onClick={this.handleAddTitle}>
                添加题目
              </div>,
              <div className="action-log">
                修改题目
              </div>
            ]}
          >
            <div className="title-content">
              请你阐述以下你为什么要加入家园工作室？希望收获什么，希望得到什么？希望你的学长学姐是什么样的人？希望做什么样的事情
            </div>
          </Card>
          <Card
            actions={[
              <div className="action-log" onClick={this.handleAddTitle}>
                添加题目
              </div>,
              <div className="action-log">
                修改题目
              </div>
            ]}
          >
            <div className="title-content">
              请你阐述以下你为什么要加入家园工作室？希望收获什么，希望得到什么？希望你的学长学姐是什么样的人？希望做什么样的事情
            </div>
          </Card>
          <Card
            actions={[
              <div className="action-log" onClick={this.handleAddTitle}>
                添加题目
              </div>,
              <div className="action-log">
                修改题目
              </div>
            ]}
          >
            <div className="title-content">
              请你阐述以下你为什么要加入家园工作室？希望收获什么，希望得到什么？希望你的学长学姐是什么样的人？希望做什么样的事情
            </div>
          </Card>
        </div>
        <div className="submit" style={submitStyle}>
          <Button type="primary" style={submitButtonStyle}>发布试卷</Button>
        </div>
      </div>
    )
  }
}

export default LookExam;
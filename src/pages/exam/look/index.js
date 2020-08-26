import React, { Component } from 'react';
import {
  contentStyle,
  itemStyle,
  mistakeStyle,
  buttonStyle,
  addStyle,
  elementStyle,
  addTitleStyle,
  submitStyle,
  submitButtonStyle
} from './style';
import {
  Button,
  Drawer,
  Menu,
  Dropdown
} from 'antd';
import { DownOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Choose from '../../title/components/choose';
import Tiankong from '../../title/components/tiankong/index';
import Question from '../../title/components/question/index';
import Judge from '../../title/components/judge/index';

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
          <div className="element" style={elementStyle}>
            <div className="item" style={itemStyle}>
              这是个选择题这是个选择题这是个选择题这是个选择题
              <div className="mistake" style={mistakeStyle}>
                <Button type="default" style={buttonStyle}>修改</Button>
              </div>
            </div>
            <div className="add" style={addTitleStyle} onClick={this.handleAddTitle}>
              <Button type="default" style={addStyle}>在这里添加题目</Button>
            </div>
          </div>
        </div>
        <div className="submit" style={submitStyle}>
          <Button type="primary" style={submitButtonStyle}>发布试卷</Button>
        </div>
      </div>
    )
  }
}

export default LookExam;
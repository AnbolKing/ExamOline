import React, { Component } from 'react';
import { Button, Dropdown, Menu } from 'antd'
import { DownOutlined, ArrowRightOutlined } from '@ant-design/icons';
import{
  buttonBox,
  buttonStyle,
  titleContent
} from './style';
import Choose from './components/choose/index';
import Tiankong from './components/tiankong/index';
import Question from './components/question/index';
import Judge from './components/judge/index';

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
       classifiction:['选择分类','分类一','分类二','创新分类'],
       titleType:['选择题型','选择题','填空题','问答题','作图题','判断题'],
       classKey:0,
       titleKey:1,
    }
    this.handleChangeClass = this.handleChangeClass.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleShowTitleContent = this.handleShowTitleContent.bind(this);
  }

  handleShowTitleContent() {
    const index = this.state.titleKey;
    if(index === 1) {
      return (
        <Choose />
      )
    }
    if(index === 2) {
      return (
        <Tiankong />
      )
    }
    if(index === 3) {
      return (
        <Question />
      )
    }
    if(index === 5) {
      return (
        <Judge />
      )
    }
  }

  handleChangeTitle(event) {
    this.setState({
      classKey:parseInt(event.key)
    })
  }

  handleChangeClass(event) {
    this.setState({
      titleKey:parseInt(event.key)
    })
  }

  render() {
    return (
      <div className="indexBox">
        <div className="buttonBox" style={buttonBox}>
          <Dropdown overlay={
            <Menu onClick={this.handleChangeTitle}>
              <Menu.Item key="1" icon={<ArrowRightOutlined />}>
                分类一
              </Menu.Item>
              <Menu.Item key="2" icon={<ArrowRightOutlined />}>
                分类二
              </Menu.Item>
              <Menu.Item key="3" icon={<ArrowRightOutlined />}>
                创建新分类
              </Menu.Item>
            </Menu>
          }
          >
            <Button style={buttonStyle}>
              {(this.state.classifiction)[this.state.classKey]} <DownOutlined />
            </Button>
          </Dropdown>
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
            <Button style={buttonStyle}>
              {(this.state.titleType)[this.state.titleKey]} <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div className="titleContent" style={titleContent}>
          {
            this.handleShowTitleContent()
          }
        </div>
      </div>
    )
  }
}

export default Title;
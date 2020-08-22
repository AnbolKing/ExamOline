import React, { Component } from 'react';
import { Button, Dropdown, Menu } from 'antd'
import { DownOutlined, ArrowRightOutlined } from '@ant-design/icons';
import{
  buttonBox,
  buttonStyle
} from './style';

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
       menu: (
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
       ),
       menu1: (
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
       ),
       classifiction:'选择分类',
       titleType:'选择题型'
    }
    this.handleChangeClass = this.handleChangeClass.bind(this);
  }

  handleChangeClass(event) {
    console.log(event);
    //TODO 无法执行该函数
  }

  render() {
    return (
      <div className="indexBox">
        <div className="buttonBox" style={buttonBox}>
          <Dropdown overlay={this.state.menu1}>
            <Button style={buttonStyle}>
              {this.state.classifiction} <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={this.state.menu}>
            <Button style={buttonStyle}>
              {this.state.titleType} <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default Title;
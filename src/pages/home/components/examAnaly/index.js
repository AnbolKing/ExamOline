import React, { Component } from 'react';
import {
  buttonBox,
  buttonStyle,
  inputStyle,
  contentHeader,
  textStyle,
  bodyHeader
} from './style';
import { Button, Dropdown, Menu, Input} from 'antd';
import { DownOutlined, ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';

class ExamAnaly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classifiction:['选择分类','研发组','产品组','设计组','运营组','行政组'],
      classKey:0,
    }
  }

  handleChangeTitle = (event) => {
    this.setState({
      classKey:parseInt(event.key)
    })
  }

  render() {
    return (
      <div className="indexBox">
        <div className="buttonBox" style={buttonBox}>
          <Dropdown overlay={
            <Menu onClick={this.handleChangeTitle}>
              <Menu.Item key="1" icon={<ArrowRightOutlined />}>
                研发组
              </Menu.Item>
              <Menu.Item key="2" icon={<ArrowRightOutlined />}>
                产品组
              </Menu.Item>
              <Menu.Item key="3" icon={<ArrowRightOutlined />}>
                设计组
              </Menu.Item>
              <Menu.Item key="4" icon={<ArrowRightOutlined />}>
                运营组
              </Menu.Item>
              <Menu.Item key="5" icon={<ArrowRightOutlined />}>
                行政组
              </Menu.Item>
            </Menu>
          }>
            <Button style={buttonStyle}>
            {(this.state.classifiction)[this.state.classKey]} <DownOutlined />
            </Button>
          </Dropdown>
          <Input
            placeholder="请输入类型"
            suffix={<SearchOutlined />}
            style={inputStyle}
          />
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
          <div className="content-body" style={bodyHeader}>
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

export default ExamAnaly;
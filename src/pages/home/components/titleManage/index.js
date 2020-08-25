import React, { Component } from 'react';
import {
  buttonBox,
  buttonStyle
} from './style';
import { Button, Dropdown, Menu} from 'antd';
import { DownOutlined, ArrowRightOutlined } from '@ant-design/icons';
import store from '../../../../reducer/index';
import emitter from '../../../../util/events';

class TitleManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classifiction:['选择分类','研发组','产品组','设计组','运营组','行政组'],
      classKey:0,
      titleKey:1,
    }
  }

  handleAdd = () => {
    const action = {
      type:'add_title',
      page:5,
    }
    store.dispatch(action);
    emitter.emit('getPage');
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
          <Button style={buttonStyle} onClick={this.handleAdd}>添加题目</Button>
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
        </div>
      </div>
    )
  }
}

export default TitleManage;
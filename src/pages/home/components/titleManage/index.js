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
      menu: (
       <Menu>
         <Menu.Item key="1" icon={<ArrowRightOutlined />}>
           分类一
         </Menu.Item>
         <Menu.Item key="2" icon={<ArrowRightOutlined />}>
           分类二
         </Menu.Item>
       </Menu>
      ),
    }
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const action = {
      type:'add_title',
      page:5,
    }
    store.dispatch(action);
    emitter.emit('getPage');
  }

  render() {
    return (
      <div className="indexBox">
        <div className="buttonBox" style={buttonBox}>
          <Button style={buttonStyle} onClick={this.handleAdd}>添加题目</Button>
          <Dropdown overlay={this.state.menu}>
            <Button style={buttonStyle}>
              题目查看分类 <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default TitleManage;
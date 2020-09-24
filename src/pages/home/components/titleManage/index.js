import React, { Component } from 'react';
import {
  buttonBox,
  buttonStyle,
  // inputStyle
} from './style';
import { 
  Button, 
  Dropdown, 
  Menu,
  Collapse, 
  Drawer
} from 'antd';
import { 
  DownOutlined, 
  ArrowRightOutlined,
} from '@ant-design/icons';
import store from '../../../../reducer/index';
import emitter from '../../../../util/events';
import Choose from '../../../title/components/choose/index';
import Judge from '../../../title/components/judge/index';
import Pic from '../../../title/components/pic/index';
import Question from '../../../title/components/question/index';
import Tiankong from '../../../title/components/tiankong/index';
const { Panel } = Collapse;

class TitleManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classifiction:['选择分类','研发组','产品组','设计组','运营组','行政组'],
      classKey:0,
      isVisible:false,
      titleType:['选择题型','选择题','填空题','问答题','作图题','判断题'],
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

  handleTodo = (id) => {
    console.log(id);
    this.setState({
      isVisible:true,
      classKey:id
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
          title={'正在给 <'+(this.state.classifiction)[this.state.classKey]+'> 添加选做题，请选择选做题题型'}
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
        <div className="container">
          <Collapse
            //defaultActiveKey={['1']}
            //onChange={callback}
            expandIconPosition='right'
          >
            <Panel header="研发组" key="1" className="development">
              <div onClick={() => {this.handleTodo(1)}}>点击添加选做题，默认该组没有选做题</div>
            </Panel>
            <Panel header="产品组" key="2" className="product">
              <div onClick={() => {this.handleTodo(2)}}>点击添加选做题，默认该组没有选做题</div>
            </Panel>
            <Panel header="设计组" key="3" className="operate">
              <div onClick={() => {this.handleTodo(3)}}>点击添加选做题，默认该组没有选做题</div>
            </Panel>
            <Panel header="运营组" key="4" className="design">
              <div onClick={() => {this.handleTodo(4)}}>点击添加选做题，默认该组没有选做题</div>
            </Panel>
            <Panel header="行政组" key="5" className="administration">
              <div onClick={() => {this.handleTodo(5)}}>点击添加选做题，默认该组没有选做题</div>
            </Panel>
          </Collapse>
        </div>
      </div>
    )
  }
}

export default TitleManage;
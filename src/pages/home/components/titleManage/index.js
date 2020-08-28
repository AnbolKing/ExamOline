import React, { Component } from 'react';
import {
  buttonBox,
  buttonStyle,
  inputStyle
} from './style';
import { 
  Button, 
  Dropdown, 
  Menu,
  Collapse, 
  Modal,
  Input
} from 'antd';
import { 
  DownOutlined, 
  ArrowRightOutlined,
  PlusOutlined 
} from '@ant-design/icons';
import store from '../../../../reducer/index';
import emitter from '../../../../util/events';
const { Panel } = Collapse;
const { TextArea } = Input;

class TitleManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classifiction:['选择分类','研发组','产品组','设计组','运营组','行政组'],
      classKey:0,
    }
  }

  handleAdd = () => {
    // if(this.state.classKey === 0) {
    //   message.warning({
    //     content:'请先选择类别哦我的亲~'
    //   });
    //   return ;
    // }
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

  handleGenExtra = (id) => (
    <PlusOutlined
      onClick = {event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        //event.stopPropagation();
        console.log(id);
        Modal.info({
          title:(
            <TextArea placeholder="请输入类别名称" autoSize style={inputStyle}/>
          ),
          content:(
            <TextArea placeholder="请输入类别描述（可不填）" autoSize={{ minRows: 4, maxRows: 8 }} style={inputStyle}/>
          ),
          maskClosable:'true',
          okText:'添加'
        });
      }}
    />
  )

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
        <div className="container">
          <Collapse
            //defaultActiveKey={['1']}
            //onChange={callback}
            expandIconPosition='right'
          >
            <Panel header="研发组" key="1" extra={this.handleGenExtra(1)}>
              <div>无可奉告，手下留情，生活不易，有恩必报！</div>
            </Panel>
            <Panel header="产品组" key="2" extra={this.handleGenExtra(2)}>
              <div>无可奉告，手下留情，生活不易，有恩必报！</div>
            </Panel>
            <Panel header="运营组" key="3" extra={this.handleGenExtra(3)}>
              <div>无可奉告，手下留情，生活不易，有恩必报！</div>
            </Panel>
            <Panel header="设计组" key="4" extra={this.handleGenExtra(4)}>
              <div>无可奉告，手下留情，生活不易，有恩必报！</div>
            </Panel>
            <Panel header="行政组" key="5" extra={this.handleGenExtra(5)}>
              <div>无可奉告，手下留情，生活不易，有恩必报！</div>
            </Panel>
          </Collapse>
        </div>
      </div>
    )
  }
}

export default TitleManage;
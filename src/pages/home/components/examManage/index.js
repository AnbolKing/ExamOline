import React, { Component } from 'react';
import {
  buttonBox,
  buttonStyle,
} from './style'
import { Button, Dropdown, Menu, Table } from 'antd'
import { DownOutlined, ArrowRightOutlined } from '@ant-design/icons';
import store from '../../../../reducer/index';
import emitter from '../../../../util/events';
import './style.css';

class ExamManage extends Component {
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

  //通过map得到item里的id作为参数传递给handleDetail函数赋值给id
  handleLookExam = (item) => {
    console.log(item);
    const action = {
      type:'exam_detail',
      page:6,
      id:item
    }
    store.dispatch(action);
    emitter.emit('getPage');
  }

  handleCreateExam = () => {
    const action = {
      type:'create_exam',
      page:7,
    }
    store.dispatch(action);
    emitter.emit('getPage');
  }

  render() {
    const column = [
      {
        title:'名称',
        dataIndex:'name',
        key:'name',
        render: text => <a onClick={() => {{this.handleLookExam(text)}}}>{text}</a>,
      },
      {
        title:'创建人',
        dataIndex:'create',
        key:'create',
        // render:text => <a>{text}</a>,
      },
      {
        title:'开始时间',
        dataIndex:'start',
        key:'start',
        // render:text => <a>{text}</a>,
      },
      {
        title:'结束时间',
        dataIndex:'end',
        key:'end',
        // render:text => <a>{text}</a>,
      },
      {
        title:'考试时长',
        dataIndex:'time',
        key:'time',
        // render:text => <a>{text}</a>,
      },
      {
        title:'创建时间',
        dataIndex:'createTime',
        key:'createTime',
        // render:text => <a>{text}</a>,
      }
    ];

    const data = [
      {
        key:'1',
        name:'研发组',
        create:'王子安',
        start:'2020/8/22 18：00',
        end:'2020/8/22 22：00',
        time:'2 小时',
        createTime:'2020/8/22 15：00'
      },
      {
        key:'2',
        name:'设计组',
        create:'买雨萱',
        start:'2020/8/22 18：00',
        end:'2020/8/22 22：00',
        time:'2.5 小时',
        createTime:'2020/8/22 15：00'
      },
      {
        key:'3',
        name:'产品组',
        create:'苟冰玥',
        start:'2020/8/22 18：00',
        end:'2020/8/22 22：00',
        time:'3 小时',
        createTime:'2020/8/22 15：00'
      }
    ];

    return (
      <div className="indexBox">
        <div className="buttonBox" style={buttonBox}>
          <Button style={buttonStyle} onClick={this.handleCreateExam}>创建考试</Button>
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
          <Button style={buttonStyle}>分类管理</Button>
        </div>
        <div className="content">
          <Table 
            columns={column} 
            dataSource={data}
            pagination={false}
          />
          {/* <div className="content-header" style={contentHeader}>
            <div style={textStyle}>名称</div>
            <div style={textStyle}>创建人</div>
            <div style={textStyle}>开始时间</div>
            <div style={textStyle}>结束时间</div>
            <div style={textStyle}>考试时长</div>
            <div style={textStyle}>创建时间</div>
          </div>
          <div className="container">
            <div className="content-body" style={contentHeaderStyle} onClick={() => {this.handleLookExam(1)}}>
              <div style={textStyle}>研发组</div>
              <div style={textStyle}>古新宇</div>
              <div style={textStyle}>2020/8/22 18：00</div>
              <div style={textStyle}>2020/8/22 20：00</div>
              <div style={textStyle}>两小时</div>
              <div style={textStyle}>2020/8/22 15：00</div>
            </div>
            <div className="content-body" style={contentHeaderStyle} onClick={() => {this.handleLookExam(2)}}>
              <div style={textStyle}>产品组</div>
              <div style={textStyle}>苟冰玥</div>
              <div style={textStyle}>2020/8/22 18：00</div>
              <div style={textStyle}>2020/8/22 20：00</div>
              <div style={textStyle}>一小时半</div>
              <div style={textStyle}>2020/8/22 15：00</div>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default ExamManage;
import React, { Component } from 'react';
import { Button, Table } from 'antd';
import {
  header,
  buttonStyle,
  middle,
} from './style';
import store from '../../../../reducer/index';
import emitter from '../../../../util/events';

class IndexPage extends Component {

  //TODO 发送请求-获取考试类别信息。
  componentDidMount() {

  }

  handleAddTitle = () => {
    const action = {
      type:'add_title',
      page:5,
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

  //通过map得到item里的id作为参数传递给handleDetail函数赋值给id
  handleDetail = (item) => {
    const action = {
      type:'exam_detail',
      page:6,
      id:item
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
        render: text => <a onClick={() => {{this.handleDetail(text)}}}>{text}</a>,
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
        <div className="header" style={header}>
          <Button className="addTitle" style={buttonStyle} onClick={this.handleAddTitle}>
            添加题目
          </Button>
          <Button className="addExam" style={buttonStyle} onClick={this.handleCreateExam}>
            创建考试
          </Button>
        </div>
        <div className="middle" style={middle}>
          考试
        </div>
        <div className="content">
          <Table 
            columns={column} 
            dataSource={data}
            pagination={false}
          />
        </div>
      </div>
    )
  }
}

export default IndexPage;
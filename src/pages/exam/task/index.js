import React, { Component } from 'react';
import {
  Button,
  Table
} from 'antd';
import {
  headerStyle,
  button1Style,
  button4Style,
  buttonStyle,
} from './style';
import store from '../../../reducer/index';
import emitter from '../../../util/events'

class LookTask extends Component {

  handleReturn = () => {
    const action = {
      type:'return_page',
      page:6,
    }
    store.dispatch(action); 
    emitter.emit('getPage');
  }

  handleCheck = () => {
    const action = {
      type:'check_exam',
      page:8,
    }
    store.dispatch(action); 
    emitter.emit('getPage');
  }

  handleCorrect = () => {
    const action = {
      type:'correct_exam',
      page:9,
    }
    store.dispatch(action); 
    emitter.emit('getPage');
  }
  
  render() {
    const column = [
      {
        title:'姓名',
        dataIndex:'name',
        key:'name',
        render: text => <a href="javascript:;" onClick={this.handleCheck}>{text}</a>,
      },
      {
        title:'考试分数',
        dataIndex:'grade',
        key:'grade',
      },
      {
        title:'考试结果',
        dataIndex:'result',
        key:'result',
      },
      {
        title:'切屏次数',
        dataIndex:'screen',
        key:'screen',
      },
      {
        title:'批改状态',
        dataIndex:'current',
        key:'current',
      },
      {
        title:'查看考生试卷',
        dataIndex:'look',
        key:'look',
      },
      {
        title:'批改试卷',
        dataIndex:'judge',
        key:'judge',
      }
    ];

    const data = [
      {
        key:'1',
        name:'王子安',
        grade:'90',
        result:'通过',
        screen:'1',
        current:'已批改',
        look:'小眼睛',
        judge:'小钢笔'
      },
      {
        key:'1',
        name:'聂一可',
        grade:'90',
        result:'通过',
        screen:'1',
        current:'已批改',
        look:'小眼睛',
        judge:'小钢笔'
      },
      {
        key:'1',
        name:'苟冰玥',
        grade:'90',
        result:'通过',
        screen:'1',
        current:'未批改',
        look:'小眼睛',
        judge:'小钢笔'
      }
    ];
    return (
      <div className="indexBox">
        <div className="exam-header" style={headerStyle}>
          <div className="return" style={button1Style} onClick={this.handleReturn}>
            <Button style={buttonStyle}>返回</Button>
          </div>
          <div style={button4Style} className="check" onClick={this.handleCorrect}>
            <Button style={buttonStyle}>统一开始批改</Button>
          </div>
        </div>
        <div className="exam-content">
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

export default LookTask
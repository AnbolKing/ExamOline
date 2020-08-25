import React, { Component } from 'react';
import store from '../../../reducer/index';
import emitter from '../../../util/events'
import {
  titleStyle,
  itemStyle,
  boxStyle,
  infoStyle,
  recordStyle,
  buttonStyle,
  detailStyle,
  textStyle,
  priStyle,
} from './style';
import {
  Button,
  Modal,
  Table
} from 'antd';

class CheckExam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[
        {
          key:'1',
          name:'古新宇',
          time:'2020/8/20',
          grade:'100'
        },
        {
          key:'1',
          name:'刘镇',
          time:'2020/8/22',
          grade:'90'
        }
      ]
    }
  }
  
  handleCorrect = () => {
    const action = {
      type:'correct_exam',
      page:9,
    }
    store.dispatch(action); 
    emitter.emit('getPage');
  }

  handleRecord = () => {
    const columns = [
      {
        title:'判卷人',
        dataIndex:'name',
        key:'name'
      },
      {
        title:'判卷时间',
        dataIndex:'time',
        key:'time'
      },
      {
        title:'分数',
        dataIndex:'grade',
        key:'grade'
      }
    ]
    Modal.info({
      content:(
        <Table dataSource={this.state.dataSource} columns={columns} />
      ),
      maskClosable:'true'
    });
  }

  render() {
    return (
      <div className="indexBox" style={boxStyle}>
        <div className="title" style={titleStyle}>
          <div className="titleOne" style={itemStyle}>
            题目一
            <div className="record" style={recordStyle} onClick={this.handleRecord}>
              判卷记录
            </div>
          </div>
          <div className="titleOne" style={itemStyle}>
            题目二
            <div className="record" style={recordStyle} onClick={this.handleRecord}>
              判卷记录
            </div>
          </div>
          <div className="titleOne" style={itemStyle}>
            题目三
            <div className="record" style={recordStyle} onClick={this.handleRecord}>
              判卷记录
            </div>
          </div>
        </div>
        <div className="info" style={infoStyle}>
          <div className="button" onClick={this.handleCorrect}>
            <Button type="default" style={priStyle}>开始批改</Button>
          </div>
          <div className="infoDetail" style={detailStyle}>
            <div className="name" style={textStyle}>考生姓名</div>
            <div className="grade" style={textStyle}>得分</div>
            <div className="rank" style={textStyle}>等级</div>
            <div className="result" style={textStyle}>最终结果</div>
          </div>
          <div className="button" style={buttonStyle}>
            <Button type="default" style={priStyle}>上一个</Button>
            <Button type="default" style={priStyle}>下一个</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckExam
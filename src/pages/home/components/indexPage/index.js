import React, { Component } from 'react';
import { Button } from 'antd';
import {
  header,
  buttonStyle,
  middle,
  contentHeader,
  textStyle
} from './style';
import store from '../../../../reducer/index';
import emitter from '../../../../util/events';

class IndexPage extends Component {

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
      type:'add_title',
      page:7,
    }
    store.dispatch(action); 
    emitter.emit('getPage');
  }

  handleDetail = () => {
    const action = {
      type:'add_title',
      page:6,
    }
    store.dispatch(action); 
    emitter.emit('getPage');
  }

  render() {
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
          <div className="content-header" style={contentHeader}>
            <div style={textStyle}>名称</div>
            <div style={textStyle}>创建人</div>
            <div style={textStyle}>开始时间</div>
            <div style={textStyle}>结束时间</div>
            <div style={textStyle}>考试时长</div>
            <div style={textStyle}>创建时间</div>
          </div>
          <div className="content-body" style={contentHeader} onClick={this.handleDetail}>
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

export default IndexPage;
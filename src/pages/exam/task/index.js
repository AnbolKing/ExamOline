import React, { Component } from 'react';
import {
  Button
} from 'antd';
import {
  headerStyle,
  button1Style,
  button4Style,
  buttonStyle,
  contentHeader,
  bodyHeader,
  textStyle,
  textStyleTodo
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
          <div className="content-header" style={contentHeader}>
            <div style={textStyle}>姓名</div>
            <div style={textStyle}>考试分数</div>
            <div style={textStyle}>考试结果</div>
            <div style={textStyle}>切屏次数</div>
            <div style={textStyle}>批改状态</div>
            <div style={textStyle}>查看考生试卷</div>
            <div style={textStyle}>批改试卷</div>
          </div>
          <div className="content">
            <div className="content-body" style={bodyHeader}>
              <div style={textStyle}>物联网渣渣</div>
              <div style={textStyle}>80</div>
              <div style={textStyle}>通过</div>
              <div style={textStyle}>100</div>
              <div style={textStyle}>已批改</div>
              <div style={textStyleTodo} onClick={this.handleCheck}>小眼睛</div>
              <div style={textStyleTodo} onClick={this.handleCheck}>小钢笔</div>
            </div>
            <div className="content-body" style={bodyHeader}>
              <div style={textStyle}>计算机大佬</div>
              <div style={textStyle}>80</div>
              <div style={textStyle}>通过</div>
              <div style={textStyle}>100</div>
              <div style={textStyle}>已批改</div>
              <div style={textStyleTodo} onClick={this.handleCheck}>小眼睛</div>
              <div style={textStyleTodo} onClick={this.handleCheck}>小钢笔</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LookTask
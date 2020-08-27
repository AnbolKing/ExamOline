import React, { Component } from 'react';
import {
  headerStyle,
  returnStyle,
  infoStyle,
  buttonStyle,
  rowoneStyle,
  rowtwoStyle,
  buttonBoxStyle
} from './style';
import { 
  Button 
} from 'antd';
import TitleAnaly from './components/title/index';
import ResultAnaly from './components/result/index';
import store from '../../reducer/index';
import emitter from '../../util/events';

class ShowGrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index:1
    }
  }

  handleShowAnaly = () => {
    if(this.state.index === 2) {
      return <TitleAnaly />
    }
    else {
      return <ResultAnaly />
    }
  }

  handleResult = () => {
    this.setState({
      index:1,
    })
  }

  handleTitle = () => {
    this.setState({
      index:2,
    })
  }

  handleReturn = () => {
    const action = {
      type:'return_page',
      page:4
    }
    store.dispatch(action);
    emitter.emit('getPage');
  }
  
  render() {
    return (
      <div className="indexBox">
        <div className="header" style={headerStyle}>
          <div className="return" style={returnStyle} onClick={this.handleReturn}>
            <Button type="default" style={buttonStyle}>返回</Button>
          </div>
          <div className="info" style={infoStyle}>
            <div className="rowOne" style={rowoneStyle}>
              <div className="exam">研发组</div>
              <div className="join">
                参与人数：
                <span className="num">20</span>
              </div>
              <div className="attend-exam">
                应考率：
                <span className="num">50%</span>
              </div>
              <div className="time">2020/8/22</div>
            </div>
            <div className="rowTwo" style={rowtwoStyle}>
              <div className="attend">
                应到人数：
                <span className="num">40</span>
              </div>
              <div className="aver-grade">
                平均分：
                <span className="num">60</span>
              </div>
            </div>
          </div>
          <div className="buttonBox" style={buttonBoxStyle}>
            <Button type="default" style={buttonStyle} onClick={this.handleResult}>成绩分析</Button>
            <Button type="default" style={buttonStyle} onClick={this.handleTitle}>题目分析</Button>
          </div>
        </div>
        <div className="content">
          {
            this.handleShowAnaly()
          }
        </div>
      </div>
    )
  }
}

export default ShowGrade
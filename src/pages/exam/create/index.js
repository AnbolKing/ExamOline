import React, { Component } from 'react';
import {
  headerStyle,
  typeStyle,
  textStyle,
  inputStyle,
  numberStyle,
  contentStyle,
  buttonStyle,
  buttonBoxStyle
} from './style';
import {
  InputNumber,
  Button
} from 'antd';
import store from '../../../reducer/index';
import emitter from '../../../util/events';

class CreateExam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleList:{
        choose:0,
        judge:0,
        picture:0,
        question:0,
        blank:0
      }
    }
  }
  

  handleChoose = (event) => {
    const obj = Object.assign({}, this.state.titleList, { choose: event }); 
    this.setState({
      titleList:obj
    })
  }
  handleBlank = (event) => {
    const obj = Object.assign({}, this.state.titleList, { blank: event }); 
    this.setState({
      titleList:obj
    })
  }
  handleQuestion = (event) => {
    const obj = Object.assign({}, this.state.titleList, { question: event }); 
    this.setState({
      titleList:obj
    })
  }
  handlePic = (event) => {
    const obj = Object.assign({}, this.state.titleList, { picture: event }); 
    this.setState({
      titleList:obj
    })
  }
  handleJudge = (event) => {
    const obj = Object.assign({}, this.state.titleList, { judge: event }); 
    this.setState({
      titleList:obj
    })
  }

  handleShowExam = () => {
    const action = {
      type:'look_exam',
      page:12,
    }
    store.dispatch(action); 
    emitter.emit('getPage');
  }
  //=================================//
  render() {
    return (
      <div className="indexBox">
        <div className="header-text" style={headerStyle}>
          从题库中选择题目
        </div>
        <div className="content" style={contentStyle}>
          <div className="type" style={typeStyle}>
            <div className="text" style={textStyle}>
              选择题
            </div>
            <div className="input" style={inputStyle}>
              <div>
                请输入题目数量：
              </div>
              <InputNumber size="large" min={0} max={100000} defaultValue={0} style={numberStyle} onChange={this.handleChoose}/>
            </div>
          </div>
          <div className="type" style={typeStyle}>
            <div className="text" style={textStyle}>
              填空题
            </div>
            <div className="input" style={inputStyle}>
              <div>
                请输入题目数量：
              </div>
              <InputNumber size="large" min={0} max={100000} defaultValue={0} style={numberStyle} onChange={this.handleBlank}/>
            </div>
          </div>
          <div className="type" style={typeStyle}>
            <div className="text" style={textStyle}>
              问答题
            </div>
            <div className="input" style={inputStyle}>
              <div>
                请输入题目数量：
              </div>
              <InputNumber size="large" min={0} max={100000} defaultValue={0} style={numberStyle} onChange={this.handleQuestion}/>
            </div>
          </div>
          <div className="type" style={typeStyle}>
            <div className="text" style={textStyle}>
              作图题
            </div>
            <div className="input" style={inputStyle}>
              <div>
                请输入题目数量：
              </div>
              <InputNumber size="large" min={0} max={100000} defaultValue={0} style={numberStyle} onChange={this.handlePic}/>
            </div>
          </div>
          <div className="type" style={typeStyle}>
            <div className="text" style={textStyle}>
              判断题
            </div>
            <div className="input" style={inputStyle}>
              <div>
                请输入题目数量：
              </div>
              <InputNumber size="large" min={0} max={100000} defaultValue={0} style={numberStyle} onChange={this.handleJudge}/>
            </div>
          </div>
        </div>
        <div className="button" style={buttonBoxStyle} onClick={this.handleShowExam}>
          <Button style={buttonStyle}>生成试卷</Button>
        </div>
      </div>
    )
  }
}

export default CreateExam
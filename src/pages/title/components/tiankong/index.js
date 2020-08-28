import React, { Component } from 'react';
import {
  Input,
  Button,
  Modal
} from 'antd';
import {
  textStyle,
  answerStyle,
  sbmitStyle,
  buttonStyle,
  addansStyle,
  ansbuttonStyle,
  itemStyle
} from './style';
import {
  CheckCircleTwoTone 
} from '@ant-design/icons';
import store from '../../../../reducer';
import emitter from '../../../../util/events';
const { TextArea } = Input;

class Tiankong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ansNum:[1],
      textValue:'',
      ansValue:{ },
    }
  }

  handleChangeText = ({ target: { value } }) => {
    this.setState({
      textValue:value
    });
  };

  handleAddAns = () => {
    const last = this.state.ansNum[this.state.ansNum.length-1];
    const newNum = last + 1;
    this.setState({
      ansNum:[...this.state.ansNum,newNum]
    })
  }
  
  handleChangeAns = ({ target: { value,placeholder } }) => {
    console.log(value,placeholder);
    const index = placeholder.match(/\d/);
    const id = index[0];
    const obj = Object.assign({}, this.state.ansValue);
    obj[id] = value;
    this.setState({
      ansValue:obj,
    })
  }

  handleReturn = () => {
    const action = {
      type:'return_page',
      page:2
    }
    store.dispatch(action);
    emitter.emit('getPage');
  }

  handleContinue = () => {
    // console.log(store.getState().classId); 组别
    // console.log(this.state.textValue);  题目信息
    // console.log(this.state.ansValue);   正确答案
    Modal.confirm({
      cancelText:'返回',
      okText:'继续录入',
      maskClosable:'false',
      icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
      closable:'false',
      content:'试题录入成功！',
      centered:'true',
      onCancel:this.handleReturn
    })
  }

  render() {
    return (
      <div className="indexBox">
        <div className="textArea" style={textStyle}>
          <TextArea
            onChange={this.handleChangeText}
            placeholder="请输入题目题干"
            autoSize={{ minRows: 3, maxRows: 6 }}
            value={this.state.textValue}
          />
        </div>
        <div className="answer" style={answerStyle}>
          {
            this.state.ansNum.map((item => {
              return (
                <TextArea placeholder={'答案'+item} autoSize key={item} style={itemStyle} onBlur={this.handleChangeAns}/>
              )
            }))
          }
        </div>
        <div className="addAns" style={addansStyle}>
          <Button type="primary" style={ansbuttonStyle} onClick={this.handleAddAns}>添加答案</Button>
        </div>
        <div className="button" style={sbmitStyle} onClick={this.handleContinue}>
          <Button type="primary" style={buttonStyle}>录 入</Button>
        </div>
      </div>
    )
  }
}

export default Tiankong
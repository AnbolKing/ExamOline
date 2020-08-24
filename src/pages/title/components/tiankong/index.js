import React, { Component } from 'react';
import {
  Input,
  Button
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

    //TODO 绑定输入框内容
  handleChangeAns = ({ target: { value,key } }) => {
    console.log(value,key);
  };

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
                <TextArea placeholder={'答案'+item} autoSize key={item} style={itemStyle} onChange={this.handleChangeAns}/>
              )
            }))
          }
        </div>
        <div className="addAns" style={addansStyle}>
          <Button type="primary" style={ansbuttonStyle} onClick={this.handleAddAns}>添加答案</Button>
        </div>
        <div className="button" style={sbmitStyle}>
          <Button type="primary" style={buttonStyle}>录 入</Button>
        </div>
      </div>
    )
  }
}

export default Tiankong
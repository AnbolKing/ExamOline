import React, { Component } from 'react';
import {
  Input,
  Button
} from 'antd';
import {
  textStyle,
  sbmitStyle,
  buttonStyle
} from './style';
const { TextArea } = Input;

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue:'',
      ansValue:'',
    }
  }

  handleChangeText = ({ target: { value } }) => {
    this.setState({
      textValue:value
    });
  };

  handleChangeAns = ({ target: { value } }) => {
    this.setState({
      ansValue:value
    });
  };
  
  render() {
    return (
      <div className="indexBox">
        <div className="textArea" style={textStyle}>
          <TextArea
            onChange={this.handleChangeText}
            placeholder="请输入题目题干"
            autoSize={{ minRows: 4, maxRows: 8 }}
            value={this.state.textValue}
          />
        </div>
        <div className="ansArea" style={textStyle}>
          <TextArea
            onChange={this.handleChangeAns}
            placeholder="输入答案（答案为空则录为主观题）"
            autoSize={{ minRows: 10, maxRows: 15 }}
            value={this.state.ansValue}
          />
        </div>
        <div className="button" style={sbmitStyle}>
          <Button type="primary" style={buttonStyle}>录 入</Button>
        </div>
      </div>
    )
  }
}

export default Question;
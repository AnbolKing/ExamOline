import React, { Component } from 'react';
import { 
  Input,
  Button,
  Checkbox,
} from 'antd';
import {
  textStyle,
  sbmitStyle,
  buttonStyle,
  boxStyle,
  groupStyle,
  checkStyle
} from './style'
const { TextArea } = Input;

class Judge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue:'',
      choseList:[],
    }
  }

  handleChangeText = ({ target: { value } }) => {
    this.setState({
      textValue:value
    });
  };

  handleGroup = (event) => {
    console.log(event);
    this.setState({
      choseList:event
    })
  }
  
  render() {
    return (
      <div className="indexBox">
        <div className="textArea" style={textStyle}>
          <TextArea
            onChange={this.handleChangeText}
            placeholder="请输入题目题干"
            autoSize={{ minRows: 6, maxRows: 8 }}
            value={this.state.textValue}
          />
        </div>
        <div className="checkGroup" style={groupStyle}>
          <Checkbox.Group onChange={this.handleGroup} style={checkStyle}>
            <div style={boxStyle}>
              <Checkbox value="correct">对</Checkbox>
            </div>
            <div style={boxStyle}>
              <Checkbox value="wrong">错</Checkbox>
            </div>
          </Checkbox.Group>
        </div>
        <div className="button" style={sbmitStyle}>
          <Button type="primary" style={buttonStyle}>录 入</Button>
        </div>
      </div>
    )
  }
}

export default Judge;
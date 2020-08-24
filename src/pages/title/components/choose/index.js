import React, { Component } from 'react';
import { 
  Button,
  Input,
  Checkbox,
  Tag,
} from 'antd';
import {
  textStyle,
  tagStyle,
  groupStyle,
  boxStyle,
  sbmitStyle,
  buttonStyle
} from './style';
import './style.css';
const { TextArea } = Input;

class Choose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue:'',
      choseList:[],
      answerList:{
        textA:'',
        textB:'',
        textC:'',
        textD:'',
      },
    }
  }

  handleChangeText = ({ target: { value } }) => {
    this.setState({
      textValue:value
    });
  };

  handleChangeAnsA = ({ target: { value } }) => {
    const obj = Object.assign({}, this.state.answerList, { textA: value });
    this.setState({
      answerList:obj
    });
  };

  handleChangeAnsB = ({ target: { value } }) => {
    const obj = Object.assign({}, this.state.answerList, { textB: value });
    this.setState({
      answerList:obj
    });
  };

  handleChangeAnsC = ({ target: { value } }) => {
    const obj = Object.assign({}, this.state.answerList, { textC: value });
    this.setState({
      answerList:obj
    });
  };

  handleChangeAnsD = ({ target: { value } }) => {
    const obj = Object.assign({}, this.state.answerList, { textD: value });
    this.setState({
      answerList:obj
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
            value={this.state.textValue}
            onChange={this.handleChangeText}
            placeholder="请输入题目题干"
            autoSize={{ minRows: 3, maxRows: 6 }}
          />
        </div>
        <div className="chooseTitle">
          <div className="tag">
            <Tag color="processing" style={tagStyle}>请选择正确答案的选项</Tag>
          </div>
          <div className="checkGroup" style={groupStyle}>
            <Checkbox.Group onChange={this.handleGroup}>
              <div style={boxStyle}>
                <Checkbox value="A">A</Checkbox>
                <TextArea placeholder="请输入A选项内容" autoSize value={(this.state.answerList).textA} onChange={this.handleChangeAnsA}/>
              </div>
              <div style={boxStyle}>
                <Checkbox value="B">B</Checkbox>
                <TextArea placeholder="请输入B选项内容" autoSize value={(this.state.answerList).textB} onChange={this.handleChangeAnsB}/>
              </div>
              <div style={boxStyle}>
                <Checkbox value="C">C</Checkbox>
                <TextArea placeholder="请输入C选项内容" autoSize value={(this.state.answerList).textC} onChange={this.handleChangeAnsC}/>
              </div>
              <div style={boxStyle}>
                <Checkbox value="D">D</Checkbox>
                <TextArea placeholder="请输入D选项内容" autoSize value={(this.state.answerList).textD} onChange={this.handleChangeAnsD}/>
              </div>
            </Checkbox.Group>
          </div>
        </div>
        <div className="button" style={sbmitStyle}>
          <Button type="primary" style={buttonStyle}>录 入</Button>
        </div>
      </div>
    )
  }
}

export default Choose;
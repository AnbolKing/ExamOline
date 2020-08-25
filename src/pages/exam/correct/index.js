import React, { Component } from 'react';
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
  gradeStyle,
  timeStyle,
  descStyle
} from './style';
import {
  Button,
  Modal,
  Table,
  InputNumber,
  Checkbox
} from 'antd';
import './style.css';

class CorrectExam extends Component {
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
      ],
      chooseList:[],
    }
  }

  handleGroup = (event) => {
    this.setState({
      chooseList:event
    })
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
            <div className="time" style={timeStyle}>
              <div className="person-time">
                <span style={descStyle}>本题所用时长</span>
                <span>7 min</span>
              </div>
              <div className="aver-time">
                <span style={descStyle}>本题所用时长</span>
                <span>4.8 min</span>
              </div>
            </div>
            <div className="record" style={recordStyle} onClick={this.handleRecord}>
              <Button type="default">判卷记录</Button>
            </div>
            <div className="grade" style={gradeStyle}>
              <InputNumber min={0} max={100} defaultValue={"分数"}/>
            </div>
          </div>
          <div className="titleOne" style={itemStyle}>
            题目二
            <div className="record" style={recordStyle} onClick={this.handleRecord}>
              <Button type="default">判卷记录</Button>
            </div>
            <div className="grade" style={gradeStyle}>
              <InputNumber min={0} max={100} defaultValue={"分数"}/>
            </div>
          </div>
          <div className="titleOne" style={itemStyle}>
            题目三
            <div className="record" style={recordStyle} onClick={this.handleRecord}>
              <Button type="default">判卷记录</Button>
            </div>
            <div className="grade" style={gradeStyle}>
              <InputNumber min={0} max={100} defaultValue={"分数"}/>
            </div>
          </div>
        </div>
        <div className="info" style={infoStyle}>
          <div className="infoDetail" style={detailStyle}>
            <div className="name" style={textStyle}>王子安</div>
            <div className="grade" style={textStyle}>得分</div>
            <div className="rank" style={textStyle}>当前进度</div>
            <div className="result" style={textStyle}>
              最终结果
              <Checkbox.Group onChange={this.handleGroup}>
                <Checkbox value="A">通过</Checkbox>
                <Checkbox value="B">未通过</Checkbox>
                <Checkbox value="C">保留意见</Checkbox>
              </Checkbox.Group>
              <Button type="default" style={buttonStyle}>确定</Button>
            </div>
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

export default CorrectExam
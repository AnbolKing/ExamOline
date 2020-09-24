import React, { Component } from 'react';
import {
  Button,
  Modal,
  Drawer,
  Checkbox,
  Input,
  Table
} from 'antd';
import {
  headerStyle,
  button1Style,
  button2Style,
  button3Style,
  button4Style,
  buttonStyle,
  paperStyle,
  itemStyle,
  nameStyle
} from './style';
import store from '../../../reducer/index';
import emitter from '../../../util/events';
import './style.css';
const { TextArea } = Input

class ExamDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aveChooseList:[],
      preChooseList:[],
      isVisible:false,
      aveisDisplay:false,
      preisDisplay:false,
      list:['古新宇','王子安','廖宇晨'],
    }
  }
  
  componentDidMount() {
    let id = store.getState().detailId;
    //TODO 发送请求-根据id获取考试具体信息
    if(id === 1) {
      //研发组
      console.log('研发组');
    }
    if(id === 2) {
      //产品组
      console.log('产品组');
    }
    if(id === 3) {
      //设计组
      console.log('设计组');
    }
    if(id === 4) {
      //运营组
      console.log('运营组');
    }
    if(id === 5) {
      //行政组
      console.log('行政组');
    }
  }

  handleReturn = () => {
    const action = {
      type:'return_page',
      page:3,
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

  handleLookTask = () => {
    const action = {
      type:'look_task',
      page:10,
    }
    store.dispatch(action); 
    emitter.emit('getPage');
  }

  handleDistribute = () => {
    this.setState({
      isVisible:true
    })
  }

  handleOK = () => {
    this.setState({
      isVisible:false,
      preisDisplay:true
    })
  }

  handleCancel = () => {
    this.setState({
      isVisible:false,
      aveisDisplay:true
    })
  }

  handleAveGroup = (event) => {
    this.setState({
      aveChooseList:event
    })
  }

  handleClose = () => {
    this.setState({
      aveisDisplay:false,
      preisDisplay:false
    })
  }

  handleSubmitAve = () => {
    this.setState({
      aveisDisplay:false
    })
  }

  handleSubmitPer = () => {
    this.setState({
      preisDisplay:false
    })
    console.log(this.state.preChooseList);
  }

  handleGetPre = ({ target: { value,placeholder } }) => {
    console.log(value,placeholder);
    const index = placeholder.match(/\d/);
    const id = index[0];
    const obj = Object.assign({}, this.state.preChooseList);
    obj[id] = value;
    this.setState({
      preChooseList:obj,
    })
  }
  
  render() {
    const column = [
      {
        title:'姓名',
        dataIndex:'name',
        key:'name',
        render: text => <a onClick={this.handleCheck}>{text}</a>,
      },
      {
        title:'考试分数',
        dataIndex:'grade',
        key:'grade',
      },
      {
        title:'考试结果',
        dataIndex:'result',
        key:'result',
      },
      {
        title:'切屏次数',
        dataIndex:'screen',
        key:'screen',
      },
      {
        title:'批改状态',
        dataIndex:'current',
        key:'current',
      },
      {
        title:'查看考生试卷',
        dataIndex:'look',
        key:'look',
      },
      {
        title:'批改试卷',
        dataIndex:'judge',
        key:'judge',
      }
    ];

    const data = [
      {
        key:'1',
        name:'王子安',
        grade:'90',
        result:'通过',
        screen:'1',
        current:'已批改',
        look:'小眼睛',
        judge:'小钢笔'
      },
      {
        key:'1',
        name:'聂一可',
        grade:'90',
        result:'通过',
        screen:'1',
        current:'已批改',
        look:'小眼睛',
        judge:'小钢笔'
      },
      {
        key:'1',
        name:'苟冰玥',
        grade:'90',
        result:'通过',
        screen:'1',
        current:'未批改',
        look:'小眼睛',
        judge:'小钢笔'
      }
    ];
    return (
      <div className="indexBox">
        <div className="mymodal">
          <Modal
            visible={this.state.isVisible}
            maskClosabl={false}
            okText="按人分配"
            cancelText="平均分配"
            onOk={this.handleOK}
            onCancel={this.handleCancel}
            closable={false}
            title="请选择分配方式"
            getContainer={()=>document.getElementsByClassName('mymodal')[0]}
          />
        </div>
        <div className="mydrawer-ave">
        <Drawer 
           title="平均分配试卷"
           width={300}
           visible={this.state.aveisDisplay}
           getContainer={()=>document.getElementsByClassName('mydrawer-ave')[0]}
           onClose={this.handleClose}
           footer={
             <div className="button-box" onClick={this.handleSubmitAve}>
               <Button type="primary">完成录入</Button>
             </div>
           }
        >
          <Checkbox.Group onChange={this.handleAveGroup}>
            <Checkbox value="A">古新宇</Checkbox>
            <Checkbox value="B">刘镇</Checkbox>
            <Checkbox value="C">万江北</Checkbox>
            <Checkbox value="D">王子安</Checkbox>
            <Checkbox value="E">廖宇晨</Checkbox>
            <Checkbox value="F">丘新宇</Checkbox>
          </Checkbox.Group>
        </Drawer>
        </div>

        <div className="mydrawer-pre">
        <Drawer 
           title="按人分配试卷"
           width={300}
           visible={this.state.preisDisplay}
           getContainer={()=>document.getElementsByClassName('mydrawer-pre')[0]}
           onClose={this.handleClose}
           footer={
             <div className="button-box" onClick={this.handleSubmitPer}>
               <Button type="primary">完成录入</Button>
             </div>
           }
        >
          <div className="wait-check" style={paperStyle}>
            <span>待批改： </span>
            <span>14</span>
          </div>
          <div className="done-check" style={paperStyle}>
            <span>未分配： </span>
            <span>9</span>
          </div>
          <div className="people">
            {
              this.state.list.map((item,index) => {
                return (
                  <div className="item" style={itemStyle} key={index}>
                    <span className='name' style={nameStyle}>{item}</span>
                      <TextArea placeholder={'空'+(index+1)} autoSize onBlur={this.handleGetPre}/>
                  </div>
                )
              })
            }
          </div>
        </Drawer>
        </div>
        <div className="exam-header" style={headerStyle}>
          <div className="return" style={button1Style} onClick={this.handleReturn}>
            <Button style={buttonStyle}>返回</Button>
          </div>
          <div style={button2Style} className="task" onClick={this.handleLookTask}>
            <Button style={buttonStyle}>查看我的任务</Button>
          </div>
          <div style={button3Style} className="people" onClick={this.handleDistribute}>
            <Button style={buttonStyle}>分配阅卷人</Button>
          </div>
          <div style={button4Style} className="check" onClick={this.handleCorrect}>
            <Button style={buttonStyle}>统一开始批改</Button>
          </div>
        </div>
        <div className="exam-content">
          <div className="content">
            <Table 
              columns={column} 
              dataSource={data}
              pagination={false}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ExamDetail
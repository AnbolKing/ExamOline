import React, { Component } from 'react';
import store from '../../../reducer/index';
import emitter from '../../../util/events'
import './style.css';
import {
  Button,
  Modal,
  Table,
  Layout,
  Card
} from 'antd';
const { Content, Sider} = Layout;

class CheckExam extends Component {
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
      ]
    }
  }
  
  handleCorrect = () => {
    const action = {
      type:'correct_exam',
      page:9,
    }
    store.dispatch(action); 
    emitter.emit('getPage');
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
        <Table 
          dataSource={this.state.dataSource} 
          columns={columns} 
          pagination={false}
        />
      ),
      maskClosable:'true',
      icon:null
    });
  }

  render() {
    return (
      <div className="index-box">
        <Layout>
          <Content className="content">
            <Card
              actions={[
                <div className="action-log" onClick={this.handleRecord}>
                  判卷记录
                </div>
              ]}
            >
              <div className="title-content">
                请你阐述以下你为什么要加入家园工作室？希望收获什么，希望得到什么？希望你的学长学姐是什么样的人？希望做什么样的事情
              </div>
            </Card>
            <Card
              actions={[
                <div className="action-log" onClick={this.handleRecord}>
                  判卷记录
                </div>
              ]}
            >
              <div className="title-content">
                请你阐述以下你为什么要加入家园工作室？希望收获什么，希望得到什么？希望你的学长学姐是什么样的人？希望做什么样的事情
              </div>
            </Card>
            <Card
              actions={[
                <div className="action-log" onClick={this.handleRecord}>
                  判卷记录
                </div>
              ]}
            >
              <div className="title-content">
                请你阐述以下你为什么要加入家园工作室？希望收获什么，希望得到什么？希望你的学长学姐是什么样的人？希望做什么样的事情
              </div>
            </Card>
          </Content>
          <Sider className="slider">
            <div className="slider-content">
              <div className="button-one">
                <Button className="judge">批改试卷</Button>
              </div>
              <div className="person-info">
                <div className="name info-item">考生姓名</div>
                <div className="grade info-item">得分</div>
                <div className="rank info-item">等级</div>
                <div className="result info-item">最终结果</div>
              </div>
              <div className="button-box">
                <Button className="button-item">上一个</Button>
                <Button className="button-item">下一个</Button>
              </div>
            </div>
          </Sider>
        </Layout>
      </div>
    )
  }
}

export default CheckExam
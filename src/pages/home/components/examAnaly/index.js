import React, { Component } from 'react';
import {
  buttonBox,
  buttonStyle,
  inputStyle,
} from './style';
import { Button, Dropdown, Menu, Input, Table} from 'antd';
import { DownOutlined, ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';
import store from '../../../../reducer/index';
import emitter from '../../../../util/events';

class ExamAnaly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classifiction:['选择分类','研发组','产品组','设计组','运营组','行政组'],
      classKey:0,
      searchStyle:{
        flex:'1',
        textAlign:'center'
      }
    }
  }

  handleChangeTitle = (event) => {
    this.setState({
      classKey:parseInt(event.key),
    })
  }

  handleGrade = () => {
    const action = {
      type:'show_grade',
      page:11
    }
    store.dispatch(action);
    emitter.emit('getPage');
  }

  handleSearch = ({target:{ value }}) => {
    let doms = document.getElementsByClassName('class-type');
    if(value === '') {
      for(let i=0;i<doms.length;i++) {
        doms[i].style.color = '';
        doms[i].style.fontSize = '';
        doms[i].style.fontWeight = '';
      }
      return ;
    }
    // console.log(doms);
    for(let i=0;i<doms.length;i++) {
      if(doms[i].innerText.indexOf(value) !== -1) {
        doms[i].style.color = '#65d1fc';
        doms[i].style.fontSize = '20px';
        doms[i].style.fontWeight = '600';
        return ;
      }
    }
    for(let i=0;i<doms.length;i++) {
      doms[i].style.color = '';
      doms[i].style.fontSize = '';
      doms[i].style.fontWeight = '';
    }
    return ;
  }

  render() {
    const column = [
      {
        title:'名称',
        dataIndex:'name',
        key:'name',
        render: text => <a onClick={this.handleGrade}>{text}</a>,
      },
      {
        title:'创建人',
        dataIndex:'create',
        key:'create',
      },
      {
        title:'开始时间',
        dataIndex:'start',
        key:'start',
      },
      {
        title:'结束时间',
        dataIndex:'end',
        key:'end',
      },
      {
        title:'考试时长',
        dataIndex:'time',
        key:'time',
      },
      {
        title:'创建时间',
        dataIndex:'createTime',
        key:'createTime',
      }
    ];

    const data = [
      {
        key:'1',
        name:'研发组',
        create:'王子安',
        start:'2020/8/22 18：00',
        end:'2020/8/22 22：00',
        time:'2 小时',
        createTime:'2020/8/22 15：00'
      },
      {
        key:'2',
        name:'设计组',
        create:'买雨萱',
        start:'2020/8/22 18：00',
        end:'2020/8/22 22：00',
        time:'2.5 小时',
        createTime:'2020/8/22 15：00'
      },
      {
        key:'3',
        name:'产品组',
        create:'苟冰玥',
        start:'2020/8/22 18：00',
        end:'2020/8/22 22：00',
        time:'3 小时',
        createTime:'2020/8/22 15：00'
      }
    ];

    return (
      <div className="indexBox">
        <div className="buttonBox" style={buttonBox}>
          <Dropdown overlay={
            <Menu onClick={this.handleChangeTitle}>
              <Menu.Item key="1" icon={<ArrowRightOutlined />}>
                研发组
              </Menu.Item>
              <Menu.Item key="2" icon={<ArrowRightOutlined />}>
                产品组
              </Menu.Item>
              <Menu.Item key="3" icon={<ArrowRightOutlined />}>
                设计组
              </Menu.Item>
              <Menu.Item key="4" icon={<ArrowRightOutlined />}>
                运营组
              </Menu.Item>
              <Menu.Item key="5" icon={<ArrowRightOutlined />}>
                行政组
              </Menu.Item>
            </Menu>
          }>
            <Button style={buttonStyle}>
              {(this.state.classifiction)[this.state.classKey]} <DownOutlined />
            </Button>
          </Dropdown>
          <Input
            placeholder="请输入类型"
            suffix={<SearchOutlined />}
            style={inputStyle}
            onChange={this.handleSearch}
          />
        </div>
        <div className="content">
          <Table 
            columns={column} 
            dataSource={data}
            pagination={false}
          />
          {/* <div className="content-header" style={contentHeader}>
            <div style={textStyle}>名称</div>
            <div style={textStyle}>创建人</div>
            <div style={textStyle}>开始时间</div>
            <div style={textStyle}>结束时间</div>
            <div style={textStyle}>考试时长</div>
            <div style={textStyle}>创建时间</div>
          </div>
          <div className="content-body">
            <div className="content-body" style={bodyHeader} onClick={this.handleGrade}>
              <div className="class-type" style={textStyle}>研发组</div>
              <div style={textStyle}>古新宇</div>
              <div style={textStyle}>2020/8/22 18：00</div>
              <div style={textStyle}>2020/8/22 20：00</div>
              <div style={textStyle}>两小时</div>
              <div style={textStyle}>2020/8/22 15；00</div>
            </div>
            <div className="content-body" style={bodyHeader} onClick={this.handleGrade}>
              <div className="class-type" style={this.state.searchStyle}>产品组</div>
              <div style={textStyle}>古新宇</div>
              <div style={textStyle}>2020/8/22 18：00</div>
              <div style={textStyle}>2020/8/22 20：00</div>
              <div style={textStyle}>两小时</div>
              <div style={textStyle}>2020/8/22 15；00</div>
            </div>
            <div className="content-body" style={bodyHeader} onClick={this.handleGrade}>
              <div className="class-type" style={this.state.searchStyle}>运营组</div>
              <div style={textStyle}>古新宇</div>
              <div style={textStyle}>2020/8/22 18：00</div>
              <div style={textStyle}>2020/8/22 20：00</div>
              <div style={textStyle}>两小时</div>
              <div style={textStyle}>2020/8/22 15；00</div>
            </div>
            <div className="content-body" style={bodyHeader} onClick={this.handleGrade}>
              <div className="class-type" style={this.state.searchStyle}>设计组</div>
              <div style={textStyle}>古新宇</div>
              <div style={textStyle}>2020/8/22 18：00</div>
              <div style={textStyle}>2020/8/22 20：00</div>
              <div style={textStyle}>两小时</div>
              <div style={textStyle}>2020/8/22 15；00</div>
            </div>
            <div className="content-body" style={bodyHeader} onClick={this.handleGrade}>
              <div className="class-type" style={this.state.searchStyle}>行政组</div>
              <div style={textStyle}>古新宇</div>
              <div style={textStyle}>2020/8/22 18：00</div>
              <div style={textStyle}>2020/8/22 20：00</div>
              <div style={textStyle}>两小时</div>
              <div style={textStyle}>2020/8/22 15；00</div>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default ExamAnaly;
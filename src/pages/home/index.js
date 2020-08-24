import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { 
  SnippetsOutlined,
  BookOutlined,
  EditOutlined,
  LineChartOutlined
} from '@ant-design/icons';
import './style.css';
import Indexpage from './components/indexPage/index';
import ExamManage from './components/examManage/index';
import TitleManage from './components/titleManage/index';
import ExamAnaly from './components/examAnaly/index';
import Title from '../title/index';
import ExamDetail from '../exam/detail/index';
import CreateExam from '../exam/create/index';
import store from '../../reducer/index';
import emitter from '../../util/events';
const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page:7,
    }
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleShowPage = this.handleShowPage.bind(this);
  }

  componentDidMount() {
    this.eventEmitter = emitter.addListener('getPage', () => {
      this.setState({
        page:store.getState().page
      });
    }); 
  }

  componentWillUnmount() {
    emitter.removeListener(this.eventEmitter);
  }

  handleChangePage(event) {
    const action = {
      type:'add_title',
      page:parseInt(event.key),
    }
    store.dispatch(action); 
    this.setState({
      page:store.getState().page,
    })
  }

  handleShowPage() {
    const index = this.state.page;
    // TODO 编写相关组件
    if(index === 1) {
      return (
        <Indexpage/>
      )
    }
    if(index === 2) {
      return (
        <TitleManage/>
      )
    }
    if(index === 3) {
      return (
        <ExamManage/>
      )
    }
    if(index === 4) {
      return (
        <ExamAnaly/>
      )
    }
    if(index === 5) {
      return (
        <Title/>
      )
    }
    if(index === 6) {
      return (
        <ExamDetail/>
      )
    }
    if(index === 7) {
      return (
        <CreateExam />
      )
    }
  }

  render() {
    return (
      <div className="HomeBox">
        <Layout>
          <Sider
            breakpoint="xl"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <Menu theme="light" mode="inline" defaultSelectedKeys={['2']} onClick={this.handleChangePage}>
              <Menu.Item key="1" icon={<SnippetsOutlined />}>
                首页
              </Menu.Item>
              <Menu.Item key="2" icon={<BookOutlined />}>
                题库管理
              </Menu.Item>
              <Menu.Item key="3" icon={<EditOutlined />}>
                考试管理
              </Menu.Item>
              <Menu.Item key="4" icon={<LineChartOutlined />}>
                考试分析
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className="site-layout-sub-header-background">hello</Header>
            <Content>
              <div className="site-layout-background">
                {
                  this.handleShowPage()
                }
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Home;
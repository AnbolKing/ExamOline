import React ,{ Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
// import { createHashHistory } from "history";
import Login from '../pages/login/index';
import Home from '../pages/home/index';
// const history = createHashHistory();

class RouterConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' exact component={Login}/>
        <Route path='/home' exact component={Home}/>
      </BrowserRouter>
    )
  }
}

export default RouterConfig;
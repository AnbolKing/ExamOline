import React, { Component } from 'react';
import {
  contentHeader,
  textStyle,
  itemStyle
} from './style';

class TitleAnaly extends Component {
  render() {
    return (
      <div className="indexBox">
        <div className="content-header" style={contentHeader}>
          <div style={textStyle}>题型</div>
          <div style={textStyle}>内容</div>
          <div style={textStyle}>平均用时</div>
          <div style={textStyle}>作答人数</div>
          <div style={textStyle}>弃答人数</div>
          <div style={textStyle}>正确人数</div>
          <div style={textStyle}>正确率</div>
        </div>
        <div className="content-body">
          <div className="content-item" style={itemStyle} onClick={this.handleGrade}>
            <div style={textStyle}>单选</div>
            <div style={textStyle}>衬衫的价格是九磅十五哈哈哈哈哈哈哈</div>
            <div style={textStyle}>30 s</div>
            <div style={textStyle}>15</div>
            <div style={textStyle}>5</div>
            <div style={textStyle}>10</div>
            <div style={textStyle}>50%</div>
          </div>
        </div>
      </div>
    )
  }
}

export default TitleAnaly
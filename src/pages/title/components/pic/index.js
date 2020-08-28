import React, { Component } from 'react';
import {
  textStyle,
  uploadStyle
} from './style';
import {
  Input,
  Upload,
  message
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
// import store from '../../../../reducer';
// import emitter from '../../../../util/events';
const { TextArea } = Input;
const { Dragger } = Upload;

class Pic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue:'',
    }
  }
  

  handleChangeText = ({ target: { value } }) => {
    this.setState({
      textValue:value
    });
  };

  handleUpload = (info) => {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`图片 <${info.file.name}> 上传成功！`);
    } else if (status === 'error') {
      message.error(`图片 <${info.file.name}> 上传失败！`);
    }
  }

  handlePreview = (event) => {
    console.log(event);
  }

  render() {
    return (
      <div className="indexBox">
        <div className="textArea" style={textStyle}>
          <TextArea
            onChange={this.handleChangeText}
            placeholder="请输入题目题干"
            autoSize={{ minRows: 3, maxRows: 6 }}
            value={this.state.textValue}
          />
        </div>
        <div className="upload" style={uploadStyle}>
        <Dragger
          name="picImg"
          multiple='true'
          action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
          onChange={this.handleUpload}
          onPreview={this.handlePreview}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击上传图片或将图片拖拽到此处</p>
          <p className="ant-upload-hint">Click or drag file to this area to upload</p>
        </Dragger>
        </div>
      </div>
    )
  }
}

export default Pic
import React, { Component } from 'react';
import {
  
} from './style';
import { GroupedColumn  } from '@ant-design/charts';

class ResultAnaly extends Component {

  handleShowColumn = () => {
    // const data = [
    //   {
    //     name: '通过率',
    //     参考维度: '是否通过',
    //     百分比: 76,
    //   },
    //   {
    //     name: '参考率',
    //     参考维度: '是否通过',
    //     百分比: 24,
    //   },
    //   {
    //     name: '等级分布',
    //     参考维度: 'A',
    //     百分比: 37,
    //   },
    //   {
    //     name: '等级分布',
    //     参考维度: 'B',
    //     百分比: 26,
    //   },
    //   {
    //     name: '等级分布',
    //     参考维度: 'C',
    //     百分比: 22,
    //   },
    //   {
    //     name: '等级分布',
    //     参考维度: 'D',
    //     百分比: 11,
    //   },
    //   {
    //     name: '等级分布',
    //     参考维度: 'E',
    //     百分比: 4,
    //   }
    // ]
    // const config = {
    //   title: {
    //     visible: true,
    //     text: '成绩分析柱状图',
    //     forceFit: true,
    //     data:data,
    //     xField: '参考维度',
    //     yField: '百分比',
    //     label: { visible: true },
    //     groupField: 'name',
    //     color: ['#1ca9e6', '#f88c24'],
    //   },
    // };
    // return <GroupedColumn {...config} />;
    const data = [
      {
        name: '通过率',
        考量维度: '是否通过',
        百分比: 74.6,
      },
      {
        name: '参考率',
        考量维度: '是否通过',
        百分比: 25.4,
      },
      {
        name: 'A',
        考量维度: '等级分布',
        百分比: 28.8,
      },     
      {
        name: 'B',
        考量维度: '等级分布',
        百分比: 33.2,
      },
      {
        name: 'C',
        考量维度: '等级分布',
        百分比: 21.8,
      },
      {
        name: 'D',
        考量维度: '等级分布',
        百分比: 10.7,
      },
      {
        name: 'E',
        考量维度: '等级分布',
        百分比: 5.5,
      },
    ];
    const config = {
      title: {
        visible: true,
        text: '分组柱状图',
      },
      forceFit: true,
      data,
      xField: '考量维度',
      yField: '百分比',
      yAxis: { min: 0 },
      label: { visible: true },
      groupField: 'name',
      color: ['#1ca9e6', '#f88c24','#ae331b', '#f27957', '#dadada', '#609db7', '#1a6179'],
    };
    return <GroupedColumn {...config} />;
  }
  
  render() {
    return (
      <div>
        {
          this.handleShowColumn()
        }
      </div>
    )
  }
}

export default ResultAnaly
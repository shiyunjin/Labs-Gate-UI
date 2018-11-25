/* eslint react/jsx-curly-brace-presence: 0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Chart, Axis, Geom, Tooltip, Coord, Legend } from 'bizcharts';
import { DataSet } from '@antv/data-set';
import './StackedBarChart.scss';

export default class StackedBarChart extends Component {
  static displayName = 'StackedBarChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      { State: 'fast1', 下载流量: 155641, 上传流量: 18900 },
      { State: 'fast2', 下载流量: 56546, 上传流量: 59856 },
      { State: 'fast3', 下载流量: 2654, 上传流量: 512 },
      { State: 'fast4', 下载流量: 485415, 上传流量: 5153 },
      { State: 'fast5', 下载流量: 16516, 上传流量: 1561 },
      { State: 'fast6', 下载流量: 156, 上传流量: 4156 },
      { State: 'fast7', 下载流量: 5261, 上传流量: 456 },
      { State: 'fast8', 下载流量: 45641, 上传流量: 5616 },
      { State: 'fast9', 下载流量: 4561, 上传流量: 846 },
      { State: 'fast10', 下载流量: 5122, 上传流量: 8416 },
      { State: 'fast11', 下载流量: 4162, 上传流量: 156106 },
      { State: 'fast12', 下载流量: 1516, 上传流量: 5456 },
      { State: 'fast13', 下载流量: 46846, 上传流量: 6120 },
      { State: 'fast14', 下载流量: 1123, 上传流量: 456132 },
      { State: 'fast15', 下载流量: 12312, 上传流量: 564156 },
      { State: 'fast16', 下载流量: 56565, 上传流量: 4845 },
      { State: 'fast17', 下载流量: 69656, 上传流量: 54151 },
      { State: 'fast18', 下载流量: 52125, 上传流量: 456161 },
      { State: 'fast19', 下载流量: 54161, 上传流量: 145615 },
      { State: 'fast20', 下载流量: 5125, 上传流量: 15615 },
      { State: 'fast21', 下载流量: 456151, 上传流量: 231125 },
      { State: 'fast22', 下载流量: 561256, 上传流量: 515155 },
      { State: 'fast23', 下载流量: 561265, 上传流量: 145115 },
      { State: 'fast24', 下载流量: 641655, 上传流量: 516151 },
    ];

    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      fields: ['下载流量', '上传流量'],
      key: '流量',
      value: '端口',
      retains: ['State'],
    });
    return (
      <div className="stacked-bar-chart">
        <IceContainer>
          <Chart height={940} data={dv} forceFit>
            <Legend />
            <Coord transpose />
            <Axis name="State" label={{ offset: 12 }} />
            <Axis name="端口" />
            <Tooltip />
            <Geom
              type="intervalStack"
              position="State*端口"
              color={'流量'}
            />
          </Chart>
        </IceContainer>
      </div>
    );
  }
}

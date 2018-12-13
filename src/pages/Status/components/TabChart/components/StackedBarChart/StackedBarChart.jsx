/* eslint react/jsx-curly-brace-presence: 0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Chart, Axis, Geom, Tooltip, Coord, Legend } from 'bizcharts';
import { DataSet } from '@antv/data-set';
import './StackedBarChart.scss';
import axios from 'axios';

export default class StackedBarChart extends Component {
  static displayName = 'StackedBarChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    const { code } = this.props;
    axios
      .get('/api/v1/device/bandwidth/' + code)
      .then((response) => {
        this.setState({
          dataSource: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const data = this.state.dataSource;

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

import React, { Component } from 'react';
import { Grid, Icon } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import PropTypes from 'prop-types';
import Card from '../Card';

const { Row, Col } = Grid;

export default class ServiceCard extends Component {
  static displayName = 'ServiceCard';

  static propTypes = {};

  static defaultProps = {};

  static propTypes = {
    dataSource: PropTypes.array,
  };

  static defaultProps = {
    dataSource: [],
  };

  constructor(props) {
    super(props);
    this.state = {

    };

  };

  render() {
    const mockData = this.props.dataSource;
    console.info(mockData);

    return (
      <Row wrap gutter="20">
        {mockData.map((item, index) => (
          <Card
            item={item}
            index={index}
          />
        ))}
      </Row>
    );
  }
}


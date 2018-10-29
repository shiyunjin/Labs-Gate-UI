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
    tabKey: 0,
  };

  constructor(props) {
    super(props);
    this.state = {

    };

  };

  render() {
    const { dataSource } = this.props;

    return (
      <Row wrap gutter="20">
        {dataSource.map((item, index) => (
          <Card
            key={index}  
            item={item}
          />
        ))}
      </Row>
    );
  }
}


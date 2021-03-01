import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  Container,
  Row,
  Col,
  H2, H3,
  TopCompany,
  Icon,
  ImageUser,
  ImageCompany,
  InputTextArea,
  Button,
} from '../../../../src/ui/UILib';
import styled, { css } from 'styled-components';

class NotificationsUser extends Component {
  constructor(){
    super();
    this.state = {}
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Row type='divisor'>
          <Col align='flex-start'>
            <H3>New comment</H3>
            <Text>02/01/2020</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</Text>
          </Col>
        </Row>
        <Row type='divisor'>
          <Col align='flex-start'>
            <H3>Customer has visited</H3>
            <Text>02/01/2020</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</Text>
          </Col>
        </Row>
        <Row type='divisor'>
          <Col align='flex-start'>
            <H3>Completed a review</H3>
            <Text>02/01/2020</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</Text>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default (NotificationsUser);
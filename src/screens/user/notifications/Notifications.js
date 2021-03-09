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

export default function NotificationsUser(props) {
  const { navigation } = props;
  return (
    <Container>
      <Row>
        <H3>NOTIFICATIONS</H3>
      </Row>
      <Row type='divisor'>
        <Col align='flex-start'>
          <H3>PAYMENT THERAPY</H3>
          <Text>02/01/2020</Text>
          <Text>You have a new payment link https://business.revolut.com .</Text>
        </Col>
      </Row>
      <Row type='divisor'>
        <Col align='flex-start'>
          <H3>PAYMENT MASSAGE</H3>
          <Text>02/01/2020</Text>
          <Text>You have a new payment link https://business.revolut.com .</Text>
        </Col>
      </Row>
      <Row type='divisor'>
        <Col align='flex-start'>
          <H3>PAYMENT THERAPY</H3>
          <Text>02/01/2020</Text>
          <Text>You have a new payment link https://business.revolut.com .</Text>
        </Col>
      </Row>
    </Container>
  )
};

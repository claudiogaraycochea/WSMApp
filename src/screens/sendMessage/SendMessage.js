import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  Row,
  Col,
  H3,
  TopCompany,
  ImageUser,
  ImageCompany,
  InputTextArea,
  Button,
} from '../../ui/UILib';

export default function SendMessage(props) {
  const { navigation } = props;

  return (
    <Container>
      <Row type='divisor'>
        <Col align='flex-start'>
          <H3>Send to Firstname Lastname</H3>
        </Col>
      </Row>
      <Row>
        <InputTextArea placeholder="Send us a message"/>
      </Row>
      <Row>
        <Button
          onPress={() =>
            navigation.navigate('Login')
          }
        >
          Attach image
        </Button>
      </Row>
      <Row>
        <Text>Whatsapp and Email</Text>
      </Row>
      <Row>
        <Button
          variant='primary'
          onPress={() =>
            navigation.navigate('Login')
          }
        >
          Send Message
        </Button>
      </Row>
    </Container>
  )
};
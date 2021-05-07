import React, { useState, useCallback } from 'react';
import { Linking, TextInput } from 'react-native';
import {
  Container,
  Row,
  Col,
  H2,
  Text,
  TopCompany,
  ImageUser,
  ImageCompany,
  InputTextArea,
  Button,
} from '../../../../src/ui/UILib';

export default function CalendarUser(props) {
  const { navigation, route } = props;
  const [ message, setMessage ] = useState();

  const OpenURLButton = ({ url, children }) => {

    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button variant='primary' onPress={handlePress}>Open Calendar</Button>;
  };

  const message_encoded = encodeURI(message);
  const link_whatsapp = `https://www.google.com/calendar/`;
  
  return (
    <Container>
      <Row type='divisor'>
        <Col>
          <H2>CALENDAR</H2>
        </Col>
      </Row>
      <Row>
        <OpenURLButton url={link_whatsapp}/>
      </Row>
    </Container>
  )
};
import React, { useState, useCallback } from 'react';
import { Linking, TextInput } from 'react-native';
import {
  Container,
  Row,
  Col,
  H3,
  Text,
  TopCompany,
  ImageUser,
  ImageCompany,
  InputTextArea,
  Button,
} from '../../ui/UILib';

export default function SendMessage(props) {
  const { navigation, route } = props;
  const { data_selected } = route.params;
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
  
    return <Button variant='primary' onPress={handlePress}>Send message</Button>;
  };

  const message_encoded = encodeURI(message);
  const link_whatsapp = `https://wa.me/${data_selected.whatsapp}?text=${message_encoded}`;
  
  return (
    <Container>
      <Row type='divisor'>
        <Col align='flex-start'>
          <H3>Send to {data_selected.firstname} {data_selected.lastname}</H3>
        </Col>
      </Row>
      <Row>
        
      </Row>
      <Row>
        <InputTextArea
          type='text'
          value={message}
          placeholder='Message'
          onChangeText={(text)=> setMessage(text)}
        />
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
        <Text>Whatsapp</Text>
      </Row>
      <Row>
        <OpenURLButton url={link_whatsapp}/>
      </Row>
    </Container>
  )
};
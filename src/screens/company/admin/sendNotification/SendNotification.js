import React, { useState } from 'react';
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
  Input,
} from '../../../../../src/ui/UILib';

export default function SendNotificationCompany(props) {
  const { navigation } = props;
  const [player_name, setPlayerName] = useState();

  return (
    <Container>
      <Row>
        <H3>SEND NOTIFICATION</H3>
      </Row>
      <Row type='divisor'>
        <Col width='20' align='flex-start'>
          <ImageUser image="https://media.gettyimages.com/photos/confident-handsome-businessman-wearing-gray-suit-picture-id1179627325?s=2048x2048"/>
        </Col>
        <Col align='flex-start'>
          <H3>Firstname Lastname</H3>
          <Text>02/01/2020</Text>
          <Text style={{ textAlign: 'left' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</Text>
        </Col>
      </Row>
      <Row type='divisor'>
        <Col width='20' align='flex-start'>
          <ImageUser image="" size={48}/>
        </Col>
        <Col align='flex-start'>
          <H3>Firstname Lastname</H3>
          <Text>02/01/2020</Text>
          <Text style={{ textAlign: 'left' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</Text>
        </Col>
      </Row>
      <Row type='divisor'>
        <Col width='20' align='flex-start'>
          <ImageUser image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTceex4gXRd39WGfOan5CVhHRDiOGvU9zHF9Q&usqp=CAU"/>
        </Col>
        <Col align='flex-start'>
          <H3>Firstname Lastname</H3>
          <Text>02/01/2020</Text>
          <Text style={{ textAlign: 'left' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</Text>
        </Col>
      </Row>
      <Row>
        <Input
          label='Send to'
          value={player_name}
          placeholder='Player name'
          onChangeText={(text)=> setSurveyDesc(text)}
          min={3}
        />
      </Row>
      <Row>
        <InputTextArea placeholder="Send message"/>
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

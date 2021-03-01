import React, { Component } from 'react';
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
} from '../../../../src/ui/UILib';

class CommentsCompany extends Component {
  constructor(){
    super();
    this.state = {}
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <TopCompany
          icon={<ImageCompany image=""/>}
          companyName="Company Name"
          linkname="@companyname"
        />
        <Row type='divisor'>
          <Col width='20' align='flex-start'>
            <ImageUser image="https://media.gettyimages.com/photos/confident-handsome-businessman-wearing-gray-suit-picture-id1179627325?s=2048x2048"/>
          </Col>
          <Col align='flex-start'>
            <H3>Firstname Lastname</H3>
            <Text>02/01/2020</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</Text>
          </Col>
        </Row>
        <Row type='divisor'>
          <Col width='20' align='flex-start'>
            <ImageUser image="" size={48}/>
          </Col>
          <Col align='flex-start'>
            <H3>Firstname Lastname</H3>
            <Text>02/01/2020</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</Text>
          </Col>
        </Row>
        <Row type='divisor'>
          <Col width='20' align='flex-start'>
            <ImageUser image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTceex4gXRd39WGfOan5CVhHRDiOGvU9zHF9Q&usqp=CAU"/>
          </Col>
          <Col align='flex-start'>
            <H3>Firstname Lastname</H3>
            <Text>02/01/2020</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</Text>
          </Col>
        </Row>
        <Row>
          <InputTextArea placeholder="Send us a message"/>
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
  }
};

export default (CommentsCompany);
import React, { Component } from 'react';
import { Container, Row, H3, Text, Icon, Input, InputSwitch, Button } from '../../../../../../../src/ui/UILib';
import styled, { css } from 'styled-components';

class ReviewCompany extends Component {
  constructor(){
    super();
    this.state = {}
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Row>
          <Text>How has been your experience with telephone customer attention?</Text>
        </Row>
        <Row>
          <Input
            label='Title'
            onChangeText={() => {}}
            placeholder= 'Title'
          />
        </Row>
        <Row>
          <Input
            label='Option 1'
            onChangeText={() => {}}
            placeholder= 'Option value'
          />
        </Row>
        <Row>
          <Input
            label='Option 2'
            onChangeText={() => {}}
            placeholder= 'Option value'
          />
        </Row>
        <Row>
          <Input
            label='Option 3'
            onChangeText={() => {}}
            placeholder= 'Option value'
          />
        </Row>
        <Row>
          <Button>Add Item</Button>
        </Row>
        <Row>
          <InputSwitch
            label='Active'
            value={3}
          />
        </Row>
        <Row>
          <Button
            variant='primary'
            onPress={() =>
              navigation.navigate('Login')
            }
          >
            Save
          </Button>
        </Row>
      </Container>
    )
  }
};

export default (ReviewCompany);

const ContainerCenter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  height: 100%;
`
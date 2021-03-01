import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Row, H2, TopCompany, Icon, InputSwitch, Button, Text, ImageCompany } from '../../../../../../../src/ui/UILib';
import styled, { css } from 'styled-components';

class EditInviteFriendCompany extends Component {
  constructor(){
    super();
    this.state = {}
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
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

export default (EditInviteFriendCompany);

const ContainerCenter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  height: 100%;
`
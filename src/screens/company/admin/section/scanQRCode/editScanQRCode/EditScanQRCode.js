import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Row, Button, Icon, InputSwitch } from '../../../../../../../src/ui/UILib';
import styled, { css } from 'styled-components';

class ScanQRCodeCompany extends Component {
  constructor(){
    super();
    this.state = {}
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <ContainerCenter>
          <Icon.IconScanQRCode/>
        </ContainerCenter>
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

export default (ScanQRCodeCompany);

const ContainerCenter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  height: 100%;
`;
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Row, H2, TopCompany, Icon, Input, Button, Text, ImageCompany } from '../../../../../src/ui/UILib';
import styled, { css } from 'styled-components';

class InviteFriendCompany extends Component {
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
        <Row>
          <H2>GET 1 VINES NOW!!!</H2>
        </Row>
        <View>
          <Row>
            <Text>Invite to your friend</Text>
          </Row>
          <Row>
            <Input
              onChangeText={() => {}}
              placeholder= 'Friend First Name'
            />
          </Row>
          <Row>
            <Text>Friend email</Text>
          </Row>
          <Row>
            <Input
              onChangeText={() => {}}
              placeholder= 'Friend email'
            />
          </Row>
          <Row>
            <Button
              variant='primary'
              onPress={() =>
                navigation.navigate('Login')
              }
            >
              Invite Now
            </Button>
          </Row>
        </View>
      </Container>
    )
  }
};

export default (InviteFriendCompany);

const ContainerCenter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  height: 100%;
`
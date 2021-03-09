import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Row, Col, Input, Button, H2, H3, ButtonItems, ButtonItem, Icon, ButtonItemCircle } from '../../../../../src/ui/UILib';

class AdminOverviewCompany extends Component {
  constructor(){
    super();
    this.state = {}
  }
  
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Row>
          <H3>ADMIN COMPANY</H3>
        </Row>
        <ButtonItems>
          <ButtonItem
            icon={<Icon.IconSurvey/>}
            onPress={() =>
              navigation.navigate('EditMenuCompany')
            }
            iconAction={<Icon.IconEdit/>}
          >
            Edit menu
          </ButtonItem>
          <ButtonItem
            icon={<Icon.IconSurvey/>}
            onPress={() =>
              navigation.navigate('SendNotificationCompany')
            }
            iconAction={<Icon.IconEdit/>}
          >
            Send notification
          </ButtonItem>
        </ButtonItems>
      </Container>
    )
  }
};

export default (AdminOverviewCompany);

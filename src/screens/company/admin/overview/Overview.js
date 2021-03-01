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
        <Row type='divisor'>
          <Col>
            <Text>Customers</Text>
            <H2>20,000</H2>
          </Col>
          <Col>
            <Text>Comments</Text>
            <H2>430</H2>
          </Col>
          <Col>
            <Text>Visitor</Text>
            <H2>40,000</H2>
          </Col>
        </Row>
        <Row>
          <H3>EDIT PROFILE</H3>
        </Row>
        <ButtonItems>
          <ButtonItem
            icon={<Icon.IconSurvey/>}
            onPress={() =>
              navigation.navigate('EditGeneralCompany')
            }
            iconAction={<Icon.IconEdit/>}
          >
            General
          </ButtonItem>
          {/*<ButtonItem
            icon={<Icon.IconSurvey/>}
            onPress={() =>
              navigation.navigate('EditVideoCompany')
            }
            iconAction={<Icon.IconEdit/>}
          >
            Video
          </ButtonItem>*/}
        </ButtonItems>
        <Row>
          <H3>EDIT ITEMS</H3>
        </Row>
        <View>
          <ButtonItem
            icon={<Icon.IconSurvey/>}
            onPress={() =>
              navigation.navigate('CreateSurveyCompany')
            }
            iconAction={<Icon.IconEdit/>}
          >
            Survey
          </ButtonItem>
          <ButtonItem
            icon={<Icon.IconSurvey/>}
            onPress={() =>
              navigation.navigate('EditScanQRCodeCompany')
            }
            iconAction={<Icon.IconEdit/>}
          >
            Scan QR Code
          </ButtonItem>
          <ButtonItem
            icon={<Icon.IconSurvey/>}
            onPress={() =>
              navigation.navigate('EditReviewCompany')
            }
            iconAction={<Icon.IconEdit/>}
          >
            Review
          </ButtonItem>
          <ButtonItem
            icon={<Icon.IconSurvey/>}
            onPress={() =>
              navigation.navigate('EditInviteFriendCompany')
            }
            iconAction={<Icon.IconEdit/>}
          >
            Invite a friend
          </ButtonItem>
        </View>
      </Container>
    )
  }
};

export default (AdminOverviewCompany);

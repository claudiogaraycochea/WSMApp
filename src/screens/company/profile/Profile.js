import React from 'react';
import { View, Text } from 'react-native';
import { Container, Row, H3, ButtonItem, Icon, ButtonItemCircle, Loading } from '../../../../src/ui/UILib';
import HeroCompany from './hero/Hero';
import { useSelector } from 'react-redux';

export default function ProfileCompany(props) {  
  const { navigation } = props;
  const { company } = useSelector(state => state.companyConstructor);

  if(!company.company_profile.company_name) {
    return (<Container><Loading visible={true}/></Container>)
  }

  return (
    <Container>
      <HeroCompany
        navigation={navigation}
        logo={(company.company_profile.logo) ? `https://${company.company_profile.logo}` : null}
        companyName={company.company_profile.company_name}
        linkname={(company.company_profile.linkname) ? company.company_profile.linkname : null}
      />
      <Row>
        <H3>GET YOUR VINES NOW!!! & ENJOY OF AMAZING DISCOUNTS!!!</H3>
      </Row>
      <View>
        <ButtonItem
          icon={<Icon.IconSurvey/>}
          onPress={() =>
            navigation.navigate('SurveyCompany')
          }
          iconAction={<ButtonItemCircle/>}
        >
          Survey
        </ButtonItem>
        <ButtonItem
          icon={<Icon.IconSurvey />}
          onPress={() =>
            navigation.navigate('ScanQRCodeCompany')
          }
          iconAction={<ButtonItemCircle/>}
        >
          Scan QR Code
        </ButtonItem>
        <ButtonItem
          icon={<Icon.IconSurvey/>}
          onPress={() =>
            navigation.navigate('ReviewCompany')
          }
          iconAction={<ButtonItemCircle/>}
        >
          Review
        </ButtonItem>
        <ButtonItem
          icon={<Icon.IconSurvey/>}
          onPress={() =>
            navigation.navigate('InviteFriendCompany')
          }
          iconAction={<ButtonItemCircle/>}
        >
          Invite a friend
        </ButtonItem>
      </View>
    </Container>
  )
};


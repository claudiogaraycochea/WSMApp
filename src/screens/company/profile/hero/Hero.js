import React from 'react';
import { TouchableOpacity, ScrollView, Image, TextInput, View, Text, ImageBackground} from 'react-native';
import styled, { css } from 'styled-components';
import { Color, Row, Col, Icon } from '../../../../ui/UILib';

export default function HeroCompany (props) {
  const { navigation } = props;

  return (
    <View>
      <HeroCompanyContainer>
        <HeroCompanyImage logo={props.logo}></HeroCompanyImage>
        <HeroCompanyName>{props.companyName}</HeroCompanyName>
        <HeroCompanyLinkname>@{props.linkname}</HeroCompanyLinkname>
        <Row>
          <Col>
            <HeroCompanyBtn
              onPress={() => navigation.navigate('InfoCompany')}
            >
              <Text>More Info</Text>
            </HeroCompanyBtn>
          </Col>
          <Col>
            <HeroCompanyBtn
              onPress={() => navigation.navigate('CommentsCompany')}
            >
              <Text>20 Comments</Text>
            </HeroCompanyBtn>
          </Col>
        </Row>
      </HeroCompanyContainer>
    </View>
  )
}

const HeroCompanyContainer = styled.View`
  background-color: ${Color.violetDark};
  margin-top: -20px;
  margin-left: -20px;
  margin-right: -20px;
  padding-top: 20px;
  margin-bottom: 20px;
  display: flex;
`

export const HeroCompanyImage = (props) => {
  const HeroCompanyImageContainer = styled.ImageBackground`
    background-color: ${Color.violet};
    width: 128px;
    height: 128px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 20px;
  `;

  if(props.logo) {
    return (
      <HeroCompanyImageContainer
        imageStyle={{ borderRadius: 100}}
        resizeMode='cover'
        source={{uri: props.logo}}
      />
    )
  }

}

const HeroCompanyName = styled.Text`
  align-self: center;
  color: ${Color.white};
  font-size: 20px;
  font-weight: bold;
`

const HeroCompanyLinkname = styled.Text`
  align-self: center;
  color: ${Color.grayHighlight};
  font-size: 16px;
`

const HeroCompanyBtnContainer = styled.TouchableHighlight`
  align-self: center;
  color: ${Color.grayHighlight};
  font-size: 16px;
  margin-top: 20px;
  padding: 10px 20px;
`

export const HeroCompanyBtn = (props) => {
  return (
    <HeroCompanyBtnContainer
      onPress={props.onPress}
      style={props.style}
      variant={props.variant}
    >
      <Text style={{color: Color.grayHighlight}}>
        {props.children}
      </Text>
    </HeroCompanyBtnContainer>
  );
};
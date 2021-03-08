import React from 'react';
import { TouchableOpacity, ScrollView, Image, TextInput, View, ImageBackground, FlatList, KeyboardAvoidingView } from 'react-native';
import styled, { css } from 'styled-components';
import { Color } from '../colors/Colors';
import IconImageUser from './../icons/IconImageUser';
import IconImageCompany from './../icons/IconImageCompany';

///////////////////////////
/* Container */

export const Container = (props) => {

  const ContainerScroll = styled.ScrollView`
    padding: 20px;
  `;

  const ContainerView = styled.View`
    flex: 1;
    width: 100%;
  `;

  return (
    <ContainerView
      style={{
        backgroundColor: '#ffffff',
      }}
      >
      <ContainerScroll
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        {props.children}
        <View style={{height: 30}}></View>
      </ContainerScroll>
      <View
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          padding: 10,
        }}>
          {props.bottom}
      </View>
    </ContainerView>
  );
}

///////////////////////////
/* Section */

export const Section = (props) => {

  const SectionContainer = styled.View`
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  `;

  return (
    <SectionContainer style={props.style}>
      {props.children}
    </SectionContainer>
  )
}


///////////////////////////
/* Row */

export const Row = (props) => {
  const RowContainer = (props.type) ? (styled.View`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-bottom-color: ${Color.grayHighlight};
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom-width: 1px;
      margin-left: -20px;
      margin-right: -20px;
    `) : (styled.View`
      margin-bottom: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
  `);

  return (
    <RowContainer
      style={props.style}
      width={props.width}
      align={props.align}
    >
      {props.children}
    </RowContainer>
  )
}


///////////////////////////
/* Col */

export const Col = (props) => {
  const ColContainer = styled.View`
    display: flex;
    align-items: ${(props.align) ? props.align : 'center'};
    ${(props.width) ? (`width: `+props.width+`%`) : `flex: 1 ` } ;
  `;
  return (
    <ColContainer
      style={props.style}
      width={props.width}
      align={props.align}
    >
      {props.children}
    </ColContainer>
  )
}

///////////////////////////
/* TopCompany */

export const TopCompany = (props) => {

  const TopCompanyContainer= styled.View`
    margin-bottom: 20px;
    margin-left: -20px;
    margin-right: -20px;
    margin-top: -20px;
    height: 80px;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${Color.violetDark}
  `;

  const TopCompanyContent = styled.View`
    display: flex;
    flex-direction: row;
  `
  const TopCompanyText = styled.View`
    display: flex;
    flex-direction: column;
    margin-top: 4px;
  `

  const TopCompanyImage = styled.View`
    background-color: ${Color.violet};
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50px;
  `

  const TopCompanyName = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color: ${Color.white};
  `

  const TopCompanyLinkname = styled.Text`
    font-size: 14px;
    color: ${Color.grayHighlight};
  `

  return (
    <TopCompanyContainer
      onPress={props.onPress}
      style={props.style}
      variant={props.variant}
    >
      <TopCompanyContent>
        <TopCompanyImage>
          <ImageCompany logo={props.logo}/>
        </TopCompanyImage>
        <TopCompanyText>
          <TopCompanyName>
            {props.companyName}
          </TopCompanyName>
          <TopCompanyLinkname>
            @{props.linkname}
          </TopCompanyLinkname>          
        </TopCompanyText>
      </TopCompanyContent>

    </TopCompanyContainer>
  );
};

///////////////////////////
/* ImageUser */

export const ImageUser = (props) => {
  const size = (props.size) ? props.size : 48;
  const ImageUserContainer = styled.ImageBackground`
    border: 1px solid ${Color.grayHighlight};
    width: 48px;
    height: 48px;
    border-radius: 50px;
    background-color: ${Color.grayHighlight};
  `;

  if (props.image) {
    return (
      <ImageUserContainer 
        style={{width: size, height: size, borderRadius: 100}}
        imageStyle={{ borderRadius: 100}}
        resizeMode='cover'
        source={{uri: props.image}}
      >
      </ImageUserContainer>
    )    
  }

  return <IconImageUser size={props.size}/>
}

export const ImageCompany = (props) => {
  const size = (props.size) ? props.size : 48;
  const ImageCompanyContainer = styled.ImageBackground`
    border: 1px solid ${Color.violet};
    width: 48px;
    height: 48px;
    border-radius: 50px;
    background-color: ${Color.violet};
  `;

  if (props.logo) {
    return (
      <ImageCompanyContainer 
        style={{width: size, height: size, borderRadius: 50}}
        imageStyle={{ borderRadius: 50}}
        resizeMode='cover'
        source={{uri: props.logo}}
      >
      </ImageCompanyContainer>
    )    
  }
  return <IconImageCompany/>
}
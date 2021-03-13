import React from 'react';
import { TouchableOpacity, ScrollView, Image, TextInput, View, Text, ImageBackground} from 'react-native';
import styled, { css } from 'styled-components';
import { Color } from '../colors/Colors';
import IconImageCompany from './../icons/IconImageCompany';

///////////////////////////
/* Button */

const getBgColor = (variant) => {
  switch(variant) {
    case 'primary':
      return Color.primary
    default:
      return Color.normal
  }
}

const getTextColor = (variant) => {
  switch(variant) {
    case 'primary':
      return Color.dark
    default:
      return Color.white
  }
}

export const Button = (props) => {
  const ButtonContainer = styled.TouchableHighlight`
    background-color: ${props => (props.variant) ? getBgColor(props.variant) : Color.normal};
    padding: 6px 20px;
    width: 100%;
    border-color: ${props => (props.variant) ? getTextColor(props.variant) : Color.normal};
    border-radius: 5px;
    border-width: 1px;
    align-self: center;
  `
  const ButtonLabel = styled.Text`
    font-weight: 700;
    align-self: center;
    font-size: 16px;
    padding: 10px;
    font-size: 16px;
    color: ${props => (props.variant) ? getTextColor(props.variant) : Color.primary};
  `

  return (
    <ButtonContainer
      underlayColor='rgba(73,182,77,1,0.9)'
      onPress={props.onPress}
      style={props.style}
      variant={props.variant}
    >
      <ButtonLabel variant={props.variant}>
        {props.children}
      </ButtonLabel>
    </ButtonContainer>
  );
};

/* / Button */

///////////////////////////
/* ButtonBox Items */
export const ButtonBoxItems = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

/* ButtonBox */

export const ButtonBox = (props) => {

  const ButtonBoxContainer = styled.TouchableHighlight`
    width: 48%;
    height: 220px;
    margin-bottom: 10px;
    position: relative;
    border-radius: 20px;
    background-color: ${Color.grayHighlight};
    display: flex;
    flex-direction: row;
  `;

  const ButtonBoxBottom = styled.View`
    align-self: flex-end;
    display: flex;
    flex-direction: column;
  `

  const ButtonBoxLabelImage = styled.ImageBackground`
    background-color: ${Color.gray};
    width: 32px;
    height: 32px;
    margin-bottom: 5px;
    border-radius: 50px;
  `

  const ButtonBoxLabel = styled.Text`
    font-weight: 700;
    align-self: flex-end;
    font-size: 14px;
    color: ${Color.white};
    padding: 0 5px;
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
    border-radius: 20px;
  `

  return (
    <ButtonBoxContainer
      underlayColor='rgba(73,182,77,1,0.9)'
      onPress={props.onPress}
      style={props.style}
      variant={props.variant}
    >
      <ImageBtnCompany 
        image={props.image}
      >
        <ButtonBoxBottom>
          <ButtonBoxLabelImage
            style={{width: 32, height: 32, borderRadius: 50}}
            imageStyle={{ borderRadius: 50}}
            resizeMode='cover'
            source={{uri: props.logo}}
          >
          </ButtonBoxLabelImage>
          <ButtonBoxLabel variant={props.variant}>
            {props.children}
          </ButtonBoxLabel>
        </ButtonBoxBottom>
      </ImageBtnCompany>
    </ButtonBoxContainer>
  );
};

export const ImageBtnCompany = (props) => {

  const ImageBtnCompanyContainer = styled.ImageBackground`
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    padding: 20px 20px;
  `;

  if(props.image) {
    return (
      <ImageBtnCompanyContainer 
        style={{width: '100%', height: '100%'}}
        imageStyle={{ borderRadius: 10}}
        resizeMode='cover'
        source={{uri: props.image}}
      >
        {props.children}
      </ImageBtnCompanyContainer>
    )  
  }

  return (
    <ImageBtnCompanyContainer 
      style={{width: '100%', height: '100%'}}
      imageStyle={{ borderRadius: 10}}
      resizeMode='cover'
    >
      {props.children}
    </ImageBtnCompanyContainer>
  )

}

///////////////////////////
/* ButtonItems */
export const ButtonItems = styled.View`
  margin-bottom: 20px;
`;

/* ButtonBox */
export const ButtonItem = (props) => {

  const ButtonItemContainer = styled.TouchableHighlight`
    margin-left: -20px;
    margin-right: -20px;
    position: relative;
    borderTopColor: ${Color.divisorLine};
    borderTopWidth: 1px;
    padding: 10px 20px;
  `;

  const ButtonItemContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `

  const ButtonItemLeft = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
  `

  const ButtonItemRight = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
  `

  const ButtonItemLabelImage = styled.View`
    width: 32px;
    height: 32px;
    margin-right: 10px;
  `

  const ButtonItemLabel = styled.Text`
    font-weight: 700;
    font-size: 16px;
    color: ${Color.text};
  `

  return (
    <ButtonItemContainer
      underlayColor='rgba(73,182,77,1,0.9)'
      onPress={props.onPress}
      style={props.style}
      variant={props.variant}
    >
      <ButtonItemContent>
        <ButtonItemLeft>
          <ButtonItemLabelImage>{props.icon}</ButtonItemLabelImage>
          <ButtonItemLabel variant={props.variant}>
            {props.children}
          </ButtonItemLabel>
        </ButtonItemLeft>
        <ButtonItemRight>
          {props.iconAction}
        </ButtonItemRight>
      </ButtonItemContent>
    </ButtonItemContainer>
  );
};


///////////////////////////
/* ButtonItemCircle */

export const ButtonItemCircle = (props) => {
  const ButtonItemCircleLabel = styled.Text`
    font-weight: 700;
    align-self: center;
    font-size: 16px;
    color: ${Color.white};
  `

  const ButtonItemCircleContainer = styled.View`
    font-size: 16px;
    color: ${Color.text};
    width: 32px;
    height: 32px;
    background-color: ${Color.highlight};
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  return (
    <ButtonItemCircleContainer
      onPress={props.onPress}
      style={props.style}
      variant={props.variant}
    >
      <ButtonItemCircleLabel>3</ButtonItemCircleLabel>
    </ButtonItemCircleContainer>
  );
}

export const ButtonBottom = (props) => {

  const ButtonBottomContainer = styled.TouchableHighlight`
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: -10px;
    position: relative;
    backgroundColor: ${Color.singleBackground};
    color: ${Color.white};
    borderTopColor: ${Color.divisorLine};
    borderTopWidth: 1px;
    padding: 10px 20px;
  `;

  const ButtonBottomContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `

  const ButtonBottomLabelImage = styled.View`
    width: 32px;
    height: 32px;
    margin-right: 10px;
  `

  const ButtonBottomLabel = styled.Text`
    font-weight: 700;
    font-size: 16px;
    color: ${Color.white};
  `

  return (
    <ButtonBottomContainer
      underlayColor='rgba(73,182,77,1,0.9)'
      onPress={props.onPress}
      style={props.style}
      variant={props.variant}
    >
      <ButtonBottomContent>
        <ButtonBottomLabelImage>{props.icon}</ButtonBottomLabelImage>
        <ButtonBottomLabel variant={props.variant}>
          {props.children}
        </ButtonBottomLabel>
      </ButtonBottomContent>
    </ButtonBottomContainer>
  );
};

export const ButtonIcon = (props) => {
  const ButtonIconContainer = styled.TouchableHighlight`
    background-color: transparent;
    width: 42px;
    height: 42px;
    border-width: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  return (
    <ButtonIconContainer
      underlayColor='rgba(0,0,0,1,0.5)'
      onPress={props.onPress}
      style={props.style}
      variant={props.variant}
    >
      {props.children}
    </ButtonIconContainer>
  );
};
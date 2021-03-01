import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';

export const Loading = (props) => {
  const LoadingContainer = styled.View`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 10000;
  `;

  if(props.visible) {
    return (
      <LoadingContainer>
        <Image 
          source={require('./loading.gif')}  
          style={{width: 48, height: 48 }}
        />
      </LoadingContainer>
    )
  }
  return null;
}
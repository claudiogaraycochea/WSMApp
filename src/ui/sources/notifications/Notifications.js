import React from 'react';
import { Text } from 'react-native';
import styled, { css } from 'styled-components';
import { Color } from '../colors/Colors';

export const Notification = (props) => {
  let colorVariant = '';

  switch (props.variant) {
    case 'success':
      colorVariant = Color.notificationSuccess;
      break;
    case 'alert':
      colorVariant = Color.notificationAlert;
      break;
    case 'danger':
      colorVariant = Color.notificationDanger;
      break;
    default:
      colorVariant = Color.notificationNormal;
      break;
  }

  const NotificationContainer = styled.View`
    position: absolute;
    display: flex;
    background-color: ${colorVariant};
    width: 100%;
    margin-top: 20px;
    padding: 20px 20px;
    borderRadius: 10px;
    z-index: 10000;
  `;

  return (
    <NotificationContainer
      style={props.style}
      width={props.width}
      variant={props.variant}
    >
      <Text>{props.children}</Text>
    </NotificationContainer>
  )
}
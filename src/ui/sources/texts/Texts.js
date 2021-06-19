import React from 'react';
import { TouchableOpacity, ScrollView, Image, TextInput, View } from 'react-native';
import styled, { css } from 'styled-components';
import { Color } from '../colors/Colors';

/* Text */
export const Text = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${Color.text};
`;

export const H1 = styled.Text`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  flex: 1;
  text-transform: uppercase;
  color: ${Color.text};
`;

export const H2 = styled.Text`
  font-size: 26px;
  padding-bottom: 5px;
  text-align: center;
  flex: 1;
  font-weight: bold;
  text-transform: uppercase;
  color: ${Color.text};
`;

export const H3 = styled.Text`
  font-size: 16px;
  text-align: center;
  flex: 1;
  font-weight: bold;
  text-transform: uppercase;
  color: ${Color.text};
`;

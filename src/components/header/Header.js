import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../ui/UILib';

export default function Header (props) {

  return (
    <View
      style={{
        justifyContent: 'space-between',
      }}
    >
      <Text style={{fontWeight: 'bold'}}>{props.title}</Text>
    </View>
  )
}

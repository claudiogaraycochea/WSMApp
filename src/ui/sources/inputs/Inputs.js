import React, { useState } from 'react';
import { View, Switch, StyleSheet, Picker } from 'react-native';
import styled, { css } from 'styled-components';
import { Color } from '../colors/Colors';
import { Text } from '../texts/Texts';
import validate from './validate.js';

/* Input 
  Ex:
  <Input
    label='Firstname'
    type=''
    value={firstname}
    placeholder='Firstname'
    onChangeText={(text)=> setFirstname(text)}
    min={2}
  />
*/

export const Input = (props) => {
  let value = props.value;

  validate.type = props.type;
  validate.min = props.min;

  const InputContainer = styled.TextInput`
    backgroundColor: ${Color.inputBackground};
    color: ${Color.text};
    padding: 10px 20px;
    width: 100%;
    font-size: 20px;
    border: 1px solid ${Color.gray};
    border-radius: 5px;
  `;

  return (
    <View style={{width: '100%'}}>
      {props.label ? <Text style={{marginBottom: 10}}>{props.label}</Text> : null}
      <InputContainer
        defaultValue={value}
        secureTextEntry={(props.type==='password') ? true : false}
        placeholder= {props.placeholder}
        style={validate.styleCheckValueInit(value)}
        onChange={(event) => { value = event.nativeEvent.text }}
        onEndEditing={() => props.onChangeText(value)}
      >
      </InputContainer>
    </View>
  )

}
/* /Input */
export const InputTextArea = (props) => {
  let value = props.value;

  validate.type = props.type;
  validate.min = props.min;

  const InputTextAreaContainer = styled.TextInput`
    backgroundColor: ${Color.inputBackground};
    color: ${Color.text};
    padding: 10px 20px;
    width: 100%;
    height: 200px;
    font-size: 20px;
    border: 1px solid ${Color.gray};
    border-radius: 5px;
  `;

  return (
    <View style={{width: '100%'}}>
      {props.label ? <Text style={{marginBottom: 10, color: '#ffffff'}}>{props.label}</Text> : null}
      <InputTextAreaContainer
        multiline
        numberOfLines={3}
        defaultValue={value}
        secureTextEntry={(props.type==='password') ? true : false}
        placeholder= {props.placeholder}
        style={validate.styleCheckValueInit(value)}
        onChange={(event) => { value = event.nativeEvent.text }}
        onEndEditing={() => props.onChangeText(value)}
      >
      </InputTextAreaContainer>
    </View>
  )
}

export const InputSwitch = (props) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }
  });

  /*const isEnabled = true;*/
  // const toggleSwitch = true;
  
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 10}}>{props.label}</Text>
      <Switch
        style={{ borderWidth: 1, borderColor: Color.gray}}
        trackColor={{ false: Color.grayHighlight, true: Color.white }}
        thumbColor={true ? Color.violet : Color.grayHighlight}
        ios_backgroundColor={Color.white}
        onChange={props.onChange}
        value={props.value}
      />
    </View>
  );
}

/* InputIcon */
export const InputIcon = (props) => {

  const InputIconContainer = styled.TextInput`
    backgroundColor: #FFFFFF;
    color: #222222;
    padding: 10px 20px;
    width: 100%;
    font-size: 20px;
    border: 1px solid #E5E5E5;
    border-radius: 5px;
    position: relative;
  `;

  const ButtonIconContainer = styled.View`
    color: #222222;
    width: 42px;
    height: 42px;
    position: absolute;
    right: 5px;
    top: 2px;
  `;

  return (
    <View style={{width: '100%'}}>
      {props.label ? <Text style={{marginBottom: 10}}>{props.label}</Text> : null}
      <InputIconContainer
        defaultValue={props.defaultValue}
        keyboardType={(props.keyboardType) ? props.keyboardType : null}
        secureTextEntry={props.secureTextEntry ? true : false}
        onChange={props.onChange}
        placeholder= {props.placeholder}
      >
      </InputIconContainer>
      <ButtonIconContainer>
        {props.children}
      </ButtonIconContainer>
    </View>
  )

}
/* / InputIcon */

export const InputSelect = (props) => {
  let value = props.value;

  validate.type = props.type;
  validate.min = props.min;

  const InputSelectContainer = styled.Picker`
    backgroundColor: ${Color.white};
    color: ${Color.text};
    padding: 10px 20px;
    width: 100%;
    font-size: 20px;
    border: 1px solid ${Color.gray};
    border-radius: 5px;
  `;

  return (
    <View style={{width: '100%'}}>
      {props.label ? <Text style={{marginBottom: 10}}>{props.label}</Text> : null}
      <View style={{
          flex: 1,
          padding: 0,
          margin: 0,
          alignItems: "center",
          borderWidth: 1, 
          borderColor: 'red',
          position: 'relative',
          height: 40,
        }}
      >
        <Picker
          selectedValue={selectedValue}
          style={{ height: 40, width: '100%', margin: 0, padding: 0, position: 'absolute', top: -90 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Company" value="Company" />
          <Picker.Item label="Customer" value="Customer" />
        </Picker>
      </View>
    </View>
  )

}
/* /Input */
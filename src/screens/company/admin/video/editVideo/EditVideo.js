import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Row, H2, TopCompany, icon, Input, Button, Text, ImageCompany } from '../../../../../../src/ui/UILib';
import styled, { css } from 'styled-components';

class EditVideoCompany extends Component {
  constructor(){
    super();
    this.state = {}
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <View>
          <Row>
            <Text>Choose a file with format mpeg, mov or mp4</Text>
          </Row>
          <Row>
            <Button
              variant='primary'
              onPress={() =>
                navigation.navigate('Login')
              }
            >
              Upload a vide
            </Button>
          </Row>
        </View>
      </Container>
    )
  }
};

export default EditVideoCompany;

const ContainerCenter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  height: 100%;
`
const Icon = styled.View`
  padding: 30px 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 128px;
  border: 1px solid red;
`
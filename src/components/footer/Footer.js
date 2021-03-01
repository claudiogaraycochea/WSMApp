import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Text>© Grapevines 2021</Text>
      </FooterContainer>
    )
  }
}

const FooterContainer= styled.View`
  margin-bottom: -12px;
  margin-left: -20px;
  margin-right: -20px;
  height: 40px;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps,mapDispatchToProps)(Footer);
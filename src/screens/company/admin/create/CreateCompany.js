import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Container, Section, Row, H3, Input, Button } from '../../../../../src/ui/UILib';
import styled, { css } from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { createCompany } from "../../../../store/actions/companyActions";


export default function CreateCompany (props) {
  const { navigation } = props;
  const { user } = useSelector(state => state.userConstructor);
  const { company_own } = useSelector(state => state.companyConstructor);
  const dispatch = useDispatch();
  const [company_name, setCompanyName] = useState('Company3');
  const [linkname, setLinkname] = useState('linknameA');
  const [type, setType] = useState('typeA');
  const [business, setBusiness] = useState('BusinessA');
  const [address, setAddress] = useState('AddressA');
  const [city, setCity] = useState('CityA');
  const [state, setState] = useState('StateA');
  const [country, setCountry] = useState('CountryA');
  const [telephone, setTelephone] = useState('TelephoneA');

  const handleCreateCompany = () => {
    const data = {
      company_owner_uid: user.uid,
      company_name,
      linkname,
      type,
      business,
      address,
      city,
      state,
      country,
      telephone,
    }
    dispatch(createCompany(data));
  }

  useEffect(() => {
    if(company_own) {
      navigation.navigate('AdminOverviewCompany');
    }
  });

  return (
    <Container>
      <Row><H3>CREATE COMPANY</H3></Row>
      <Section>
        <Row>
          <Input
            label='Company name'
            value={company_name}
            placeholder='Company name'
            onChangeText={(text)=> setCompanyName(text)}
            min={3}
          />
        </Row>
        <Row>
          <Input
            label='Company linkname'
            value={linkname}
            placeholder='Company linkname'
            onChangeText={(text)=> setLinkname(text)}
            min={3}
          />
        </Row>
        <Row>
          <Input
            label='Type'
            value={type}
            placeholder='Type'
            onChangeText={(text)=> setType(text)}
            min={3}
          />
        </Row>
        <Row>
          <Input
            label='Business'
            value={business}
            placeholder='Business'
            onChangeText={(text)=> setBusiness(text)}
            min={3}
          />
        </Row>
        <Row>
          <Input
            label='Address'
            value={address}
            placeholder='Address'
            onChangeText={(text)=> setAddress(text)}
            min={3}
          />
        </Row>
        <Row>
          <Input
            label='City'
            value={city}
            placeholder='City'
            onChangeText={(text)=> setCity(text)}
            min={3}
          />
        </Row>
        <Row>
          <Input
            label='State'
            value={state}
            placeholder='State'
            onChangeText={(text)=> setState(text)}
            min={3}
          />
        </Row>
        <Row>
          <Input
            label='Country'
            value={country}
            placeholder='Country'
            onChangeText={(text)=> setCountry(text)}
            min={3}
          />
        </Row>
        <Row>
          <Input
            label='Telephone'
            value={telephone}
            placeholder='Telephone'
            onChangeText={(text)=> setTelephone(text)}
            min={3}
          />
        </Row>
        <Row>
          <Button
            variant='primary'
            onPress={() => handleCreateCompany()}
          >
            Create company
          </Button>
        </Row>
      </Section>
    </Container>
  )
};

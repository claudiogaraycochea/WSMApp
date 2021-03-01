import React, { useState } from 'react';
import { Container, Section, Row, H3, Input, Button } from '../../../../../../src/ui/UILib';

import { useSelector, useDispatch } from 'react-redux';
import { updateCompany } from "../../../../../store/actions/companyActions";

export default function EditGeneralCompany (props) {
  const { navigation } = props;
  const { company_own } = useSelector(state => state.companyConstructor);
  const dispatch = useDispatch();
  const [company_name, setCompanyName] = useState(company_own.company_profile.company_name);
  const [linkname, setLinkname] = useState(company_own.company_profile.linkname);
  const [type, setType] = useState(company_own.company_profile.type);
  const [business, setBusiness] = useState(company_own.company_profile.business);
  const [address, setAddress] = useState(company_own.company_profile.address);
  const [city, setCity] = useState(company_own.company_profile.city);
  const [state, setState] = useState(company_own.company_profile.state);
  const [country, setCountry] = useState(company_own.company_profile.country);
  const [telephone, setTelephone] = useState(company_own.company_profile.telephone);

  const handleUpdateCompany = () => {
    const { company_id } = company_own;
    const data = {
      company_name,
      linkname,
      type,
      business,
      address,
      city,
      state,
      country,
      telephone,
    };
    dispatch(updateCompany(company_id, data));
    navigation.navigate('AdminOverviewCompany');
  }

  return (
    <Container>
      <Row><H3>EDIT COMPANY</H3></Row>
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
            onPress={() => handleUpdateCompany()}
          >
            Save
          </Button>
        </Row>
      </Section>
    </Container>
  )
};

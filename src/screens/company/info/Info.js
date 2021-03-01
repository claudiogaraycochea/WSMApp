import React from 'react';
import { Container, Row, Col, H3, Text, TopCompany, ImageCompany } from '../../../../src/ui/UILib';
import { useSelector } from 'react-redux';

export default function InfoCompany (props){
  const { navigation } = props;
  const { company } = useSelector(state => state.companyConstructor);
  const { company_name, linkname, type, business, address, city, state, country, telephone } = company.company_profile;

  return (
    <Container>
      <TopCompany
        icon={<ImageCompany image=""/>}
        companyName={company_name}
        linkname={`${linkname}`}
      />
      <Row type='divisor'>
        <Col width='40' align='flex-start'>
          <H3>Type</H3>
        </Col>
        <Col align='flex-end'>
          <Text>{type}</Text>
        </Col>
      </Row>
      <Row type='divisor'>
        <Col width='40' align='flex-start'>
          <H3>Business</H3>
        </Col>
        <Col align='flex-end'>
          <Text>{business}</Text>
        </Col>
      </Row>
      <Row type='divisor'>
        <Col width='40' align='flex-start'>
          <H3>Location</H3>
        </Col>
        <Col align='flex-end'>
          <Text style={{textAlign: 'right'}}>{`${address} (${city}/${state}/${country})`}</Text>
        </Col>
      </Row>
      <Row>
        <Col width='40' align='flex-start'>
          <H3>Telephone</H3>
        </Col>
        <Col align='flex-end'>
          <Text>{telephone}</Text>
        </Col>
      </Row>
    </Container>
  )
};

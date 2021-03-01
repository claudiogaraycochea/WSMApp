import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, H2, TopCompany, Text, Icon } from '../../../../../src/ui/UILib';
import styled from 'styled-components';

export default function ReviewCompany(props) {
  const { navigation } = props;
  const { company } = useSelector(state => state.companyConstructor);

  return (
    <Container>
      <TopCompany
        logo={`https://${company.company_profile.logo}`}
        companyName={company.company_profile.company_name}
        linkname={company.company_profile.linkname}
      />
      <Row>
        <H2>GET 1 VINES NOW!!!</H2>
      </Row>
      <Row>
        <Text>How has been your experience with telephone customer attention?</Text>
      </Row>
      <Row>
        <Icon.IconSelector/>
      </Row>
      <Row>
        <Icon.IconSelector/>
      </Row>
      <Row>
        <Icon.IconSelector/>
      </Row>
      <Row>
        <Icon.IconSelector/>
      </Row>
    </Container>
  )
};

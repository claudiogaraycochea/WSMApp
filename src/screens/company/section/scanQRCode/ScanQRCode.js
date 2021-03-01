import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, H2, TopCompany, Icon } from '../../../../../src/ui/UILib';
import styled from 'styled-components';

export default function ScanQRCodeCompany(props) {
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
        <H2>GET 5 VINES NOW!!!</H2>
      </Row>
      <ContainerCenter>
        <Icon.IconScanQRCode/>
      </ContainerCenter>
    </Container>
  )
};

const ContainerCenter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  height: 100%;
`;
import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { Container, Section, Row, H2, H3, TopCompany, Input, Button, Text, ImageCompany } from '../../../../../src/ui/UILib';

export default function SurveyCompany(props)  {
  const { navigation } = props;
  const { company } = useSelector(state => state.companyConstructor);
  const { survey_title, survey_desc, survey_questions } = (company.company_sections.surveys.length>0) ? company.company_sections.surveys[0] : {survey_title: null, survey_questions: []};

  console.log('SurveyCompany: company: company.survey_questions[0]: ', company.company_sections.surveys[0]);
  console.log('company.company_name: ', company.company_profile.company_name);
  if (!survey_title) {
    return (
      <Container>
        <Row>
          <H2>Do not have survey defined!</H2>
        </Row>
      </Container>
    )
  }

  return (
    <Container>
      <TopCompany
        logo={`https://${company.company_profile.logo}`}
        companyName={company.company_profile.company_name}
        linkname={company.company_profile.linkname}
      />
      <Row>
        <H2>{survey_title}</H2>
      </Row>
      <Row>
        <H3>{survey_desc}</H3>
      </Row>
      <Section>
        {(survey_questions.length>0) ? (survey_questions.map(question => (
          <View key={question.question_id}>
            <Row>
              <Text>{question.question}</Text>
            </Row>
            <Row>
              <Input
                
              />
            </Row>
          </View>
        ))) : null}
        <Row>
          <Button
            variant='primary'
            onPress={() =>
              navigation.navigate('Login')
            }
          >
            Finish Survey
          </Button>
        </Row>
      </Section>
    </Container>
  )
};

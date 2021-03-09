import React, { useState } from 'react';
import { Container, Row, H3, Input, InputSwitch, Button } from '../../../../ui/UILib';
import { useSelector, useDispatch } from 'react-redux';
import { request, ContentTypes } from '../../../../store/apiLib';

export default function EditMenuCompany (props) {
  const { navigation } = props;
  const { company_own } = useSelector(state => state.companyConstructor);
  const dispatch = useDispatch();

  const [survey_title, setSurveyTitle] = useState();
  const [survey_desc, setSurveyDesc] = useState();
  const [survey_questions, setSurveyQuestion] = useState();

  async function handleCreateSurveySubmit() {
    const { company_id } = company_own;
    const data = {
      survey_title,
      survey_desc,
      survey_questions: [
        {
          question: "Question 1?"
        },
        {
          question: "Question 2?"
        }
      ]
    }
    console.log('handleCreateSurveySubmit: data: ',data);
    const endpoint =`/company/${company_id}/survey`;
    try {
      const res = await request('POST', endpoint, data, { 'content-type': ContentTypes.json });
      console.log('survey created', res.data.result);
    } catch (err) {
      console.error(err);
    }
    // navigation.navigate('AdminOverviewCompany');
  }

  return (
    <Container>
      <Row><H3>CREATE MENU</H3></Row>
      <Row>
        <Input
          label='Choose parent menu'
          value={survey_title}
          placeholder='Appoiment'
          onChangeText={(text)=> setSurveyTitle(text)}
          min={3}
        />
      </Row>
      <Row>
        <Input
          label='Menu title'
          value={survey_desc}
          placeholder='Menu title'
          onChangeText={(text)=> setSurveyDesc(text)}
          min={3}
        />
      </Row>
      <Row>
        <Button>Add endpoint</Button>
      </Row>
      <Row>
        <Button
          variant='primary'
          onPress={() => handleCreateSurveySubmit()}
        >
          Save
        </Button>
      </Row>
    </Container>
  )

};

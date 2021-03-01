import React, { useEffect, useState, useRef } from 'react';
import { View } from 'react-native';
import {
  Container,
  Row,
  InputIcon,
  ButtonBoxItems,
  ButtonBox,
  ButtonIcon,
  ButtonBottom,
  Icon,
  Color,
} from '../../../../src/ui/UILib';

import { useSelector, useDispatch } from 'react-redux';
import { searchCompany, getCompany } from "../../../store/actions/companyActions";

export default function SearchCompany(props) {
  const { navigation } = props;
  const [search_value, setSearchValue ] = useState('');
  const dispatch = useDispatch();
  const { companies, company_own } = useSelector(state => state.companyConstructor);
  const { user } = useSelector(state => state.userConstructor);

  let formData = {
    search_value: search_value
  }

  const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prev_search_value = usePrevious(search_value);

  useEffect(()=> {
    if(search_value!==prev_search_value) {
      const data = {
        "company_name": search_value
      };    
      dispatch(searchCompany(data));
    }
  })

  const search = () => {
    setSearchValue(formData.search_value)
  }

  const viewProfileCompany = (company_id) => {
    dispatch(getCompany(company_id));
    console.log('viewProfileCompany: company_id: ',company_id);
    navigation.navigate('ProfileCompany');
  }

  return (
    <Container
      bottom={(company_own) ? (
        <ButtonBottom
          icon={(<Icon.IconHotkeySettings color={Color.white}/>)}
          onPress={() => navigation.navigate('AdminOverviewCompany')}
        >
          Admin my company
        </ButtonBottom>) : null
      }
    >
      <View>
        <Row>
          <InputIcon
            placeholder={'Search company'}
            defaultValue={formData.search_value}
            onChange={(event)=> { formData.search_value = event.nativeEvent.text }}
          >
            <ButtonIcon
              onPress={(event) => search()}
            >
              <Icon.IconSearch/>
            </ButtonIcon>
          </InputIcon>
        </Row>
        <Row>
          <ButtonBoxItems>
            {companies.map((company) => (
              <ButtonBox
                key={company.company_id}
                image="https://i2.wp.com/partiudisneyparks.com/wp-content/uploads/2019/03/mcdonalds-em-orlando.jpg?fit=1024%2C683&ssl=1"
                logo={`https://${company.company_profile.logo}`}
                onPress={() => viewProfileCompany(company.company_id)}
              >
                {company.company_profile.company_name}
              </ButtonBox>
            ))}
          </ButtonBoxItems>
        </Row>
      </View>
    </Container>
  )
};

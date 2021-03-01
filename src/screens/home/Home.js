import React, { useState } from 'react';
import { Container, Loading } from '../../../src/ui/UILib';
import { useSelector, useDispatch } from 'react-redux';
import SearchCompany from '../company/search/Search';
import HomeMenu from '../homeMenu/HomeMenu';
import { getCompanyOwn } from '../../store/actions/companyActions';
import { request, ContentTypes } from '../../store/apiLib';
import CreateCompany from '../company/admin/create/CreateCompany';

export default function Home(props) { 
  const { navigation } = props;
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userConstructor);
  const { company_own } = useSelector(state => state.companyConstructor);
  const [company_own_empty, setCompanyOwnEmpty] = useState(false);

  async function getCompanies() {
    const data = null;
    const endpoint = `/companies`;
    try {
      const res = await request('GET', endpoint, data, { 'content-type': ContentTypes.json });
      const companies = res.data.result;
      const company_own_array = companies.filter((company) => company.company_owner_uid===user.uid);
      if(company_own_array[0]) {
        console.log('company_own:', company_own_array[0]);
        dispatch(getCompanyOwn(company_own_array[0].company_id));
      } else {
        setCompanyOwnEmpty(true);
      }
    }
    catch (e) {
      console.log(e);
    }
  }
  console.log('Home: company_own: ',company_own);

  if (user.role==='customer') {
    return <SearchCompany {...props} />
  }

  if ((user.role==='company') && (company_own!==null)) {
    return <HomeMenu {...props} />
  }

  if ((user.role==='company') && (company_own_empty===true)) {
    return <CreateCompany />
  }

  if ((user.role==='company') && (company_own_empty===false) && company_own===null) {
    getCompanies();
  }

  return (
    <Container>
      <Loading visible={true}/>
    </Container>
  );

}
const initialState = {
  company: {
    company_profile: {
      logo: null,
      company_name: null,
      linkname: null,
    },
    company_sections: {
      surveys: [{survey_title: '',survey_questions: []}]
    }
  },
  companies: [],
  company_own: null,
};

export default function companyConstructor(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_COMPANY_OWN_SUCCESS':
      return {
        ...state,
        company_own: action.company_own
      };

    case 'UPDATE_COMPANY_OWN_SUCCESS':
      return {
        ...state,
        company_own: action.company_own
      };

    case 'GET_COMPANY_OWN_SUCCESS':
      return {
        ...state,
        company_own: action.company_own
      };

    case 'GET_COMPANY_SUCCESS':
      return {
        ...state,
        company: action.company
      };

    case 'SEARCH_COMPANY_SUCCESS':
      return {
        ...state,
        companies: action.companies
      };

    case 'GET_COMPANIES_SUCCESS':
      return {
        ...state,
        companies: action.companies
      };  

    default:
      return state;
  }
}

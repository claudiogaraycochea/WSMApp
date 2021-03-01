import { menu } from '../config/menuMock';

const initialState = {
  menu,
  menu_id: null,
};

export default function menuConstructor(state = initialState, action) {
  switch (action.type) {
    case 'SET_SUBMENU_SUCCESS':
      return {
        ...state,
        menu_id: action.menu_id
      };

    default:
      return state;
  }
}
  
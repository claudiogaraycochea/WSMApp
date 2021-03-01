import { combineReducers } from "redux";
import userConstructor from './userReducers';
import companyConstructor from './companyReducers';
import menuConstructor from './menuReducers';

export default combineReducers({
    userConstructor: userConstructor,
    companyConstructor: companyConstructor,
    menuConstructor: menuConstructor,
  }
);


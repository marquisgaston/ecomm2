import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';

import headerNavbar from './headernavbarreducer';
import user from './userreducer';
import shop from './shopreducer';

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user,
  shop
});

export default rootReducer;
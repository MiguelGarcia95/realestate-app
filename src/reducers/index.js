import {combineReducers} from 'redux';
import propertyReducer from './propertyReducer';
import formReducer from './formReducer';

export default combineReducers({
  property: propertyReducer,
  propertyQuery: formReducer
});

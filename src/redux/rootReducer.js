import * as actionTypes from '../redux/types';
import {combineReducers} from 'redux';

const counterInitialState = {
  counter: 0,
}

const counterReducer =  (state = counterInitialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state;
  }  
}

const themeInitialState = {
  value: 'light',
  disabled: false
}

const themeReducer =  (state = themeInitialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return { 
        ...state,
        value: action.payload
      }
    case actionTypes.DISABLEBUTTONS: 
      return {
        ...state,
        disabled: true
      }
    case actionTypes.ENABLEBUTTONS: 
      return {
        ...state,
        disabled: false
      } 
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
});
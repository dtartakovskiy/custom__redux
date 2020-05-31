import * as actionTypes from './types';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  }
}

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  }
}

export const asyncIncrement = () => {
  return dispatch => {
    dispatch({type: actionTypes.DISABLEBUTTONS})
    setTimeout(() => {
      dispatch({type: actionTypes.INCREMENT})
      dispatch({type: actionTypes.ENABLEBUTTONS})
    }, 2000);
  }
}

export const changeTheme = (newTheme) => {
  return {
    type: actionTypes.CHANGE_THEME,
    payload: newTheme
  }
}
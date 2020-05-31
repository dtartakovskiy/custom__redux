import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import './styles.css';
import {rootReducer} from './redux/rootReducer';
import * as actions from './redux/actions';
import logger from 'redux-logger'

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

// function logger (state) {
//   return function (next) {
//     return function (action) {
//       console.log('PrevState', state.getState());
//       console.log('Action', action);

//       const newState = next(action);
//       console.log('CurrentState', state.getState());
//       return newState;
//     }
//   }
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, logger),
  )
);

addBtn.addEventListener('click', () => {
  store.dispatch(actions.increment())
})
subBtn.addEventListener('click', () => {
  store.dispatch(actions.decrement())
})

// Async btn
asyncBtn.addEventListener('click', () => {
  store.dispatch(actions.asyncIncrement());
})

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light')
    ? 'dark'
    : 'light' 
  store.dispatch(actions.changeTheme(newTheme))
});

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.counter.counter;

  document.body.classList.toggle(state.theme.value);

  const btns = [addBtn, subBtn, themeBtn, asyncBtn];
  const disabled = state.theme.disabled;

  btns.forEach(btn => btn.disabled = disabled);
})

store.dispatch({type: 'INIT_APPLICATION'})




export function createStore (rootReducer, initialState) {
  let store = rootReducer(initialState, {type: '__INIT__'})
  const subscribers = [];

  return {
    dispatch(action) {
      store = rootReducer(store, action);
      subscribers.forEach(sub => sub());
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return store
    }
  }
}
import { createStore } from 'redux';

function rootReducer(state = {}, action) {
  switch (action.type) {
    // Ваши редьюсеры
    default:
      return state;
  }
}

const store = createStore(rootReducer);
export default store;

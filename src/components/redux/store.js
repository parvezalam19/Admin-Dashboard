import { createStore , combineReducers } from 'redux';
import { productsData } from './reducer';

const rootReducer = combineReducers({
    data: productsData,
  });



const store = createStore(rootReducer);

export default store;
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import graphReducer from '../reducers/graph'; 
import filterReducer from '../reducers/filter';
import tableReducer from '../reducers/table';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {}

const middleWare = [thunk]; //append middleware here

const reducers = {   //append reducers here
    graph: graphReducer,
    filters: filterReducer,
    table: tableReducer
}

export default () => {
  const store = createStore(
    combineReducers(reducers),
    initialState,
    composeEnhancers(applyMiddleware(...middleWare))
  )

  return store;
}
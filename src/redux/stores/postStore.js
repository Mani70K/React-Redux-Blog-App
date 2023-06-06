import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postReducer } from '../reducers/postReducer';


const rootReducer = combineReducers({
    datas:postReducer
  });
  
  const store = createStore(
    rootReducer, {},window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  
  export default store;
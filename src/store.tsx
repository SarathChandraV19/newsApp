import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import {coronaNewsEpic} from './epics';
import coronaNewsReducer from './reducers/index';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
    const store = createStore(
        coronaNewsReducer,
      applyMiddleware(epicMiddleware)
    );
  
    epicMiddleware.run(coronaNewsEpic);
  
    return store;
  }

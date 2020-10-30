import { createStore, combineReducers} from 'redux';
import { actionReducer } from './ActionReducer';

export const rootReducer = combineReducers({ actionReducer });
export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);

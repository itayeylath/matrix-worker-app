
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/user-reducers';

const composeEnhancers = compose;

const rootReducer = combineReducers({
    userModule: userReducer,

});
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
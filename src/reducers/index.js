import { combineReducers } from 'redux';
import persistedReducer from './PersistedReducer';
import langDirection from './langDirection';
import LanguageReducer from "./LanguageReducer";
import authReducer from './AuthReducer';

const rootReducer = combineReducers({
    persistedReducer,
    langDirection,
    LanguageReducer,
    authReducer
})

export default rootReducer;
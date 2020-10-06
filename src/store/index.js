
import reducers from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'sampleRedux',
    storage: AsyncStorage,
    whitlist: ['persistedReducer', 'authReducer']
}



const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
export default store;

store.subscribe(() => {
    // console.log("Store Changed ", store.getState());
  
});
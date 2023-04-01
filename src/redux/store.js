import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getProductsReducer ,getProductDetailsReducer} from './reducers/productReducer';


const reducer = combineReducers({
getProducts: getProductsReducer,
getProductDetails:getProductDetailsReducer
})


const midleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...midleware))
)

export default store;
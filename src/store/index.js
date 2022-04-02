import { createStore, combineReducers, applyMiddleware } from "redux";
import categoryReducer from "./reducers/category.reducer";
import productReducer from "./reducers/product.reducer";
import cartReducer from "./reducers/cart.reducer"
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));


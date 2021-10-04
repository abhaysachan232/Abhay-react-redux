import {combineReducers} from 'redux'
import { ProductReducer , SelectedProductsReducer } from './ProductReducer'

const rootReducer = combineReducers({
    allProducts: ProductReducer ,
    products: SelectedProductsReducer,  
})

export default rootReducer;
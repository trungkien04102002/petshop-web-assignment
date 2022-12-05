import {combineReducers } from 'redux'

import cartAddingReducer from '../components/Slice/cartSlice'

const rootReducer = combineReducers({
    cartAdding: cartAddingReducer
})

export default rootReducer;
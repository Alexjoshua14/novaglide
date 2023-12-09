
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cartSlice'

/**
 * Store contains just one simple reducer for
 * storing demo state of cart items. 
 */
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
})
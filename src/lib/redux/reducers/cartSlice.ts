
import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    count: 0,
  },
  reducers: {
    addItem: (state) => {
      // In production would need to actually pass data
      state.count = Math.min(state.count + 1, 999)
    },
    removeItem: (state) => {
      state.count = Math.max(state.count -= 1, 0)
    },
    clearCart: (state) => {
      state.count = 0
    }
  }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
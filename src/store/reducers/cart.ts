import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartSlice = {
  items: Prato[]
  isOpen: boolean
}

const initialState: CartSlice = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const comida = state.items.find((item) => item.id === action.payload.id)
      if (!comida) {
        // (comida === undefined) ele da push, mas (!comida) faz a msm função
        state.items.push(action.payload)
      } else {
        alert('O item já esta no carrinho!')
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    reset: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, reset } = cartSlice.actions
export default cartSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contatos'
import filtrosReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtro: filtrosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

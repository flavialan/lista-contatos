import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  termo?: string
  letra: string
}

const initialState: FiltroState = {
  termo: '',
  letra: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarLetra: (state, action: PayloadAction<FiltroState>) => {
      state.letra = action.payload.letra
    }
  }
})

export const { alterarTermo, alterarLetra } = filtroSlice.actions

export default filtroSlice.reducer

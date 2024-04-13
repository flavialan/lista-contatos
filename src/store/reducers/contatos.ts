import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contatos'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Flavia',
      sobrenome: 'Lopes',
      email: 'flavia@gmail.com',
      telefone: '73991004195'
    },
    {
      id: 2,
      nome: 'Yann',
      sobrenome: 'Nascimento',
      email: 'yann@gmail.com',
      telefone: '73991029999'
    },
    {
      id: 3,
      nome: 'Bruna',
      sobrenome: 'Lopes',
      email: 'bruna@gmail.com',
      telefone: '2799999999'
    },
    {
      id: 4,
      nome: 'Sandra',
      sobrenome: 'Almeida',
      email: 'sandra@gmail.com',
      telefone: '27991000123'
    },
    {
      id: 5,
      nome: 'Erli',
      sobrenome: 'Almeida',
      email: 'erli@gmail.com',
      telefone: '27991000124'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'Contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExistente = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoExistente) {
        alert('Já existe um contato com este nome na agenda.')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }

        state.itens.push(novoContato)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer

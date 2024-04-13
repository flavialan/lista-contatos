import styled from 'styled-components'
import { Botao } from '../../styles/index'

export const ContainerStatus = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const BotaoDeletarECancelar = styled(Botao)`
  margin-right: 2px;
  background-color: transparent;
  color: red;
  font-size: 20px;
`

export const BotaoEditar = styled(Botao)`
  background-color: transparent;
  color: blue;
  font-size: 18px;
`

export const BotaoSalvar = styled(Botao)`
  margin-right: 2px;
  background-color: transparent;
  color: green;
  font-size: 20px;
`

export const Descricao = styled.textarea`
  font-size: 14px;
  resize: none;
  border: none;
  background-color: transparent;
  margin-left: 12px;
  margin-top: 8px;
  border-bottom: 1px solid #6666;
`

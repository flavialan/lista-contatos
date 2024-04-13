import styled from 'styled-components'
import { Botao } from '../../styles/index'

export const Form = styled.form`
  width: 100%;
  margin-top: 60px;
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #6666;
  border-color: #6666;
  display: block;
  margin: 10px auto;
  max-width: 500px;
  width: 100%;
`

export const BotaoCadastrar = styled(Botao)`
  display: block;
  margin: 10px auto;
  background-color: #574b90;
  color: #fff;
  max-width: 500px;
  width: 100%;
`

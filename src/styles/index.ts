import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  height: 100vh;
  overflow-y: scroll;
`

export const Botao = styled.button`
  padding: 8px 16px;
  cursor: pointer;
  color: #574b90;
  border: none;
  border-radius: 4px;
  background-color: #fff;
`
export const Titulo = styled.h1`
  display: block;
  padding-top: 20px;
  padding-bottom: 40px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  background-color: #574b90;
  color: #fff;
`

export default EstiloGlobal

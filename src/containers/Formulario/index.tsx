import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'

import { MainContainer } from '../../styles'
import * as S from './styles'
import { cadastrar } from '../../store/reducers/contatos'
import { Titulo } from '../../styles'

const Formulario = () => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      cadastrar({
        nome,
        sobrenome,
        email,
        telefone
      })
    )
  }

  const limparCampos = () => {
    setTimeout(() => {
      setNome('')
      setSobrenome('')
      setTelefone('')
      setEmail('')
    }, 100)
  }

  return (
    <>
      <MainContainer>
        <Titulo>Cadastrar Contato</Titulo>
        <S.Form onSubmit={cadastrarContato}>
          <S.Campo
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            type="text"
            placeholder="Nome"
            required
          />
          <S.Campo
            value={sobrenome}
            onChange={(event) => setSobrenome(event.target.value)}
            type="text"
            placeholder="Sobrenome"
            required
          />
          <S.Campo
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
            type="text"
            placeholder="Telefone"
            required
          />
          <S.Campo
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="E-mail"
            required
          />
          <S.BotaoCadastrar onClick={limparCampos} type="submit">
            ADICIONAR
          </S.BotaoCadastrar>
        </S.Form>
      </MainContainer>
    </>
  )
}

export default Formulario

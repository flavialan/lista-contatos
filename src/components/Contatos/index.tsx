import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaUserEdit } from 'react-icons/fa'
import {
  MdDeleteForever,
  MdCancel,
  MdOutlineDownloadDone
} from 'react-icons/md'

import * as S from './styles'
import Contatos from '../../models/Contatos'
import { editar, remover } from '../../store/reducers/contatos'

type Props = Contatos

const Contato = ({
  id,
  nome: nomeOriginal,
  sobrenome: sobrenomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [estaEditando, setEstaEditando] = useState(false)

  useEffect(() => {
    if (
      nomeOriginal.length > 0 &&
      sobrenomeOriginal.length > 0 &&
      emailOriginal.length > 0 &&
      telefoneOriginal.length > 0
    ) {
      setNome(nomeOriginal)
      setSobrenome(sobrenomeOriginal)
      setEmail(emailOriginal)
      setTelefone(telefoneOriginal)
    }
  }, [nomeOriginal, sobrenomeOriginal, emailOriginal, telefoneOriginal])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setSobrenome(sobrenomeOriginal)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }

  return (
    <>
      <S.ContainerStatus>
        <S.Descricao
          value={nome}
          disabled={!estaEditando}
          onChange={(e) => setNome(e.target.value)}
        />
        <S.Descricao
          value={sobrenome}
          disabled={!estaEditando}
          onChange={(e) => setSobrenome(e.target.value)}
        />
        <S.Descricao
          value={telefone}
          disabled={!estaEditando}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <S.Descricao
          value={email}
          disabled={!estaEditando}
          onChange={(e) => setEmail(e.target.value)}
        />
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(editar({ nome, sobrenome, telefone, email, id }))
                setEstaEditando(false)
              }}
            >
              <abbr title="Salvar edição">
                <MdOutlineDownloadDone />
              </abbr>
            </S.BotaoSalvar>
            <S.BotaoDeletarECancelar onClick={cancelarEdicao}>
              <abbr title="Cancelar edição">
                <MdCancel />
              </abbr>
            </S.BotaoDeletarECancelar>
          </>
        ) : (
          <>
            <S.BotaoDeletarECancelar onClick={() => dispatch(remover(id))}>
              <abbr title="Deletar contato">
                <MdDeleteForever />
              </abbr>
            </S.BotaoDeletarECancelar>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              <abbr title="Editar contato">
                <FaUserEdit />
              </abbr>
            </S.BotaoEditar>
          </>
        )}
      </S.ContainerStatus>
    </>
  )
}

export default Contato

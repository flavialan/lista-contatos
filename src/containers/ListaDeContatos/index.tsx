import { MainContainer, Titulo } from '../../styles'
import * as S from './styles'
import Filtro, { letras } from '../../components/Filtro'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contato from '../../components/Contatos'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, letra } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens

    {
      letras.map((l) => {
        if (letra === 'todas') {
          if (termo !== undefined) {
            contatosFiltrados = contatosFiltrados.filter(
              (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
            )
          }
        } else if (letra === l) {
          contatosFiltrados = contatosFiltrados.filter((item) =>
            item.nome.startsWith(letra.toLocaleUpperCase())
          )
          if (termo !== undefined) {
            contatosFiltrados = contatosFiltrados.filter(
              (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
            )
          }
          return contatosFiltrados
        }
      })
    }

    return contatosFiltrados
  }

  const contatos = filtraContatos()

  return (
    <MainContainer>
      <div>
        <Titulo>Lista de Contatos</Titulo>
        <Filtro />
        <S.Legenda>
          <li>Nome</li>
          <li>Sobrenome</li>
          <li>Telefone</li>
          <li>E-mail</li>
          <li>Opções</li>
        </S.Legenda>
        <ul>
          {contatos
            .slice()
            .sort((a, b) => a.nome.localeCompare(b.nome))
            .map((c) => (
              <li key={c.nome}>
                <Contato
                  id={c.id}
                  nome={c.nome}
                  sobrenome={c.sobrenome}
                  telefone={c.telefone}
                  email={c.email}
                />
              </li>
            ))}
        </ul>
      </div>
    </MainContainer>
  )
}

export default ListaDeContatos

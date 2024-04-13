import { useNavigate } from 'react-router-dom'

import { Botao } from '../../styles'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      {mostrarFiltros ? (
        <S.Campo
          type="text"
          placeholder="Buscar contato"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
      ) : (
        <Botao onClick={() => navigate('/')}>
          Voltar para a lista de contatos
        </Botao>
      )}
    </S.Aside>
  )
}

export default BarraLateral

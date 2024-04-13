import { useDispatch } from 'react-redux'
import { FiltroContainer } from './styles'
import { alterarLetra } from '../../store/reducers/filtro'

export const letras = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'todas'
]

const Filtro = () => {
  const dispatch = useDispatch()

  const handleClick = (l: string) => {
    dispatch(
      alterarLetra({
        letra: l
      })
    )
  }

  return (
    <FiltroContainer>
      <ul>
        {letras.map((l, i) => (
          <li key={i}>
            <button onClick={() => handleClick(l)}>
              {l.toLocaleUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </FiltroContainer>
  )
}

export default Filtro

class Contatos {
  nome: string
  sobrenome: string
  email: string
  telefone: string
  id: number

  constructor(
    nome: string,
    sobrenome: string,
    email: string,
    telefone: string,
    id: number
  ) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Contatos

import './App.css'
import { Cabecalho, Conteudo, Rodape } from './components'

function App() {
  return (
    <>
      <Cabecalho/>
      <Conteudo>
        <h1>Titulo</h1>
        <p>Texto texto texto</p>
      </Conteudo>
      <footer>
        <Rodape authorName='Romanhole'/>
      </footer>
    </>
  )
}

export { App }

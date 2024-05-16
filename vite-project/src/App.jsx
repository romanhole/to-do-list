import './App.css'
import { Cabecalho, Conteudo, Rodape } from './components'
import { Inicial } from './pages'

function App() {
  return (
    <>
      <Cabecalho/>
      <Conteudo>
        <Inicial/>
      </Conteudo>
      <footer>
        <Rodape authorName='Romanhole'/>
      </footer>
    </>
  )
}

export { App }

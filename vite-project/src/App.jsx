import { BrowserRouter } from 'react-router-dom'

import { Cabecalho, Conteudo, Rodape } from './components'
import { Inicial } from './pages'

import { Router } from './Router'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Router />
      {/* <Cabecalho/>
      <Conteudo>
        <Inicial/>
      </Conteudo>
      <Rodape authorName='Romanhole'/> */}
    </BrowserRouter>
  )
}

export { App }

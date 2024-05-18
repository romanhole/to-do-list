import { Outlet } from 'react-router-dom'
import { Cabecalho, Conteudo, Rodape } from '../../components'

import { UseAppContext } from '../../hooks'

const LayoutPadrao = () => {
  const { criador } = UseAppContext()

  return (
    <>
      <Cabecalho/>
      <Conteudo>
          <Outlet />
      </Conteudo>
      <Rodape authorName={criador}/>
    </>
  )
}

export { LayoutPadrao }
import { Route, Routes } from 'react-router-dom'
import { Inicial, SobreNos } from './pages'
import { LayoutPadrao } from './layout'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<LayoutPadrao />}>
                <Route path='/' element={<Inicial />}/>
                <Route path='/sobre-nos' element={<SobreNos />}/>
            </Route>
        </Routes>
    )
}

export { Router }
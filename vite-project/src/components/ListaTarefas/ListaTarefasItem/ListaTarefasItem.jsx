import style from './ListaTarefasItem.module.css'

import { Botao, TIPO_BOTAO } from "../../../components"

const ListaTarefasItem = (props) => {
    const { nome } = props

    return (
        <li className={style.ListaTarefasItem}>
            {nome}
            <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO}/>
        </li>
    )
}

export {ListaTarefasItem }
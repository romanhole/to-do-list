import style from './ListaTarefasItem.module.css'

import { Botao, CampoTexto, TIPO_BOTAO } from "../../../components"
import { UseAppContext } from '../../../hooks'
import { useState } from 'react'

const ListaTarefasItem = (props) => {
    const { id, nome } = props

    const [estaEditando, setEstaEditando] = useState(false);

    const { removerTarefa, editarTarefa } = UseAppContext()


    return (
        <li className={style.ListaTarefasItem}>
            {estaEditando ? (
                <CampoTexto
                    defaultValue={nome}
                    onChange={event => editarTarefa(id, event.currentTarget.value)} 
                    onBlur={() => setEstaEditando(false)}
                    autoFocus
                />
            ) : (
                <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
            )}
            <Botao 
                texto="-" 
                tipo={TIPO_BOTAO.SECUNDARIO}
                onClick={() => removerTarefa(id)}
            />
        </li>
    )
}

export {ListaTarefasItem }
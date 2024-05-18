import { useState } from "react"
import { Botao, CampoTexto } from "../../components"

import style from './FormCriarTarefa.module.css'
import { UseAppContext } from "../../hooks"

const FormCriarTarefa = () => {
    const [nomeTarefa, setNomeTarefa] = useState('')

    const { adicionarTarefa } = UseAppContext()

    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value)
    }

    const submeterFormulario = (event) => {
        event.preventDefault()

        if(!nomeTarefa) {
            return
        }

        adicionarTarefa(nomeTarefa)

        setNomeTarefa('')
    }

    return (
        <form className={style.FormCriarTarefa} onSubmit={submeterFormulario}>
            <CampoTexto 
                value={nomeTarefa} 
                onChange={onChangeNomeTarefa}
            />
            <Botao texto="+"/>
        </form>
    )
}

export { FormCriarTarefa }
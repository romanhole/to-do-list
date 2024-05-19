import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const AppContext = createContext({})

export const AppContextProvider = (props) => {
    const { children } = props

    const [criador, setCriador] = useState('Romanhole')

    const [tarefas, setTarefas] = useState([])

    const [loadingCarregar, setLoadingCarregar] = useState(false)
    const [loadingCriar, setLoadingCriar] = useState(false)
    const [loadingEditar, setLoadingEditar] = useState(null)
    const [loadingDeletar, setLoadingDeletar] = useState(null)
    
    const carregarTarefas = async () => {
        setLoadingCarregar(true)

        const { data = [] } = await api.get('/tarefas')

        setTarefas([
            ...data
        ])

        setLoadingCarregar(false)
    }

    const adicionarTarefa = async (nomeTarefa) => {
        setLoadingCriar(true)

        const { data: tarefa } = await api.post('/tarefas', {
            nome: nomeTarefa
        })

        setTarefas(estadoAtual => {
            return [
                ...estadoAtual,
                tarefa
            ]
        })

        setLoadingCriar(false)
    }

    const removerTarefa = async (idTarefa) => {
        setLoadingDeletar(idTarefa)

        await api.delete(`tarefas/${idTarefa}`)

        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id != idTarefa)

            return [
                ...tarefasAtualizadas
            ]
        })

        setLoadingDeletar(null)
    }

    const editarTarefa = async (idTarefa, novoNomeTarefa) => {
        setLoadingEditar(idTarefa)

        const { data: tarefaAtualizada } = await api.put(`tarefas/${idTarefa}`, {
            nome: novoNomeTarefa
        })

        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.map(tarefa => tarefa.id == idTarefa ? tarefaAtualizada : tarefa)

            return [
                ...tarefasAtualizadas
            ]
        })

        setLoadingEditar(null)
    }

    useEffect(() => {
        carregarTarefas()
    }, [])

    return (
        <AppContext.Provider value={{
            criador,
            tarefas,
            adicionarTarefa,
            removerTarefa,
            editarTarefa,
            loadingCarregar,
            loadingCriar,
            loadingDeletar,
            loadingEditar
        }}>
            {children}
        </AppContext.Provider>
    )
}
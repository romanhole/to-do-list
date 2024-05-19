import { ListaTarefasItem } from "./ListaTarefasItem"

import { Loading } from "../../components";

import style from './ListaTarefas.module.css'

import { UseAppContext } from '../../hooks'

const ListaTarefas = () => {
    const { tarefas, loadingCarregar } = UseAppContext()

    return (
        <ul className={style.ListaTarefas}>
            {loadingCarregar && (
                <p>Carregando... <Loading /></p>
            )}

            {!loadingCarregar && !tarefas.length && (
                <p>Não há tarefas cadastradas...</p>
            )}
            
            {tarefas.map(item => (
                <ListaTarefasItem 
                    key={item.id} 
                    id={item.id} 
                    nome={item.nome} 
                />
            ))}
        </ul>
    )
}

export { ListaTarefas }
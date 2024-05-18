import { useContext } from "react"
import { AppContext } from "../contexts"

const UseAppContext = () => {
    const contexto = useContext(AppContext)

    return contexto
}

export { UseAppContext }
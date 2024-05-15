import style from './Rodape.module.css'

const Rodape = (props) => {
    const {authorName} = props
    const currentYear = (new Date()).getFullYear()

    return (
        <div className={style.Rodape}>
            <p>
                React Básico - {currentYear} - {authorName}
            </p>
        </div>
    )
}

export { Rodape }
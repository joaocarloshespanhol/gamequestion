import styles from '../styles/Resultado.module.css'
import Estatistica from '../components/Estatistica'
import Botao from '../components/Botao'
import { useRouter } from 'next/router'

export default function Resultado() {
    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)

    return (
        <div className={styles.resultado}>
            <h1>Final Result</h1>
            <div style={{ display: "flex" }}>
                <Estatistica texto="Questions" valor={total} />
                <Estatistica texto="Correct" valor={certas}
                    corFundo="#9CD2A4"/>
                <Estatistica texto="Percentage" valor={`${percentual}%`}
                    corFundo="#DE6A33" />
            </div>
            <Botao href="/" texto="Try Again"/>
        </div>
    )
}
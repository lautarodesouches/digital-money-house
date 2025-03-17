import { Footer, Header } from '@/components'
import styles from './styles.module.css'

export default function Create() {
    return (
        <>
            <Header background="secondary" showNav={false} />
            <main className={styles.main}></main>
            <Footer />
        </>
    )
}

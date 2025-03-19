import styles from './page.module.css'
import { Footer, Header } from '@/components'

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.top}>
                    <h1 className={styles.top__title}>
                        De ahora en adelante, hacés más con tu dinero
                    </h1>
                    <hr className={styles.top__hr} />
                    <h2 className={styles.top__subtitle}>
                        Tu nueva{' '}
                        <strong className={styles.top__light}>
                            billetera virtual
                        </strong>
                    </h2>
                </section>
                <section className={styles.content}>
                    <article className={styles.content__art}>
                        <h3 className={styles.content__h3}>Transferí dinero</h3>
                        <hr className={styles.content__hr} />
                        <p className={styles.content__p}>
                            Desde Digital Money House vas a poder transferir
                            dinero a otras cuentas, asi como también recibir
                            transferencias y nuclear tu capital en nuestra
                            billetera virtual.
                        </p>
                    </article>
                    <article className={styles.content__art}>
                        <h3 className={styles.content__h3}>
                            Pago de servicios
                        </h3>
                        <hr className={styles.content__hr} />
                        <p className={styles.content__p}>
                            Pagá mensualmente los servicios en 3 simples clicks.
                            Facil, rápido y conveniente. Olvidate de las
                            facturas en papel.
                        </p>
                    </article>
                    <aside className={styles.background}></aside>
                </section>
            </main>
            <Footer />
        </>
    )
}
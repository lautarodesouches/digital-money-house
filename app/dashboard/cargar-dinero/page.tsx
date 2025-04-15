import Link from 'next/link'
import styles from './page.module.css'
import { ROUTES } from '@/routes'
import { ArrowIcon, CardIcon, UserIcon } from '@/components/Icons'

export default function CargarDinero() {
    return (
        <>
            <section className={styles.container}>
                <Link href={ROUTES.CARGAR_DINERO_TRANSFERENCIA}>
                    <article className={styles.article}>
                        <div>
                            <UserIcon styles={styles.article__icon} />
                        </div>
                        <div>
                            <h2 className={styles.article__title}>
                                Transferencia bancaria
                            </h2>
                        </div>
                        <div>
                            <ArrowIcon styles={styles.article__icon} />
                        </div>
                    </article>
                </Link>
                <Link href={ROUTES.CARGAR_DINERO_TARJETA}>
                    <article className={styles.article}>
                        <div>
                            <CardIcon styles={styles.article__icon} />
                        </div>
                        <div>
                            <h2 className={styles.article__title}>
                                Seleccionar tarjeta
                            </h2>
                        </div>
                        <div>
                            <ArrowIcon styles={styles.article__icon} />
                        </div>
                    </article>
                </Link>
            </section>
        </>
    )
}

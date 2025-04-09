import Link from 'next/link'
import styles from './page.module.css'
import { ROUTES } from '@/routes'

export default function CargarDinero() {
    return (
        <>
            <section className={styles.container}>
                <Link href={ROUTES.CARGAR_DINERO_TRANSFERENCIA}>
                    <article className={styles.article}>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -960 960 960"
                                className={styles.article__icon}
                            >
                                <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className={styles.article__title}>
                                Transferencia bancaria
                            </h2>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -960 960 960"
                                className={styles.article__icon}
                            >
                                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                            </svg>
                        </div>
                    </article>
                </Link>
                <Link href={ROUTES.CARGAR_DINERO_TARJETA}>
                    <article className={styles.article}>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -960 960 960"
                                className={styles.article__icon}
                            >
                                <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className={styles.article__title}>
                                Seleccionar tarjeta
                            </h2>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -960 960 960"
                                className={styles.article__icon}
                            >
                                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                            </svg>
                        </div>
                    </article>
                </Link>
            </section>
        </>
    )
}

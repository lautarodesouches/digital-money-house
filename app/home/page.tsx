'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { Footer, Menu } from '@/components'
import { ROUTES } from '@/routes'

export default function Home() {
    const activity = [
        {
            title: 'Transferiste a Rodrigo',
            amount: '-1265,57',
            date: 'Sábado',
        },
        {
            title: 'Transfereriste a Consorcio',
            amount: '-1265,57',
            date: 'Viernes',
        },
        {
            title: 'Ingresaste dinero',
            amount: '1265,57',
            date: 'Viernes',
        },
        {
            title: 'Te transfirieron dinero',
            amount: '1265,57',
            date: 'Lunes',
        },
    ]

    return (
        <>
            <Menu name="Manuel Brito" />
            <main className={styles.main}>
                <section className={styles.top} />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className={styles.top__arrow}
                >
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
                <Link className={styles.top__text} href={ROUTES.INICIO}>
                    Inicio
                </Link>
                <section />
                <article className={styles.card}>
                    <div className={styles.card__div}>
                        <Link
                            className={styles.card__link}
                            href={ROUTES.INICIO}
                        >
                            Ver tarjetas
                        </Link>
                        <Link
                            className={styles.card__link}
                            href={ROUTES.INICIO}
                        >
                            Ver CVU
                        </Link>
                    </div>
                    <div className={styles.card__div}>
                        <h3 className={styles.card__text}>Dinero disponible</h3>
                    </div>
                    <div className={styles.card__div}>
                        <span className={styles.card__number}>
                            $ 6.890.534,17
                        </span>
                    </div>
                </article>
                <div className={styles.buttons}>
                    <button className={styles.buttons__btn}>
                        <Link href={ROUTES.INGRESO}>Ingresar dinero</Link>
                    </button>
                    <button className={styles.buttons__btn}>
                        <Link href={ROUTES.INGRESO}>Pago de servicios</Link>
                    </button>
                </div>
                <div className={styles.search}>
                    <input
                        className={styles.search__input}
                        type="text"
                        placeholder="Buscar en tu actividad"
                    />
                </div>
                <section className={styles.activity}>
                    <h2 className={styles.activity__title}>Tu actividad</h2>
                    <div className={styles.activity__content}>
                        {activity.map((activity, index) => (
                            <article key={index}></article>
                        ))}
                    </div>
                    <div className={styles.activity__bottom}>
                        <Link
                            href={ROUTES.CREAR_CUENTA}
                            className={styles.activity__link}
                        >
                            Ver toda tu actividad
                        </Link>
                        <Link
                            href={ROUTES.CREAR_CUENTA}
                            className={styles.activity__link}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -960 960 960"
                                className={styles.activity__svg}
                            >
                                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                            </svg>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

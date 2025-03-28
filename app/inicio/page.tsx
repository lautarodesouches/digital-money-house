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
        <div className={styles.container}>
            <Menu name="Manuel Brito" />
            <main className={styles.main}>
                <section className={styles.top}>
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
                </section>
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
                    <Link
                        href={ROUTES.INICIAR_SESION}
                        className={styles.buttons__link}
                    >
                        <button className={styles.buttons__btn}>
                            Ingresar dinero
                        </button>
                    </Link>
                    <Link
                        href={ROUTES.INICIAR_SESION}
                        className={styles.buttons__link}
                    >
                        <button className={styles.buttons__btn}>
                            Pago de servicios
                        </button>
                    </Link>
                </div>
                <div className={styles.search}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        className={styles.search__icon}
                    >
                        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                    </svg>
                    <input
                        className={styles.search__input}
                        type="text"
                        placeholder="Buscar en tu actividad"
                    />
                </div>
                <section className={styles.activity}>
                    <h2 className={styles.activity__title}>Tu actividad</h2>
                    <hr className={styles.activity__line} />
                    <div className={styles.activity__content}>
                        {activity.map((activity, index) => (
                            <article className={styles.active} key={index}>
                                <div className={styles.active__start}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 -960 960 960"
                                        className={styles.active__circle}
                                    >
                                        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0 0q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Z" />
                                    </svg>
                                    <p className={styles.active__text}>
                                        {activity.title}
                                    </p>
                                </div>
                                <div className={styles.active__end}>
                                    <p className={styles.active__top}>
                                        {parseInt(activity.amount) < 0
                                            ? '-$'
                                            : '$'}
                                        {Math.abs(parseInt(activity.amount))}
                                    </p>
                                    <p className={styles.active__bottom}>
                                        {activity.date}
                                    </p>
                                </div>
                            </article>
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
        </div>
    )
}

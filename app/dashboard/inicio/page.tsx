import Link from 'next/link'
import styles from './page.module.css'
import { List } from '@/components'
import { ROUTES } from '@/routes'
import { getActivity } from '@/services/getActivity'
import { getAccount } from '@/services/getAccount'
import { getToken } from '@/services/getToken'
import { redirect } from 'next/navigation'
import { getWeekday } from '@/utils/getWeekday'
import { formatNumber } from '@/utils/formatNumber'

export default async function Home() {
    const token = await getToken()

    const account = await getAccount(token)

    if (!account) return redirect(ROUTES.INICIAR_SESION)

    const activity = await getActivity(token, account)
    
    return (
        <>
            <section className={styles.top}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className={styles.top__arrow}
                >
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
                <p className={styles.top__text}>Inicio</p>
            </section>
            <article className={styles.card}>
                <div className={styles.card__div}>
                    <Link className={styles.card__link} href={ROUTES.TARJETAS}>
                        Ver tarjetas
                    </Link>
                    <Link className={styles.card__link} href={ROUTES.PERFIL}>
                        Ver CVU
                    </Link>
                </div>
                <div className={styles.card__div}>
                    <h3 className={styles.card__text}>Dinero disponible</h3>
                </div>
                <div className={styles.card__div}>
                    <span className={styles.card__number}>
                        $ {formatNumber(account.available_amount)}
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
            <List
                title="Tu actividad"
                content={activity}
                center={activity => activity.description}
                right={activity => (
                    <>
                        <p className={styles.active__top}>
                            {activity.amount < 0 ? '-$' : '$'}
                            {Math.abs(activity.amount)}
                        </p>
                        <p className={styles.active__bottom}>
                            {getWeekday(activity.dated)}
                        </p>
                    </>
                )}
                bottom={
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
                }
            />
        </>
    )
}

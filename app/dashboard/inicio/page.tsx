import Link from 'next/link'
import styles from './page.module.css'
import { List, Search } from '@/components'
import { ROUTES } from '@/routes'
import { getAllActivity } from '@/services/getAllActivity'
import { getAccount } from '@/services/getAccount'
import { getToken } from '@/services/getToken'
import { redirect } from 'next/navigation'
import { getWeekday } from '@/utils/getWeekday'
import { formatNumber } from '@/utils/formatNumber'

export default async function Home() {
    const token = await getToken()

    const account = await getAccount(token)

    if (!account) return redirect(ROUTES.INICIAR_SESION)

    const activity = await getAllActivity(token, account)

    activity.length = activity.length > 10 ? 10 : activity.length

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
                    href={ROUTES.CARGAR_DINERO}
                    className={styles.buttons__link}
                >
                    <button className={styles.buttons__btn}>
                        Ingresar dinero
                    </button>
                </Link>
                <Link
                    href={ROUTES.PAGAR_SERVICIOS}
                    className={styles.buttons__link}
                >
                    <button className={styles.buttons__btn}>
                        Pago de servicios
                    </button>
                </Link>
            </div>
            <Search />
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
                            href={ROUTES.ACTIVIDAD}
                            className={styles.activity__link}
                        >
                            Ver toda tu actividad
                        </Link>
                        <Link
                            href={ROUTES.ACTIVIDAD}
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

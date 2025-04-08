import styles from './page.module.css'
import { ROUTES } from '@/routes'
import { getAccount } from '@/services/getAccount'
import { getToken } from '@/services/getToken'
import { getTransaciton } from '@/services/getTransaction'
import Link from 'next/link'
import { redirect } from 'next/navigation'

type Params = Promise<{ activityId: string }>

export default async function Activity(props: { params: Params }) {
    // Token, account info
    const token = await getToken()
    const account = await getAccount(token)
    if (!account) return redirect(ROUTES.INICIAR_SESION)

    // Params
    const params = await props.params

    const activityId = params.activityId

    // Fetch
    const activity = await getTransaciton(token, account.id, activityId)

    const formatPrettyDate = (dateString: string): string => {
        const date = new Date(dateString)
    
        const day = date.getDate()
        const month = date.toLocaleString('es-AR', { month: 'long' })
        const year = date.getFullYear()
    
        const hours = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')
    
        return `Creada el ${day} de ${month} ${year} a ${hours}:${minutes} hs.`
    }

    if (activity === null) return redirect(ROUTES.ACTIVIDAD)

    console.log({ activity })

    return (
        <div className={styles.activity}>
            <article className={styles.activity__art}>
                <div className={styles.activity__top}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        className={styles.activity__svg}
                    >
                        <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                    <h2 className={styles.activity__title}>Aprobada</h2>
                </div>
                <hr className={styles.activity__hr} />
                <div className={styles.activity__date}>
                    <p>{formatPrettyDate(activity.dated)}</p>
                </div>
                <div className={styles.activity__amount}></div>
                <div className={styles.activity__info}></div>
                <div className={styles.activity__number}></div>
            </article>
            <button className={styles.button}>Descargar comprobante</button>
            <Link href={ROUTES.INICIO}>
                <button className={styles.button}>Ir al inicio</button>
            </Link>
        </div>
    )
}

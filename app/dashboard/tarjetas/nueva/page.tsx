import Content from './content'
import styles from './page.module.css'
import { getToken } from '@/services/getToken'
import { getAccount } from '@/services/getAccount'
import { redirect } from 'next/navigation'
import { ROUTES } from '@/routes'

export default async function NewCard() {
    const token = await getToken()

    const account = await getAccount(token)

    if (!account) return redirect(ROUTES.INICIAR_SESION)

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
                <p className={styles.top__text}>Tarjetas</p>
            </section>
            <Content />
        </>
    )
}

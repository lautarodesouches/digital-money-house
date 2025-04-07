import styles from './page.module.css'
import { getUser } from '@/services/getUser'
import { getAccount } from '@/services/getAccount'
import { getToken } from '@/services/getToken'
import { ROUTES } from '@/routes'
import { redirect } from 'next/navigation'
import CvuAlias from './cvuAlias'
import ProfileInfo from './profileInfo'

export default async function Perfil() {
    const token = await getToken()

    const account = await getAccount(token)

    if (!account) return redirect(ROUTES.INICIAR_SESION)

    const user = await getUser(token, account.user_id)

    if (!user) return redirect(ROUTES.INICIAR_SESION)

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
                <p className={styles.top__text}>Perfil</p>
            </section>
            <ProfileInfo token={token} userId={account.user_id} user={user} />
            <section className={styles.button}>
                <button className={styles.button__btn}>
                    <span>Gestioná los medios de pago</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        className={styles.top__arrow}
                    >
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                    </svg>
                </button>
            </section>
            <CvuAlias cvu={account.cvu} alias={account.alias} />
        </>
    )
}

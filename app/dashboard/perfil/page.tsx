import styles from './page.module.css'
import { getUser } from '@/services/getUser'
import { getAccount } from '@/services/getAccount'
import { getToken } from '@/services/getToken'
import { ROUTES } from '@/routes'
import { redirect } from 'next/navigation'
import ProfileInfo from './profileInfo'
import { ButtonPrimary, CvuAlias, Title } from '@/components'
import Link from 'next/link'
import { ArrowIcon } from '@/components/Icons'

export default async function Perfil() {
    const token = await getToken()

    const account = await getAccount(token)

    if (!account) return redirect(ROUTES.INICIAR_SESION)

    const user = await getUser(token, account.user_id)

    if (!user) return redirect(ROUTES.INICIAR_SESION)

    return (
        <>
            <Title>Perfil</Title>
            <ProfileInfo token={token} userId={account.user_id} user={user} />
            <section className={styles.button}>
                <Link href={ROUTES.TARJETAS}>
                    <ButtonPrimary>
                        <span>Gestioná los medios de pago</span>
                        <ArrowIcon styles={styles.button__arrow} />
                    </ButtonPrimary>
                </Link>
            </section>
            <CvuAlias cvu={account.cvu} alias={account.alias} />
        </>
    )
}

import { Footer, Menu } from '@/components'
import styles from './page.module.css'
import { getToken } from '@/services/getToken'
import { getAccount } from '@/services/getAccount'
import { getUser } from '@/services/getUser'
import { ROUTES } from '@/routes'
import { redirect } from 'next/navigation'

interface Props {
    children: React.ReactNode
}

export default async function Layout({ children }: Props) {
    const token = await getToken()

    const account = await getAccount(token)

    if (!account) return redirect(ROUTES.INICIAR_SESION)

    const user = await getUser(token, account.user_id)

    if (!user) return redirect(ROUTES.INICIAR_SESION)

    return (
        <div className={styles.container}>
            <Menu user={user} />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    )
}

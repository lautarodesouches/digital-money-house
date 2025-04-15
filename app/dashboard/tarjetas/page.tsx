import styles from './page.module.css'
import { getToken } from '@/services/getToken'
import { getAccount } from '@/services/getAccount'
import { ROUTES } from '@/routes'
import { redirect } from 'next/navigation'
import Cards from './cards'
import Link from 'next/link'
import { Title } from '@/components'
import { ArrowIcon, PlusIcon } from '@/components/Icons'

export default async function Tarjetas() {
    const token = await getToken()

    const account = await getAccount(token)

    if (!account) return redirect(ROUTES.INICIAR_SESION)

    return (
        <>
            <Title>Tarjetas</Title>
            <section className={styles.add}>
                <h2 className={styles.add__title}>
                    Agregá tu tarjeta de débito o crédito
                </h2>
                <Link className={styles.add__div} href={ROUTES.TARJETAS__NUEVA}>
                    <div className={styles.add__left}>
                        <PlusIcon styles={styles.add__svg} />
                        <span className={styles.add__text}>Nueva tarjeta</span>
                    </div>
                    <ArrowIcon styles={styles.add__svg} />
                </Link>
            </section>
            <Cards token={token} account={account} />
        </>
    )
}

import { Footer, Header } from '@/components'
import styles from './page.module.css'
import { ROUTES } from '@/routes'
import Link from 'next/link'

interface Props {
    children: React.ReactNode
}

export default async function Layout({ children }: Props) {
    return (
        <>
            <Header background="secondary">
                <div className={styles.header__div}>
                    <Link
                        className={styles.header__link}
                        href={ROUTES.INICIAR_SESION}
                    >
                        <button className={styles.header__login}>
                            Iniciar sesión
                        </button>
                    </Link>
                </div>
            </Header>
            {children}
            <Footer />
        </>
    )
}

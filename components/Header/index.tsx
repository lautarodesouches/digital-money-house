import { ROUTES } from '@/routes'
import styles from './styles.module.css'
import Link from 'next/link'
import ButtonPrimary from '../ButtonPrimary'
import { DmhIcon } from '../Icons'

interface Props {
    background?: 'primary' | 'secondary'
    showNav?: boolean
}

export default function Header({
    background = 'primary',
    showNav = true,
}: Props) {
    return (
        <header
            className={styles.header}
            style={{
                background: `var(--${background})`,
            }}
        >
            <div className={styles.header__div}>
                <Link className={styles.header__link} href={ROUTES.LANDING}>
                    <DmhIcon
                        styles={styles.header__logo}
                        fillColor={
                            background === 'primary' ? 'secondary' : 'primary'
                        }
                    />
                </Link>
            </div>
            <nav
                className={styles.header__nav}
                style={{ visibility: showNav ? 'visible' : 'hidden' }}
            >
                <div className={styles.header__div}>
                    <Link
                        className={styles.header__link}
                        href={ROUTES.INICIAR_SESION}
                    >
                        <button className={styles.header__login}>
                            Ingresar
                        </button>
                    </Link>
                </div>
                <div className={styles.header__div}>
                    <Link
                        className={styles.header__link}
                        href={ROUTES.CREAR_CUENTA}
                    >
                        <ButtonPrimary>Crear cuenta</ButtonPrimary>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

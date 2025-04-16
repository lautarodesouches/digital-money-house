import { ROUTES } from '@/routes'
import styles from './styles.module.css'
import Link from 'next/link'
import { DmhIcon } from '../Icons'
import { ReactNode } from 'react'

interface Props {
    background?: 'primary' | 'secondary'
    children?: ReactNode
}

export default function Header({ background = 'primary', children }: Props) {
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
            <nav className={styles.header__nav}>{children}</nav>
        </header>
    )
}

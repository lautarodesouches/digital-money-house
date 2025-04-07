'use client'
import { useState } from 'react'
import SideBar from './sidebar'
import styles from './styles.module.css'
import Logo from '../Logo'
import { UserType } from '@/interfaces'
import Link from 'next/link'
import { ROUTES } from '@/routes'

interface Props {
    user: UserType
}

export default function Menu({ user }: Props) {
    const [isMenuActive, setIsMenuActive] = useState(false)

    const name = `${user.firstname} ${user.lastname}`

    const initials = `${user.firstname.charAt(0).toUpperCase()}${user.lastname
        .charAt(0)
        .toUpperCase()}`

    const handleMenuClick = () => {
        setIsMenuActive(prevState => !prevState)
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__div}>
                    <Link href={ROUTES.INICIO}>
                        <Logo style={styles.header__logo} />
                    </Link>
                </div>
                <div className={styles.header__div}>
                    <div className={styles.header__box}>
                        <span className={styles.header__name}>{initials}</span>
                    </div>
                    <Link
                        href={ROUTES.INICIO}
                        className={styles.header__grettings}
                    >
                        Hola, {name}
                    </Link>
                    <div className={styles.header__container}>
                        <svg
                            viewBox="0 0 33 26"
                            className={styles.header__svg}
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleMenuClick}
                        >
                            <line
                                x1="2"
                                y1="2"
                                x2="31"
                                y2="2"
                                stroke="#C1FD35"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                            <line
                                x1="2"
                                y1="13"
                                x2="31"
                                y2="13"
                                stroke="#C1FD35"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                            <line
                                x1="2"
                                y1="24"
                                x2="31"
                                y2="24"
                                stroke="#C1FD35"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>
            </header>
            <SideBar
                name={name}
                isMenuActive={isMenuActive}
                handleMenuClick={handleMenuClick}
            />
        </>
    )
}

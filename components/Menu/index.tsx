'use client'
import { API_URL } from '@/constants'
import { AccountType, UserType } from '@/interfaces'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { useEffect, useState } from 'react'
import SideBar from './sidebar'
import styles from './styles.module.css'
import Logo from '../Logo'

interface Props {
    token: RequestCookie | undefined
}

export default function Menu({ token }: Props) {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [name, setName] = useState('')
    const [initials, setInitials] = useState('')

    const getAccountData = async (token: RequestCookie | undefined) => {
        const response_account = await fetch(`${API_URL}/api/account`, {
            method: 'GET',
            headers: {
                Authorization: token?.value || '',
                accept: 'application/json',
            },
        })

        const account: AccountType = await response_account.json()

        const response_data = await fetch(
            `${API_URL}/api/users/${account.user_id}`,
            {
                method: 'GET',
                headers: {
                    Authorization: token?.value || '',
                    accept: 'application/json',
                },
            }
        )

        const dataUser: UserType = await response_data.json()

        setName(`${dataUser.firstname} ${dataUser.lastname}`)
    }

    const handleMenuClick = () => {
        setIsMenuActive(prevState => !prevState)
    }

    useEffect(() => {
        getAccountData(token)
    }, [token])

    const getInitials = (name: string) => {
        const initials = name
            ? name
                  .split(' ') // Divide el nombre en palabras
                  .map(word => word[0].toUpperCase()) // Toma la primera letra de cada palabra y la pone en mayúscula
                  .join('') // Une las iniciales en una sola cadena
            : ''

        setInitials(initials)
    }

    useEffect(() => {
        getInitials(name)
    }, [name])

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__div}>
                    <Logo style={styles.header__logo} />
                </div>
                <div className={styles.header__div}>
                    <div className={styles.header__box}>
                        <span className={styles.header__name}>{initials}</span>
                    </div>
                    <div className={styles.header__grettings}>Hola, {name}</div>
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

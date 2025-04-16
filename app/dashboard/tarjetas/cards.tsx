'use client'
import styles from './page.module.css'
import { List } from '@/components'
import { API_URL } from '@/constants'
import { AccountType, CardType } from '@/interfaces'
import { useEffect, useState } from 'react'

interface Props {
    token: string
    account: AccountType
}

export default function Cards({ token, account }: Props) {
    const [cards, setCards] = useState<CardType[]>([])
    const [loading, setLoading] = useState(true)

    const getCards = async (token: string, account: AccountType) => {
        if (!token) {
            console.error('No hay token disponible')
            return []
        }

        setLoading(true)

        const response = await fetch(
            `${API_URL}/api/accounts/${account.id}/cards`,
            {
                method: 'GET',
                headers: {
                    Authorization: token,
                    accept: 'application/json',
                },
            }
        )

        if (!response.ok) {
            console.error('Error al obtener la cuenta:', response.status)
            return []
        }

        const cards = await response.json()

        setCards(cards)

        setLoading(false)
    }

    const handleDeleteClick = async (cardId: number) => {
        const response = await fetch(
            `${API_URL}/api/accounts/${account.id}/cards/${cardId}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`,
                },
            }
        )

        if (response.ok) getCards(token, account)
    }

    useEffect(() => {
        getCards(token, account)
    }, [token, account])

    return (
        <List
            loading={loading}
            title="Tus tarjetas"
            content={cards}
            center={card =>
                `Terminada en ${card.number_id.toString().slice(-4)}`
            }
            right={card => (
                <button
                    className={styles.cards__button}
                    onClick={() => handleDeleteClick(card.id)}
                >
                    Eliminar
                </button>
            )}
        />
    )
}

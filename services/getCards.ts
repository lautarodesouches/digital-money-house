import { AccountType, CardType } from '@/interfaces'
import { API_URL } from '@/constants'

export async function getCards(token: string, account: AccountType): Promise<CardType[]> {

    if (!token) {
        console.error('No hay token disponible')
        return []
    }

    const response = await fetch(`${API_URL}/api/accounts/${account.id}/cards`, {
        method: 'GET',
        headers: {
            Authorization: token,
            accept: 'application/json',
        },
    })

    if (!response.ok) {
        console.error('Error al obtener la cuenta:', response.status)
        return []
    }

    return response.json()
}

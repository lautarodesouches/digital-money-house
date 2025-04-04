import { AccountType } from '@/interfaces'
import { API_URL } from '@/constants'

export async function getAccount(token: string): Promise<AccountType | null> {

    if (!token) {
        console.error('No hay token disponible')
        return null
    }

    const response = await fetch(`${API_URL}/api/account`, {
        method: 'GET',
        headers: {
            Authorization: token,
            accept: 'application/json',
        },
    })

    if (!response.ok) {
        console.error('Error al obtener la cuenta:', response.status)
        return null
    }

    return response.json()
}

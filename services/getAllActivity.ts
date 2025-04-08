import { AccountType, TransferType } from '@/interfaces'
import { API_URL } from '@/constants'

export async function getAllActivity(token: string, account: AccountType): Promise<TransferType[]> {

    if (!token) {
        console.error('No hay token disponible')
        return []
    }

    const response = await fetch(`${API_URL}/api/accounts/${account.id}/activity`, {
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

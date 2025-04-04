import { AccountType, TransferType } from '@/interfaces'
import { API_URL } from '@/constants'

export async function getTransferences(token: string, account: AccountType): Promise<Array<TransferType> | null> {

    if (!token) {
        console.error('No hay token disponible')
        return null
    }

    const response = await fetch(`${API_URL}/api/accounts/${account.id}/transferences`, {
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

import { API_URL } from '@/constants'
import { TransferType } from '@/interfaces'

export async function getTransaciton(
    token: string,
    accountId: number,
    transactionId: string
): Promise<TransferType | null> {
    if (!token) {
        console.error('No hay token disponible')
        return null
    }

    const response = await fetch(
        `${API_URL}/api/accounts/${accountId}/transactions/${transactionId}`,
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
        return null
    }

    return response.json()
}

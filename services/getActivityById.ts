import { TransferType } from '@/interfaces'
import { API_URL } from '@/constants'

export async function getActivityById(
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

    const activity: TransferType = await response.json()

    if (!activity) {
        console.error('No se encontró la actividad con el ID proporcionado')
        return null
    }

    return activity
}

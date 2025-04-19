'use server'
import { API_URL } from '@/constants'
import { getToken } from './getToken'

interface Data {
    amount: number
    dated: string
    description: string
}

export default async function createTransaction(accountId: string, data: Data) {
    const token = await getToken()

    const body = JSON.stringify(data)

    const response = await fetch(
        `${API_URL}/api/accounts/${accountId}/transactions`,
        {
            method: 'POST',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
            body,
        }
    )

    if (!response.ok) console.error('Error creating deposit')

    return response.json()
}

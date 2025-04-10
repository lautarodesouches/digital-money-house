'use server'
import { API_URL } from '@/constants'
import { getAccount } from './getAccount'
import { getToken } from './getToken'

interface DepostitData {
    amount: number
    destination: string
    origin: string
    dated: string
}

export default async function createDeposit(data: DepostitData) {
    const token = await getToken()

    const account = await getAccount(token)

    const body = JSON.stringify(data)

    if (!account) throw new Error('Account is null')

    const response = await fetch(
        `${API_URL}/api/accounts/${account.id}/deposits`,
        {
            method: 'POST',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
            body,
        }
    )

    if (!response.ok) {
        const data = await response.json()
        console.error('Error creating deposit:', data)
    }

    return response.json()
}

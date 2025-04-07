'use server'
import { API_URL } from '@/constants'
import { getAccount } from './getAccount'
import { getToken } from './getToken'

export async function createCard(formData: FormData) {
    const token = await getToken()

    const account = await getAccount(token)

    const body = JSON.stringify({
        number_id: Number(formData.get('number_id')),
        first_last_name: formData.get('first_last_name'),
        expiration_date: formData.get('expiration_date'),
        cod: Number(formData.get('cod')),
    })

    if (!account) throw new Error('Account is null')

    const response = await fetch(
        `${API_URL}/api/accounts/${account.id}/cards`,
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
        console.error('Error creating card:', data)
    }

    return response.ok
}

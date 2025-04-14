import { API_URL } from '@/constants'
import { ServiceType } from '@/interfaces'

export async function getServices(): Promise<ServiceType[]> {
    // com/api/service not working
    const response = await fetch(`${API_URL}/service`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    })

    if (!response.ok) {
        console.error('Error al obtener la cuenta:', response.status)
        return []
    }

    return response.json()
}

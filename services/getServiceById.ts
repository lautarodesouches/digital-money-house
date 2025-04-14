import { API_URL } from '@/constants'
import { ServiceType } from '@/interfaces'

export async function getServiceById(id: string): Promise<ServiceType | null> {
    // com/api/service not working
    const response = await fetch(`${API_URL}/service/${id}`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    })

    if (!response.ok) {
        console.error('Error al obtener la cuenta:', response.status)
        return null
    }

    return response.json()
}

import { UserType } from '@/interfaces'
import { API_URL } from '@/constants'

export async function getUser(token: string, userId: number): Promise<UserType | null> {
    
    if (!token) {
        console.error('No hay token disponible')
        return null
    }

    const response = await fetch(`${API_URL}/api/users/${userId}`, {
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

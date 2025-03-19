'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { API_URL } from '../../constants'
import { ROUTES } from '../../routes'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(prevState: any, formData: FormData) {
    const cookieStore = await cookies()

    try {
        // Si el email fue validado va a estar en cookie
        const email =
            formData.get('email')?.toString().trim() ||
            cookieStore.get('email')?.value ||
            ''

        // Se asigna unset para verificar email ya que no hay endpoint
        const password = formData.get('password')?.toString() || 'unset'

        const body = JSON.stringify({ email, password })

        const response = await fetch(`${API_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        })

        const json = await response.json()

        if (!response.ok) {
            const errorMessages: Record<string, string> = {
                'user not found': 'Usuario inexistente. Vuelve a intentarlo.',
                'invalid credentials':
                    'Contraseña incorrecta. Vuelve a intentarlo.',
            }

            // Guardar email solo si existe
            if (json.error === 'invalid credentials')
                cookieStore.set('email', email, { httpOnly: true })

            return {
                error:
                    errorMessages[json.error] ??
                    'Error al iniciar sesión. Inténtalo de nuevo.',
            }
        }

        cookieStore.set('token', json.token, { httpOnly: true })
    } catch (error) {
        console.error('Error en login:', error)
        return {
            error: 'Ocurrió un problema al iniciar sesión. Inténtalo más tarde.',
        }
    }

    return redirect(ROUTES.inicio)
}

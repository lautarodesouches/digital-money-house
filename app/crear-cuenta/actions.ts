import { API_URL } from '../constants'
import { redirect } from 'next/navigation'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function register(prevState: any, formData: FormData) {
    const firstname = getFormData('firstname', formData)
    const lastname = getFormData('lastname', formData)
    const dni = parseInt(getFormData('dni', formData)?.replaceAll('.', '') || '0')
    const email = getFormData('email', formData)
    const password = getFormData('password', formData)
    const phone = getFormData('phone', formData)

    const body = JSON.stringify({
        dni,
        email,
        firstname,
        lastname,
        password,
        phone,
    })

    console.log({ body })

    const res = await fetch(`${API_URL}/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    })

    const data = await res.json()

    console.log({ data })

    return redirect('/ingreso')
}

function getFormData(name: string, formData: FormData) {
    return formData.get(name)?.toString().trim()
}

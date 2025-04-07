'use client'
import { UserType } from '@/interfaces'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { API_URL } from '@/constants'

interface Props {
    token: string
    userId: number
    user: UserType
}

export default function ProfileInfo({ token, userId, user }: Props) {

    const [localUser, setLocalUser] = useState<UserType>(user)

    const [loadingField, setLoadingField] = useState<string | null>(null)

    const sendChanges = async (updatedUser: UserType) => {
        const name = updatedUser.firstname.split(' ')

        const body = JSON.stringify({
            dni: updatedUser.dni,
            email: updatedUser.email,
            firstname: name[0],
            lastname: name[1],
            password: updatedUser.password,
            phone: updatedUser.phone,
        })

        try {
            const res = await fetch(`${API_URL}/api/users/${userId}`, {
                method: 'PATCH',
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json',
                },
                body,
            })

            if (!res.ok) throw new Error('Error al actualizar')

        } catch (err) {
            console.error(err)
        } finally {
            setLoadingField(null)
        }
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setLoadingField(name)

        const updatedUser = {
            ...localUser,
            [name]: value,
        }

        setLocalUser(updatedUser)

        sendChanges(updatedUser)
    }

    useEffect(() => {
        setLocalUser(user)
    }, [user])

    return (
        <section className={styles.info}>
            <h2 className={styles.info__title}>Tus datos</h2>
            {[
                {
                    id: 'email',
                    label: 'Email',
                    type: 'email',
                    value: localUser.email,
                    readOnly: true,
                },
                {
                    id: 'firstname',
                    label: 'Nombre y apellido',
                    type: 'text',
                    hasIcon: true,
                    value: `${localUser.firstname} ${localUser.lastname}`,
                },
                {
                    id: 'dni',
                    label: 'DNI',
                    type: 'number',
                    hasIcon: true,
                    value: localUser.dni,
                    readOnly: true,
                },
                {
                    id: 'phone',
                    label: 'Teléfono',
                    type: 'tel',
                    hasIcon: true,
                    value: localUser.phone,
                },
                {
                    id: 'password',
                    label: 'Contraseña',
                    type: 'password',
                    hasIcon: true,
                    value: '1234567890',
                },
            ].map(({ id, label, type, hasIcon, value, readOnly }) => (
                <div key={id} className={styles.info__group}>
                    <label className={styles.info__label} htmlFor={id}>
                        {label}
                    </label>
                    <input
                        className={styles.info__input}
                        id={id}
                        name={id}
                        type={type}
                        defaultValue={value}
                        onBlur={handleChange}
                        disabled={loadingField === id}
                        readOnly={readOnly}
                    />
                    {hasIcon && (
                        <svg
                            className={styles.info__svg}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                        >
                            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                        </svg>
                    )}
                </div>
            ))}
        </section>
    )
}

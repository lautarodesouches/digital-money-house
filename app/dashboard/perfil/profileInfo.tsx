'use client'
import { UserType } from '@/interfaces'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { API_URL } from '@/constants'
import { EditIcon } from '@/components/Icons'

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
                    {hasIcon && <EditIcon styles={styles.info__svg} />}
                </div>
            ))}
        </section>
    )
}

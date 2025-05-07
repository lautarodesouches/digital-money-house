'use client'
import { UserType } from '@/interfaces'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { API_URL } from '@/constants'
import { EditIcon } from '@/components/Icons'
import { useRouter } from 'next/navigation'

interface Props {
    token: string
    userId: number
    user: UserType
}

export default function ProfileInfo({ token, userId, user }: Props) {
    const router = useRouter()

    const [localUser, setLocalUser] = useState<UserType>(user)

    const [loadingField, setLoadingField] = useState<string | null>(null)

    const sendChanges = async (updatedUser: UserType) => {
        const { dni, email, firstname, lastname, password, phone } = updatedUser

        const body = JSON.stringify({
            dni,
            email,
            firstname,
            lastname,
            password,
            phone,
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
            router.refresh()
            setLoadingField(null)
        }
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setLoadingField(name)

        let updatedUser = { ...localUser }

        if (name === 'name') {
            const [firstname, ...rest] = value.trim().split(' ')
            const lastname = rest.join(' ')
            updatedUser = {
                ...updatedUser,
                firstname,
                lastname,
            }
        } else {
            updatedUser = {
                ...updatedUser,
                [name]: value,
            }
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
                    id: 'name',
                    label: 'Nombre y apellido',
                    type: 'text',
                    value: `${localUser.firstname} ${localUser.lastname}`,
                },
                {
                    id: 'dni',
                    label: 'DNI',
                    type: 'number',
                    value: localUser.dni,
                    readOnly: true,
                },
                {
                    id: 'phone',
                    label: 'Teléfono',
                    type: 'tel',
                    value: localUser.phone,
                },
                {
                    id: 'password',
                    label: 'Contraseña',
                    type: 'password',
                    value: '1234567890',
                },
            ].map(({ id, label, type, value, readOnly }) => (
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
                    {!readOnly && <EditIcon styles={styles.info__svg} />}
                </div>
            ))}
        </section>
    )
}

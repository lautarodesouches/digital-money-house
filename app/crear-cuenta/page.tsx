'use client'
import { ButtonPrimary } from '@/components'
import styles from './page.module.css'
import React, { startTransition, useActionState, useState } from 'react'
import { register } from './actions'
import { formatDni } from '@/utils/formatDni'

type FieldName =
    | 'firstname'
    | 'lastname'
    | 'dni'
    | 'email'
    | 'password'
    | 'confirmPassword'
    | 'phone'

type FormState = {
    [key in FieldName]: {
        value: string
        error: string
    }
}

const fields: {
    name: string
    placeholder: string
    type: string
    inputMode?: 'numeric' | undefined
}[] = [
    { name: 'firstname', placeholder: 'Nombre*', type: 'text' },
    { name: 'lastname', placeholder: 'Apellido*', type: 'text' },
    { name: 'dni', placeholder: 'DNI*', type: 'text', inputMode: 'numeric' },
    { name: 'email', placeholder: 'Correo electrónico*', type: 'email' },
    { name: 'password', placeholder: 'Contraseña*', type: 'password' },
    {
        name: 'confirmPassword',
        placeholder: 'Confirmar contraseña*',
        type: 'password',
    },
    { name: 'phone', placeholder: 'Teléfono*', type: 'tel' },
]

export default function Create() {
    const [, formAction] = useActionState(register, null)

    const [form, setForm] = useState<FormState>({
        firstname: { value: '', error: '' },
        lastname: { value: '', error: '' },
        dni: { value: '', error: '' },
        email: { value: '', error: '' },
        password: { value: '', error: '' },
        confirmPassword: { value: '', error: '' },
        phone: { value: '', error: '' },
    })

    const [isFormValid, setIsFormValid] = useState(true)

    const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/

    const validateField = (name: string, value: string): string => {
        if (name === 'password' && !passwordRegex.test(value))
            return 'Debe tener 6-20 caracteres, 1 mayúscula, 1 número y 1 carácter especial.'

        if (name === 'confirmPassword' && value !== form.password.value)
            return 'Las contraseñas no coinciden.'

        if (value === '') return 'El campo se encuentra vacio'

        return ''
    }

    const formatValue = (name: string, value: string): string => {
        if (name === 'dni') return formatDni(value)
        return value.trim()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        const formattedValue = formatValue(name, value)
        const error = validateField(name, formattedValue)

        setForm(prev => ({
            ...prev,
            [name]: {
                value,
                error,
            },
        }))
    }

    const checkIfFormIsValid = () => {
        let isValid = true

        setForm(prevForm => {
            const updatedForm = { ...prevForm }

            for (const key in updatedForm) {
                const fieldKey = key as FieldName
                const value = updatedForm[fieldKey].value.trim()

                const error = value === '' ? 'El campo se encuentra vacio' : ''
                if (error) isValid = false

                updatedForm[fieldKey] = {
                    ...updatedForm[fieldKey],
                    error,
                }
            }

            return updatedForm
        })

        return isValid
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const isFormValid = checkIfFormIsValid()

        if (!isFormValid) return setIsFormValid(isFormValid)

        const formData = new FormData()

        Object.entries(form).forEach(([key, field]) => {
            if (key === 'confirmPassword') return
            formData.append(key, field.value)
        })

        startTransition(() => {
            formAction(formData)
        })
    }

    return (
        <main className={styles.main}>
            <h2 className={styles.main__title}>Crear cuenta</h2>
            <form className={styles.main__form} onSubmit={handleSubmit}>
                {fields.map(
                    (
                        { name, placeholder, type, inputMode = undefined },
                        index
                    ) => (
                        <React.Fragment key={name}>
                            {index === 4 && (
                                <span className={styles.main__hint}>
                                    Usa entre 6 y 20 caracteres (debe contener
                                    al menos 1 mayúscula, 1 número y 1 carácter
                                    especial).
                                </span>
                            )}
                            <input
                                key={name}
                                className={`${styles.main__input} ${
                                    form[name as keyof typeof form].error
                                        ? styles.inputError
                                        : ''
                                }`}
                                name={name}
                                type={type}
                                placeholder={placeholder}
                                inputMode={inputMode}
                                value={form[name as keyof typeof form].value}
                                onChange={handleChange}
                            />
                        </React.Fragment>
                    )
                )}
                <ButtonPrimary>Crear cuenta</ButtonPrimary>
            </form>
            {!isFormValid && (
                <span className={styles.main__span}>
                    Completa los campos requeridos
                </span>
            )}
        </main>
    )
}

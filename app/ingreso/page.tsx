'use client'
import { Footer, Header } from '@/components'
import styles from './page.module.css'
import Link from 'next/link'
import { ROUTES } from '../../routes'
import { useActionState, useEffect, useState } from 'react'
import { login } from './actions'
import { useSearchParams } from 'next/navigation'

interface Content {
    stage: 'email' | 'password'
    title: string
    buttonText: string
}

export default function Login() {
    const searchParams = useSearchParams()
    const exito = searchParams.has('exito')

    const [state, formAction] = useActionState(login, null)
    const [isLoading, setIsLoading] = useState(false)
    const [content, setContent] = useState<Content>({
        stage: 'email',
        title: '¡Hola! Ingresá tu e-mail',
        buttonText: 'Continuar',
    })

    useEffect(() => {
        setIsLoading(false)

        if (
            state?.error === 'Contraseña incorrecta. Vuelve a intentarlo.' &&
            content.stage === 'email'
        ) {
            state.error = ''
            setContent({
                stage: 'password',
                title: 'Ingresá tu contraseña',
                buttonText: 'Ingresar',
            })
        }
    }, [state, content.stage])

    return (
        <>
            <Header background="secondary" showNav={false} />
            <main className={styles.main}>
                <form
                    className={styles.form}
                    action={formAction}
                    onSubmit={() => setIsLoading(true)}
                >
                    <h2 className={styles.form__h2}>{content.title}</h2>
                    <input
                        className={styles.form__input}
                        name="email"
                        type={content.stage === 'email' ? 'text' : 'hidden'}
                        placeholder="Correo electrónico"
                        required
                    />
                    <input
                        className={styles.form__input}
                        name="password"
                        type={
                            content.stage === 'password' ? 'password' : 'hidden'
                        }
                        placeholder="Contraseña"
                        required
                    />
                    <div className={styles.form__div}>
                        <button
                            className={styles.form__button}
                            disabled={isLoading}
                        >
                            {content.buttonText}
                            {isLoading && (
                                <span className={styles.progress}></span>
                            )}
                        </button>
                    </div>
                    {content.stage === 'email' && !exito && (
                        <Link
                            className={styles.form__link}
                            href={ROUTES.CREAR_CUENTA}
                        >
                            <button className={styles.form__button}>
                                Crear cuenta
                            </button>
                        </Link>
                    )}
                    <span className={styles.form__error}>
                        {state?.error && state.error}
                    </span>
                </form>
            </main>
            <Footer />
        </>
    )
}

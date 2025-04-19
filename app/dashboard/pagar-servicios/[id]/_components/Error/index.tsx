'use client'
import { ButtonPrimary } from '@/components'
import { ErrorIcon } from '@/components/Icons'
import styles from '../../page.module.css'
import { useRouter } from 'next/navigation'

interface Props {
    title: string
    text: string
    button: string
}

export default function Error({ button, text, title }: Props) {
    const router = useRouter()

    return (
        <section className={styles.error}>
            <div className={styles.error__div}>
                <ErrorIcon styles={styles.error__icon} />
                <h2 className={styles.error__title}>{title}</h2>
                <hr />
                <p className={styles.error__text}>{text}</p>
            </div>
            <div className={styles.error__button}>
                <ButtonPrimary onClick={() => router.back()}>
                    {button}
                </ButtonPrimary>
            </div>
        </section>
    )
}

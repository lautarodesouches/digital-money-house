'use client'
import { useState } from 'react'
import { CopyIcon } from '../Icons'
import styles from './styles.module.css'

interface Props {
    cvu: string
    alias: string
}

export default function CvuAlias({ alias, cvu }: Props) {
    const [copiedField, setCopiedField] = useState<string | null>(null)

    const copyToClipboard = (label: string, value: string) => {
        navigator.clipboard.writeText(value)
        setCopiedField(label)
        setTimeout(() => setCopiedField(null), 2000)
    }

    return (
        <>
            <section className={styles.data}>
                <p className={styles.data__title}>
                    Copia tu cvu o alias para ingresar o transferir dinero desde
                    otra cuenta
                </p>
                {[
                    {
                        label: 'CVU',
                        value: cvu,
                    },
                    {
                        label: 'Alias',
                        value: alias,
                    },
                ].map(({ label, value }) => (
                    <article key={label} className={styles.data__container}>
                        <div className={styles.data__div}>
                            <p className={styles.data__text}>{label}</p>
                        </div>
                        <div className={styles.data__div}>
                            <CopyIcon
                                styles={styles.data__svg}
                                onClick={() => copyToClipboard(label, value)}
                            />
                        </div>
                        <div className={styles.data__div}>
                            <p className={styles.data__number}>{value}</p>
                        </div>
                    </article>
                ))}
            </section>
            <aside
                className={`${styles.copied} ${copiedField ? styles.show : ''}`}
            >
                Copiado al portapapeles
            </aside>
        </>
    )
}

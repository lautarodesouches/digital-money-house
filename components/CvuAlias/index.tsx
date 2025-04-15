'use client'
import { CopyIcon } from '../Icons'
import styles from './styles.module.css'

interface Props {
    cvu: string
    alias: string
}

export default function CvuAlias({ alias, cvu }: Props) {
    const copyToClipboard = (value: string) => {
        navigator.clipboard.writeText(value)
    }

    return (
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
                <div key={label} className={styles.data__container}>
                    <div className={styles.data__div}>
                        <p className={styles.data__text}>{label}</p>
                    </div>
                    <div className={styles.data__div}>
                        <CopyIcon styles={styles.data__svg} onClick={() => copyToClipboard(value)} />
                    </div>
                    <div className={styles.data__div}>
                        <p className={styles.data__number}>{value}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

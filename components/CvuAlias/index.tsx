'use client'
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
                        <svg
                            className={styles.data__svg}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ cursor: 'pointer' }}
                            onClick={() => copyToClipboard(value)}
                        >
                            <path
                                d="M21 7.5V21H7.5V7.5H21ZM21 6H7.5C7.10218 6 6.72064 6.15804 6.43934 6.43934C6.15804 6.72064 6 7.10218 6 7.5V21C6 21.3978 6.15804 21.7794 6.43934 22.0607C6.72064 22.342 7.10218 22.5 7.5 22.5H21C21.3978 22.5 21.7794 22.342 22.0607 22.0607C22.342 21.7794 22.5 21.3978 22.5 21V7.5C22.5 7.10218 22.342 6.72064 22.0607 6.43934C21.7794 6.15804 21.3978 6 21 6Z"
                                fill="#C1FD35"
                            />
                            <path
                                d="M3 13.5H1.5V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H13.5V3H3V13.5Z"
                                fill="#C1FD35"
                            />
                        </svg>
                    </div>
                    <div className={styles.data__div}>
                        <p className={styles.data__number}>{value}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

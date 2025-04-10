import Link from 'next/link'
import styles from '../page.module.css'
import { ROUTES } from '@/routes'
import { List } from '@/components'
import { CardType } from '@/interfaces'

interface Props {
    cards: CardType[]
    origin: string
    handleSelectCard: (cardNumber: number) => void
    handleNext: () => void
}

export default function StepOne({
    cards,
    origin,
    handleSelectCard,
    handleNext,
}: Props) {
    return (
        <>
            <article className={styles.card}>
                <h2 className={styles.card__title}>Seleccionar tarjeta</h2>
                <List
                    title="Tus tarjetas"
                    content={cards}
                    center={card =>
                        `Terminada en ${card.number_id.toString().slice(-4)}`
                    }
                    right={card => (
                        <input
                            type="radio"
                            name="card"
                            value={card.id}
                            className={styles.one__input}
                            onChange={() => handleSelectCard(card.number_id)}
                            defaultChecked={
                                card.number_id.toString() === origin
                            }
                        />
                    )}
                />
                <Link href={ROUTES.TARJETAS__NUEVA}>
                    <div className={styles.one__bottom}>
                        <svg
                            className={styles.one__icon}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                        >
                            <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                        </svg>
                        <h3 className={styles.one__bottomTitle}>
                            Nueva tarjeta
                        </h3>
                    </div>
                </Link>
            </article>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleNext}>
                    Continuar
                </button>
            </div>
        </>
    )
}

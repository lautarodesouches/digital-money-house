import Link from 'next/link'
import styles from '../page.module.css'
import { ROUTES } from '@/routes'
import { ButtonPrimary, List } from '@/components'
import { CardType } from '@/interfaces'
import { PlusIcon } from '@/components/Icons'

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
                        <PlusIcon styles={styles.one__icon} />
                        <h3 className={styles.one__bottomTitle}>
                            Nueva tarjeta
                        </h3>
                    </div>
                </Link>
            </article>
            <div className={styles.buttonContainer}>
                <ButtonPrimary onClick={handleNext}>Continuar</ButtonPrimary>
            </div>
        </>
    )
}

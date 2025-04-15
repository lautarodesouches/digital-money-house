import styles from '../../page.module.css'
import { ButtonPrimary, List } from '@/components'

interface Props {
    name: string
    value: string
    cards: {
        id: number
        number: string
    }[]
    disabled: boolean
    handleSelectCard: (number: string) => void
}

export default function StepTwo({
    name,
    value,
    cards,
    disabled,
    handleSelectCard,
}: Props) {
    return (
        <section className={styles.section}>
            <div className={styles.two}>
                <span className={styles.two__span}>Ver detalle del pago</span>
                <h2 className={styles.two__title}>{name}</h2>
                <div className={styles.two__div}>
                    <p className={styles.two__text}>Total a pagar</p>
                    <p className={styles.two__text}>${value}</p>
                </div>
            </div>
            <List
                title="Tus tarjetas"
                content={cards}
                center={card => `Terminada en ${card.number}`}
                right={card => (
                    <input
                        type="radio"
                        name="card"
                        value={card.id}
                        className={styles.two__input}
                        onChange={() => handleSelectCard(card.number)}
                    />
                )}
            />
            <div className={styles.button__container}>
                <ButtonPrimary disabled={disabled} type="submit">
                    Pagar
                </ButtonPrimary>
            </div>
        </section>
    )
}

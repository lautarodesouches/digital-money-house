import { ButtonPrimary } from '@/components'
import styles from '../page.module.css'

interface Props {
    amount: number
    handleAmount: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleNext: () => void
}

export default function StepTwo({ amount, handleAmount, handleNext }: Props) {
    return (
        <>
            <article className={styles.card}>
                <h2 className={styles.card__title}>
                    ¿Cuánto querés ingresar a la cuenta?
                </h2>
                <input
                    className={styles.two__input}
                    type="number"
                    placeholder="$0"
                    onChange={handleAmount}
                />
            </article>
            <div className={styles.buttonContainer}>
                <ButtonPrimary
                    onClick={amount > 0 ? handleNext : undefined}
                    disabled={amount <= 0}
                >
                    Continuar
                </ButtonPrimary>
            </div>
        </>
    )
}

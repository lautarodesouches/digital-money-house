import styles from '../../page.module.css'
import { ButtonPrimary } from '@/components'

interface Props {
    account: string
    disabled: boolean
    handleNext: () => void
    handleSelectAccount: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function StepOne({
    account,
    disabled,
    handleNext,
    handleSelectAccount,
}: Props) {
    return (
        <section className={styles.section}>
            <div className={styles.one__div}>
                <h2 className={styles.one__title}>
                    Número de cuenta sin el primer 2
                </h2>
                <input
                    className={styles.one__input}
                    type="number"
                    defaultValue={parseInt(account)}
                    id="account"
                    name="account"
                    onChange={handleSelectAccount}
                />
                <p className={styles.one__span}>
                    Son 11 números sin espacios, sin el “2” inicial. Agregá
                    ceros adelante si tenés menos.{' '}
                </p>
                <div className={`${styles.button__container} ${styles.d_desktop}`}>
                    <ButtonPrimary onClick={handleNext} disabled={disabled}>
                        Continuar
                    </ButtonPrimary>
                </div>
            </div>
            <div className={`${styles.button__container} ${styles.d_mobile}`}>
                <ButtonPrimary onClick={handleNext} disabled={disabled}>
                    Continuar
                </ButtonPrimary>
            </div>
        </section>
    )
}

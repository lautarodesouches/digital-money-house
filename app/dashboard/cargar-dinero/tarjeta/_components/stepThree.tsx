import { ButtonPrimary } from '@/components'
import styles from '../page.module.css'
import { EditIcon } from '@/components/Icons'

interface Props {
    amount: number
    cvu: string
    handleBack: () => void
    handleSubmit: () => void
}

export default function StepThree({
    amount,
    cvu,
    handleBack,
    handleSubmit,
}: Props) {
    return (
        <>
            <article className={styles.card}>
                <h2 className={styles.card__title}>
                    Revisá que está todo bien
                </h2>
                <hr />
                <div className={styles.three__top}>
                    <div className={styles.three__top__flex}>
                        <p className={styles.three__top__text}>
                            Vas a transferir
                        </p>
                        <EditIcon
                            styles={styles.three__top__icon}
                            onClick={handleBack}
                        />
                    </div>
                    <span className={styles.three__top__amount}>${amount}</span>
                </div>
                <div className={styles.three__middle}>
                    <p className={styles.three__middle__text}>Para</p>
                    <span className={styles.three__middle__span}>
                        Cuenta propia
                    </span>
                </div>
                <div className={styles.three__bottom}>
                    <p className={styles.three__bottom__text}>Brubank</p>
                    <span className={styles.three__bottom__span}>
                        CVU {cvu}
                    </span>
                </div>
                <div
                    className={`${styles.buttonContainer} ${styles.d_desktop}`}
                >
                    <ButtonPrimary
                        onClick={handleSubmit}
                    >
                        Continuar
                    </ButtonPrimary>
                </div>
            </article>
            <div className={`${styles.buttonContainer} ${styles.d_mobile}`}>
                <ButtonPrimary onClick={handleSubmit}>
                    Continuar
                </ButtonPrimary>
            </div>
        </>
    )
}

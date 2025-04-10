import styles from '../page.module.css'

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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className={styles.three__top__icon}
                            onClick={handleBack}
                        >
                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                        </svg>
                    </div>
                    <span className={styles.three__top__amount}>
                        ${amount}
                    </span>
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
            </article>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleSubmit}>
                    Continuar
                </button>
            </div>
        </>
    )
}

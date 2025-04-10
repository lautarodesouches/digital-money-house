import styles from './styles.module.css'

export default function Title({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles.top}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className={styles.top__arrow}
            >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
            <p className={styles.top__text}>{children}</p>
        </section>
    )
}

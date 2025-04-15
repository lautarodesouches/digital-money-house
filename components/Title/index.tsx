import { ArrowIcon } from '../Icons'
import styles from './styles.module.css'

export default function Title({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles.top}>
            <ArrowIcon styles={styles.top__arrow} />
            <p className={styles.top__text}>{children}</p>
        </section>
    )
}

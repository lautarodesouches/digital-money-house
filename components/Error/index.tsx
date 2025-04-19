import Link from 'next/link'
import ButtonPrimary from '../ButtonPrimary'
import { ROUTES } from '@/routes'
import styles from './styles.module.css'

export default function Error() {
    return (
        <section className={styles.error}>
            <h2 className={styles.error__title}>Ocurrió un error inesperado</h2>
            <Link className={styles.error__link} href={ROUTES.INICIO}>
                <ButtonPrimary>Volver al inicio</ButtonPrimary>
            </Link>
        </section>
    )
}

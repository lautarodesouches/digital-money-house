import html2pdf from 'html2pdf.js'
import Link from 'next/link'
import styles from '../page.module.css'
import { ROUTES } from '@/routes'
import { useRef } from 'react'

interface Props {
    id: number
    amount: number
    dated: string
    destination: string
    handleBack: () => void
}

export default function StepFour({
    id,
    amount,
    dated,
    destination,
    handleBack,
}: Props) {
    const pdfRef = useRef<HTMLDivElement>(null)

    const handleDownload = () => {
        if (!pdfRef.current) return

        const opt = {
            margin: 0.5,
            filename: `transferencia-${id}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        }

        html2pdf().set(opt).from(pdfRef.current).save()
    }

    return (
        <div ref={pdfRef}>
            <div className={styles.four__top}>
                <svg
                    className={styles.four__top__svg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
                <p className={styles.four__top__text}>Ya cargamos el dinero en tu cuenta</p>
            </div>
            <article className={styles.card}>
                <h2 className={styles.card__title}>
                    Revisá que está todo bien
                </h2>
                <hr />
                <div className={styles.three__top}>
                    <div className={styles.three__top__flex}>
                        <p className={styles.three__top__text}>{dated}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className={styles.three__top__icon}
                            onClick={handleBack}
                        >
                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                        </svg>
                    </div>
                    <span className={`${styles.three__top__amount} ${styles.secondary}`}>${amount}</span>
                </div>
                <div className={styles.three__middle}>
                    <p className={styles.three__middle__text}>Para</p>
                    <span className={`${styles.three__middle__span} ${styles.secondary}`}>
                        Cuenta propia
                    </span>
                </div>
                <div className={styles.three__bottom}>
                    <p className={styles.three__bottom__text}>Brubank</p>
                    <span className={styles.three__bottom__span}>
                        CVU {destination}
                    </span>
                </div>
            </article>
            <div className={styles.four__buttons}>
                <div>
                    <button className={styles.button} onClick={handleDownload}>
                        Descargar comprobante
                    </button>
                </div>
                <div>
                    <Link href={ROUTES.INICIO}>
                        <button className={styles.buttonSecondary}>Ir al inicio</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

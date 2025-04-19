import html2pdf from 'html2pdf.js'
import Link from 'next/link'
import styles from '../page.module.css'
import { ROUTES } from '@/routes'
import { useRef } from 'react'
import { ButtonPrimary, ButtonSecondary } from '@/components'
import { CheckIcon, EditIcon } from '@/components/Icons'
import formatDate from '@/utils/formatDate'
import { formatNumber } from '@/utils/formatNumber'

interface Props {
    id: number
    amount: number
    dated: string
    destination: string
    handleBack: () => void
}

export default function Success({
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
            <div className={styles.success__top}>
                <CheckIcon styles={styles.success__top__svg} />
                <p className={styles.success__top__text}>
                    Ya cargamos el dinero en tu cuenta
                </p>
            </div>
            <article className={styles.card}>
                <h2 className={styles.card__title}>
                    Revisá que está todo bien
                </h2>
                <hr />
                <div className={styles.three__top}>
                    <div className={styles.three__top__flex}>
                        <p className={styles.three__top__text}>
                            {formatDate(dated)}
                        </p>
                        <EditIcon
                            styles={styles.three__top__icon}
                            onClick={handleBack}
                        />
                    </div>
                    <span
                        className={`${styles.three__top__amount} ${styles.secondary}`}
                    >
                        ${formatNumber(amount)}
                    </span>
                </div>
                <div className={styles.three__middle}>
                    <p className={styles.three__middle__text}>Para</p>
                    <span
                        className={`${styles.three__middle__span} ${styles.secondary}`}
                    >
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
            <div className={styles.success__buttons}>
                <div>
                    <ButtonPrimary onClick={handleDownload}>
                        Descargar comprobante
                    </ButtonPrimary>
                </div>
                <div>
                    <Link href={ROUTES.INICIO}>
                        <ButtonSecondary>Ir al inicio</ButtonSecondary>
                    </Link>
                </div>
            </div>
        </div>
    )
}

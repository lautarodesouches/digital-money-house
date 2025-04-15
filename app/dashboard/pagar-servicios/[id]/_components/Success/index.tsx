'use client'
import formatDate from '@/utils/formatDate'
import styles from './styles.module.css'
import { ROUTES } from '@/routes'
import Link from 'next/link'
import { formatNumber } from '@/utils/formatNumber'
import { useRef } from 'react'
import html2pdf from 'html2pdf.js'
import { ButtonPrimary, ButtonSecondary } from '@/components'
import { CheckIcon } from '@/components/Icons'

interface Props {
    date: string
    description: string
    card: number
    amount: number
}

export default function Success({ card, date, description, amount }: Props) {
    const pdfRef = useRef<HTMLDivElement>(null)

    const handleDownload = () => {
        if (!pdfRef.current) return

        const opt = {
            margin: 0.5,
            filename: `pago-servicio-${description}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        }

        html2pdf().set(opt).from(pdfRef.current).save()
    }

    return (
        <section className={styles.success}>
            <div className={styles.success__div}>
                <CheckIcon styles={styles.success__icon} />
                <h2 className={styles.success__title}>Ya realizamos tu pago</h2>
            </div>
            <div className={styles.success__div} ref={pdfRef}>
                <div>
                    <span className={styles.success__span}>
                        {formatDate(date)}
                    </span>
                    <h3 className={styles.success__text}>
                        ${formatNumber(Math.abs(amount))}
                    </h3>
                </div>
                <div>
                    <span className={styles.success__span}>Para</span>
                    <h3 className={styles.success__text}>{description}</h3>
                </div>
                <div>
                    <span className={styles.success__span}>Tarjeta</span>
                    <h3 className={styles.success__text}>*******{card}</h3>
                </div>
            </div>
            <div className={styles.success__div}>
                <ButtonPrimary onClick={handleDownload}>
                    Descargar comprobante
                </ButtonPrimary>
            </div>
            <div className={styles.success__div}>
                <Link href={ROUTES.INICIO}>
                    <ButtonSecondary>Ir al inicio</ButtonSecondary>
                </Link>
            </div>
        </section>
    )
}

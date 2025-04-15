'use client'
import formatDate from '@/utils/formatDate'
import styles from './styles.module.css'
import { ROUTES } from '@/routes'
import Link from 'next/link'
import { formatNumber } from '@/utils/formatNumber'
import { useRef } from 'react'
import html2pdf from 'html2pdf.js'
import { ButtonPrimary, ButtonSecondary } from '@/components'

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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className={styles.success__icon}
                >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
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

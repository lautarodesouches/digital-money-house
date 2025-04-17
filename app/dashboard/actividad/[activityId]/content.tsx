'use client'
import styles from './page.module.css'
import { useRef } from 'react'
import html2pdf from 'html2pdf.js'
import { ROUTES } from '@/routes'
import Link from 'next/link'
import { TransferType } from '@/interfaces'
import { CheckIcon } from '@/components/Icons'

interface Props {
    activity: TransferType
}

export default function Content({ activity }: Props) {
    const pdfRef = useRef<HTMLElement>(null)

    const formatPrettyDate = (dateString: string): string => {
        const date = new Date(dateString)

        const day = date.getDate()
        const month = date.toLocaleString('es-AR', { month: 'long' })
        const year = date.getFullYear()

        const hours = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')

        return `Creada el ${day} de ${month} ${year} a ${hours}:${minutes} hs.`
    }

    const handleDownload = () => {
        if (!pdfRef.current) return

        const opt = {
            margin: 0.5,
            filename: `comprobante-${activity.id}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        }

        html2pdf().set(opt).from(pdfRef.current).save()
    }

    return (
        <div className={styles.activity}>
            <article className={styles.activity__art} ref={pdfRef}>
                <div className={styles.activity__top}>
                    <div className={styles.activity__join}>
                        <CheckIcon styles={styles.activity__svg} />
                        <h2 className={styles.activity__title}>Aprobada</h2>
                    </div>
                    <div className={styles.activity__date}>
                        <p>{formatPrettyDate(activity.dated)}</p>
                    </div>
                </div>
                <hr className={styles.activity__hr} />
                <div className={styles.activity__date}>
                    <p>{formatPrettyDate(activity.dated)}</p>
                </div>
                <div className={styles.activity__amount}>
                    <p>{activity.description}</p>
                    <p>${activity.amount.toLocaleString('es-AR')}</p>
                </div>
                {activity.destination && (
                    <div className={styles.activity__info}>
                        <p>Le transferiste a</p>
                        <p>{activity.destination}</p>
                    </div>
                )}
                <div className={styles.activity__number}>
                    <p>Número de operación</p>
                    <p>{activity.id}</p>
                </div>
            </article>
            <div className={styles.container}>
                <button onClick={handleDownload} className={styles.button}>
                    Descargar comprobante
                </button>
                <Link className={styles.link} href={ROUTES.INICIO}>
                    <button
                        className={`${styles.button} ${styles.button__grey}`}
                    >
                        Ir al inicio
                    </button>
                </Link>
            </div>
        </div>
    )
}

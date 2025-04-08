'use client'
import styles from './page.module.css'
import { useRef } from 'react'
import html2pdf from 'html2pdf.js'
import { ROUTES } from '@/routes'
import Link from 'next/link'
import { TransferType } from '@/interfaces'

interface Props {
    activity: TransferType
}

export default function Content({ activity }: Props) {
    const pdfRef = useRef<HTMLElement>(null)

    // Functions
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
        <>
            <div className={styles.activity}>
                <article className={styles.activity__art} ref={pdfRef}>
                    <div className={styles.activity__top}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className={styles.activity__svg}
                        >
                            <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                        </svg>
                        <h2 className={styles.activity__title}>Aprobada</h2>
                    </div>
                    <hr className={styles.activity__hr} />
                    <div className={styles.activity__date}>
                        <p>{formatPrettyDate(activity.dated)}</p>
                    </div>
                    <div className={styles.activity__amount}>
                        <p>Transferencia de dinero</p>
                        <p>${activity.amount.toLocaleString('es-AR')}</p>
                    </div>
                    <div className={styles.activity__info}>
                        <p>Le transferiste a</p>
                        <p>{activity.destination}</p>
                    </div>
                    <div className={styles.activity__number}>
                        <p>Número de operación</p>
                        <p>{activity.id}</p>
                    </div>
                </article>
                <button onClick={handleDownload} className={styles.button}>
                    Descargar comprobante
                </button>
                <Link className={styles.link} href={ROUTES.INICIO}>
                    <button className={styles.button}>Ir al inicio</button>
                </Link>
            </div>
        </>
    )
}

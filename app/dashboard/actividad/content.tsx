'use client'
import styles from './page.module.css'
import { TransferType } from '@/interfaces'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import Filters from './_components/filters'
import { ROUTES } from '@/routes'
import { SearchActivity } from '@/components'
import Filter from './_components/filter'

interface Props {
    activity: TransferType[]
    currentPage: number
    totalPages: number
}

export default function Content({ activity, currentPage, totalPages }: Props) {
    const [showFilters, setShowFilters] = useState(false)

    const router = useRouter()
    const pathname = usePathname()

    const handleFilterClick = () => {
        setShowFilters(prev => !prev)
    }

    const handlePageClick = (page: number) => {
        const params = new URLSearchParams()
        params.set('page', page.toString())

        router.push(`${pathname}?${params.toString()}`)
    }

    return (
        <div className={styles.container}>
            <SearchActivity />
            <Filter handleFilterClick={handleFilterClick} />
            <section className={styles.list}>
                <div className={styles.list__header}>
                    <div className={styles.list__div}>
                        <h2 className={styles.list__title}>Tu actividad</h2>
                    </div>
                    <Filter handleFilterClick={handleFilterClick} />
                </div>
                <div className={styles.list__content}>
                    {activity.length === 0 && (
                        <article className={styles.active}>
                            <div className={styles.active__start}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 -960 960 960"
                                    className={styles.active__circle}
                                >
                                    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0 0q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Z" />
                                </svg>
                                <p className={styles.active__text}>
                                    No se encontraron resultados
                                </p>
                            </div>
                        </article>
                    )}
                    {activity.map((item, index) => {
                        const date = new Date(item.dated)

                        const formatDate = `${date.getDate()}/${
                            date.getMonth() + 1
                        }/${date.getFullYear()}`

                        return (
                            <article
                                className={styles.active}
                                key={index}
                                onClick={() =>
                                    router.push(
                                        `${ROUTES.ACTIVIDAD}/${item.id}`
                                    )
                                }
                            >
                                <div className={styles.active__start}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 -960 960 960"
                                        className={styles.active__circle}
                                    >
                                        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0 0q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Z" />
                                    </svg>
                                    <p className={styles.active__text}>
                                        {item.description}
                                    </p>
                                </div>
                                <div className={styles.active__end}>
                                    <p className={styles.active__top}>
                                        {item.amount < 0 ? '-$' : '$'}
                                        {Math.abs(item.amount)}
                                    </p>
                                    <p className={styles.active__bottom}>
                                        {formatDate}
                                    </p>
                                </div>
                            </article>
                        )
                    })}
                </div>
                <nav className={styles.nav}>
                    {Array.from({ length: totalPages }, (_, i) => {
                        const pageNum = i + 1
                        return (
                            <button
                                key={pageNum}
                                onClick={() => handlePageClick(pageNum)}
                                disabled={pageNum === currentPage}
                                className={`${styles.nav__button} ${
                                    pageNum === currentPage
                                        ? styles.nav__buttonActive
                                        : ''
                                }`}
                            >
                                {pageNum}
                            </button>
                        )
                    })}
                </nav>
            </section>
            <Filters showFilters={showFilters} setShowFilters={setShowFilters} />
        </div>
    )
}

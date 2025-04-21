'use client'
import styles from '../page.module.css'
import { useState, Dispatch, SetStateAction } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
    showFilters: boolean
    setShowFilters: Dispatch<SetStateAction<boolean>>
}

export default function Filters({ showFilters, setShowFilters }: Props) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [dateFilters, setDateFilters] = useState([
        { label: 'Hoy', checked: false },
        { label: 'Ayer', checked: false },
        { label: 'Última semana', checked: false },
        { label: 'Últimos 15 días', checked: false },
        { label: 'Último mes', checked: false },
        { label: 'Último año', checked: true },
    ])

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { id } = e.currentTarget

        setDateFilters(prevFilters =>
            prevFilters.map(filter =>
                filter.label === id
                    ? { ...filter, checked: !filter.checked }
                    : { ...filter, checked: false }
            )
        )
    }

    const handleApply = () => {
        const selected = dateFilters.find(f => f.checked)

        if (!selected) return

        const params = new URLSearchParams(searchParams.toString())

        // Convertimos el label a formato válido para URL
        const filterValue = selected.label.toLowerCase().replaceAll(' ', '_')

        params.set('date', filterValue)
        params.set('page', '1')

        router.push(`?${params.toString()}`)

        setShowFilters(false)
    }

    const handleClearFilters = () => {
        const params = new URLSearchParams(searchParams.toString())
        
        params.delete('filter')
        params.delete('date')
        params.delete('search')
        params.set('page', '1')
        
        router.push(`?${params.toString()}`)

        setShowFilters(false)
    }

    return (
        <aside
            className={showFilters ? styles.filters : styles.filters__hidden}
        >
            <div
                className={`${styles.filters__content} ${
                    showFilters ? styles.filtersActive : ''
                }`}
            >
                <header className={styles.filters__header}>
                    <h3 className={styles.filters__title}>Período</h3>
                    <button
                        className={styles.filters__clean}
                        onClick={handleClearFilters}
                    >
                        Borrar filtros
                    </button>
                </header>
                <main className={styles.filters__main}>
                    <div className={styles.filters__dates}>
                        {dateFilters.map(date => (
                            <div
                                className={styles.filters__date}
                                key={date.label}
                            >
                                <div className={styles.filters__div}>
                                    {date.label}
                                </div>
                                <div className={styles.filters__div}>
                                    <input
                                        className={styles.filters__input}
                                        type="radio"
                                        name={date.label}
                                        id={date.label}
                                        checked={date.checked}
                                        onChange={handleCheck}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className={styles.filters__button}
                        onClick={handleApply}
                    >
                        Aplicar
                    </button>
                </main>
            </div>
        </aside>
    )
}

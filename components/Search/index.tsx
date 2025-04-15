'use client'
import { SearchIcon } from '../Icons'
import styles from './styles.module.css'

interface Props {
    placeholder: string
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export default function Search({ placeholder, handleKeyDown }: Props) {
    return (
        <section className={styles.search}>
            <SearchIcon styles={styles.search__icon} />
            <input
                className={styles.search__input}
                type="text"
                placeholder={placeholder}
                onKeyDown={handleKeyDown}
            />
        </section>
    )
}

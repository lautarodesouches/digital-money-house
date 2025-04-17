import styles from '../page.module.css'
import { FilterIcon } from '@/components/Icons'

interface Props {
    handleFilterClick: () => void
}

export default function Filter({ handleFilterClick }: Props) {
    return (
        <div className={styles.filter} onClick={handleFilterClick}>
            <span className={styles.filter__span}>Filtrar</span>
            <FilterIcon styles={styles.filter__icon} />
        </div>
    )
}

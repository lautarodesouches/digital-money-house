import { ButtonType } from '@/interfaces/Button'
import styles from './styles.module.css'

export default function Button({
    children,
    style,
    disabled = undefined,
    type = undefined,
    onClick = undefined,
}: ButtonType) {
    return (
        <button
            className={`${styles.button} ${style}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    )
}

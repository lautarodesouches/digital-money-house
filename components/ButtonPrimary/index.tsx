import { ButtonType } from '@/interfaces/Button'
import Button from '../Button'
import styles from './styles.module.css'

export default function ButtonPrimary({
    children,
    disabled,
    type,
    onClick,
}: ButtonType) {
    return (
        <Button
            style={styles.button}
            disabled={disabled}
            type={type}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

import { ButtonType } from '@/interfaces'
import Button from '../Button'
import styles from './styles.module.css'

export default function ButtonPrimary({
    style,
    children,
    disabled,
    type,
    onClick,
}: ButtonType) {
    return (
        <Button
            style={`${styles.button} ${style}`}
            disabled={disabled}
            type={type}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

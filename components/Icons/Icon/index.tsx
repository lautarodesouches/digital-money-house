import { IconType } from '@/interfaces'

export default function Icon({
    children,
    styles,
    onClick = undefined,
}: IconType) {
    return (
        <svg
            className={styles}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            onClick={onClick}
        >
            {children}
        </svg>
    )
}

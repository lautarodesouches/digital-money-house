import { IconType } from '@/interfaces'
import Icon from '../Icon'

export default function CardIcon({ styles }: IconType) {
    return (
        <Icon styles={styles}>
            <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z" />
        </Icon>
    )
}

import { IconType } from '@/interfaces'
import Icon from '../Icon'

export default function FilterIcon({ styles, onClick }: IconType) {
    return (
        <Icon styles={styles} onClick={onClick}>
            <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" />
        </Icon>
    )
}

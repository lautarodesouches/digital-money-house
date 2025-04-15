import Icon from '../Icon'

interface Props {
    styles: string
}

export default function ArrowIcon({ styles }: Props) {
    return (
        <Icon styles={styles}>
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </Icon>
    )
}

import { ReactNode } from 'react'

export default interface IconType {
    styles: string
    children?: ReactNode
    onClick?: () => void
}

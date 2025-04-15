import { ReactNode } from 'react'

export interface IconType {
    styles: string
    children?: ReactNode
    onClick?: () => void
}

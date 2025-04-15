import { ReactNode } from 'react'

export interface ButtonType {
    children: ReactNode
    style?: string
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset' | undefined
    onClick?: () => void
}

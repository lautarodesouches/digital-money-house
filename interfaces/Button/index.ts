import { ReactNode } from 'react'

export default interface ButtonType {
    children: ReactNode
    style?: string
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset' | undefined
    onClick?: () => void
}

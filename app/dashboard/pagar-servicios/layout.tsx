import { Title } from '@/components'

interface Props {
    children: React.ReactNode
}

export default async function Layout({ children }: Props) {
    return (
        <>
            <Title>Pagar servicios</Title>
            {children}
        </>
    )
}

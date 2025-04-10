import { Title } from '@/components'

interface Props {
    children: React.ReactNode
}

export default async function Layout({ children }: Props) {
    return (
        <>
            <Title>Cargar dinero</Title>
            {children}
        </>
    )
}

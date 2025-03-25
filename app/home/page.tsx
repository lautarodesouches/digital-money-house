'use client'
import { ROUTES } from '@/routes'
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()

    const handleLogout = async () => {
        await fetch('/api/logout')

        router.push(ROUTES.LANDING)
    }

    return (
        <header>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </header>
    )
}

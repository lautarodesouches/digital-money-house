'use client'
import { usePathname, useRouter } from 'next/navigation'
import { ROUTES } from '@/routes'
import Search from '../Search'

export default function SearchActivity() {
    const router = useRouter()
    const pathname = usePathname()

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const query = event.currentTarget.value.trim()

        if (event.key !== 'Enter') return

        if (pathname === ROUTES.ACTIVIDAD) {
            // Ya estás en la ruta: solo actualiza el query param
            router.push(`?search=${query}`)
        } else {
            // Estás en otra ruta: navega a /actividad con el query
            router.push(`${ROUTES.ACTIVIDAD}?search=${query}`)
        }
    }

    return (
        <Search
            placeholder="Buscar en tu actividad"
            handleKeyDown={handleKeyDown}
        />
    )
}

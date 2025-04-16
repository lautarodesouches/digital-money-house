import { usePathname, useRouter } from 'next/navigation'
import styles from './styles.module.css'
import { ROUTES } from '@/routes'
import Link from 'next/link'
import { useRef, useEffect } from 'react'

interface Props {
    name: string
    isMenuActive: boolean
    handleMenuClick: () => void
}

export default function SideBar({
    name,
    isMenuActive,
    handleMenuClick,
}: Props) {
    const menuRef = useRef<HTMLDivElement>(null)
    const router = useRouter()
    const pathname = usePathname()

    // Cierra el menú solo si está abierto y se hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isMenuActive &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                handleMenuClick() // Cierra el menú
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMenuActive, handleMenuClick])

    const handleLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        await fetch('/api/logout')
        router.push(ROUTES.LANDING)
    }

    return (
        <nav
            ref={menuRef}
            className={`${styles.nav} ${
                isMenuActive ? styles.navOpen : styles.navClosed
            }`}
        >
            <div className={styles.nav__div}>
                <div className={styles.nav__top}>
                    <svg
                        className={styles.nav__svg}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        onClick={handleMenuClick} // Solo cambia el estado manualmente
                    >
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </div>
                <div className={styles.nav__title}>
                    Hola, <br />
                    {name}
                </div>
            </div>
            <div className={styles.nav__div}>
                <ul className={styles.nav__ul}>
                    {[
                        {
                            name: 'Inicio',
                            path: ROUTES.INICIO,
                            onClick: handleMenuClick,
                        },
                        {
                            name: 'Actividad',
                            path: ROUTES.ACTIVIDAD,
                            onClick: handleMenuClick,
                        },
                        {
                            name: 'Tu perfil',
                            path: ROUTES.PERFIL,
                            onClick: handleMenuClick,
                        },
                        {
                            name: 'Cargar dinero',
                            path: ROUTES.CARGAR_DINERO,
                            onClick: handleMenuClick,
                        },
                        {
                            name: 'Pagar servicios',
                            path: ROUTES.PAGAR_SERVICIOS,
                            onClick: handleMenuClick,
                        },
                        {
                            name: 'Tarjetas',
                            path: ROUTES.TARJETAS,
                            onClick: handleMenuClick,
                        },
                        {
                            name: 'Cerrar sesión',
                            path: '/cerrar-sesion',
                            onClick: handleLogout,
                        },
                    ].map(({ name, path, onClick }) => (
                        <li key={name} className={styles.nav__li}>
                            <Link
                                href={path}
                                onClick={onClick}
                                className={
                                    pathname.includes(path) ? styles.nav__active : ''
                                }
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

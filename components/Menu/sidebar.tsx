import { useRouter } from 'next/navigation'
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

    const handleLogout = async () => {
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
                    <li className={styles.nav__li}>
                        <Link href={ROUTES.LANDING}>Inicio</Link>
                    </li>
                    <li className={styles.nav__li}>
                        <Link href={ROUTES.LANDING}>Actividad</Link>
                    </li>
                    <li className={styles.nav__li}>
                        <Link href={ROUTES.LANDING}>Tu perfil</Link>
                    </li>
                    <li className={styles.nav__li}>
                        <Link href={ROUTES.LANDING}>Cargar dinero</Link>
                    </li>
                    <li className={styles.nav__li}>
                        <Link href={ROUTES.LANDING}>Pagar servicios</Link>
                    </li>
                    <li className={styles.nav__li}>
                        <Link href={ROUTES.LANDING}>Tarjetas</Link>
                    </li>
                    <li className={styles.nav__li} onClick={handleLogout}>
                        Cerrar sesión
                    </li>
                </ul>
            </div>
        </nav>
    )
}

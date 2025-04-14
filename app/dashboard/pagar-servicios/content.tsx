'use client'
import styles from './page.module.css'
import { Search } from '@/components'
import { ServiceType } from '@/interfaces'
import { ROUTES } from '@/routes'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Props {
    servicesServer: ServiceType[]
}

export default function Content({ servicesServer = [] }: Props) {
    const router = useRouter()

    const [query, setQuery] = useState('')
    const [services, setServices] = useState<ServiceType[]>([])

    const handleSelect = (serviceId: number) => {
        router.push(`${ROUTES.PAGAR_SERVICIOS}/${serviceId}`)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const query = event.currentTarget.value.trim()

        setQuery(query)
    }

    useEffect(() => {
        const filteredService = query
            ? servicesServer.filter(service =>
                  service.name.toLowerCase().includes(query.toLowerCase())
              )
            : servicesServer

        setServices(filteredService)
    }, [query, servicesServer])

    return (
        <>
            <Search
                placeholder="Buscá entre más de 5.000 empresas"
                handleKeyDown={handleKeyDown}
            />
            <div className={styles.list}>
                <h2 className={styles.list__title}>Más recientes</h2>
                <ul className={styles.list__ul}>
                    {services.map(service => (
                        <li className={styles.list__li} key={service.id}>
                            <div className={styles.list__div}>
                                <Image
                                    src={`/services/${service.name
                                        .toLowerCase()
                                        .replaceAll(' ', '-')}.svg`}
                                    alt={service.name}
                                    className={styles.list__img}
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <div className={styles.list__div}>
                                <p className={styles.list__text}>
                                    {service.name}
                                </p>
                            </div>
                            <div className={styles.list__div}>
                                <button
                                    className={styles.list__button}
                                    onClick={() => handleSelect(service.id)}
                                >
                                    Seleccionar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

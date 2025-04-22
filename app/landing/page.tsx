'use client'
import parse from 'html-react-parser'
import styles from './page.module.css'
import { ButtonPrimary, Footer, Header } from '@/components'
import Link from 'next/link'
import { ROUTES } from '@/routes'
import { LandingType } from '@/interfaces'
import { useFetch } from '@/hooks/useFetch'

export default function Landing() {
    const { data, loading, error } = useFetch<LandingType>('/api/landing')

    return (
        <>
            <Header>
                <div className={styles.header__div}>
                    <Link
                        className={styles.header__link}
                        href={ROUTES.INICIAR_SESION}
                    >
                        <button className={styles.header__login}>
                            Ingresar
                        </button>
                    </Link>
                </div>
                <div className={styles.header__div}>
                    <Link
                        className={styles.header__link}
                        href={ROUTES.CREAR_CUENTA}
                    >
                        <ButtonPrimary>Crear cuenta</ButtonPrimary>
                    </Link>
                </div>
            </Header>
            <main className={styles.main}>
                {loading ? (
                    <p>Cargando...</p>
                ) : error ? (
                    <p>Error: {error.message}</p>
                ) : data ? (
                    <>
                        <section className={styles.top}>
                            <h1 className={styles.top__title}>{data.title}</h1>
                            <hr className={styles.top__hr} />
                            <h2 className={styles.top__subtitle}>
                                {parse(data.subtitle)}
                            </h2>
                        </section>
                        <section className={styles.content}>
                            {data.features.map((feature, i) => (
                                <article
                                    className={styles.content__art}
                                    key={i}
                                >
                                    <h3 className={styles.content__h3}>
                                        {feature.title}
                                    </h3>
                                    <hr className={styles.content__hr} />
                                    <p className={styles.content__p}>
                                        {feature.description}
                                    </p>
                                </article>
                            ))}
                            <aside className={styles.background}></aside>
                        </section>
                    </>
                ) : (
                    <p>No hay datos.</p>
                )}
            </main>
            <Footer />
        </>
    )
}

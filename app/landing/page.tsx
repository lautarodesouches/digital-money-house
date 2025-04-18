import parse from 'html-react-parser'
import styles from './page.module.css'
import { ButtonPrimary, Footer, Header } from '@/components'
import { getLandingContent } from '@/services/getLandingContent'
import Link from 'next/link'
import { ROUTES } from '@/routes'

export default async function Landing() {
    const content = await getLandingContent()

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
                <section className={styles.top}>
                    <h1 className={styles.top__title}>{content.title}</h1>
                    <hr className={styles.top__hr} />
                    <h2 className={styles.top__subtitle}>
                        {parse(content.subtitle)}
                    </h2>
                </section>
                <section className={styles.content}>
                    {content.features.map((feature, i) => (
                        <article className={styles.content__art} key={i}>
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
            </main>
            <Footer />
        </>
    )
}

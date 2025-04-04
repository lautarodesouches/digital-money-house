'use client'
import parse from 'html-react-parser'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import { Footer, Header } from '@/components'

type Feature = {
    title: string
    description: string
}

type Content = {
    title: string
    subtitle: string
    features: Feature[]
}

export default function Landing() {
    const [content, setContent] = useState<Content>({
        title: '',
        subtitle: '',
        features: [],
    })

    const fetchContent = async () => {
        const res = await fetch('/api/landing')

        if (!res.ok) throw new Error('Failed to fetch data')

        const data: Content = await res.json()

        setContent(data)
    }

    useEffect(() => {
        fetchContent()
    }, [])

    return (
        <>
            <Header />
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

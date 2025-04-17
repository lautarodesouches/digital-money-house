import styles from './styles.module.css'

interface Props<T> {
    loading?: boolean
    title: string
    content: T[]
    center?: (item: T) => React.ReactNode
    right?: (item: T) => React.ReactNode
    bottom?: React.ReactNode
}

export default function List<T>({
    loading = false,
    title,
    content,
    center,
    right,
    bottom,
}: Props<T>) {
    return (
        <section className={styles.list}>
            <h2 className={styles.list__title}>{title}</h2>
            <div className={styles.list__content}>
                {loading ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <article
                            className={styles.skeleton}
                            key={`skeleton-${index}`}
                        >
                            <div className={styles.skeleton__start}>
                                <div className={styles.skeleton__circle}></div>
                                <div className={styles.skeleton__text}></div>
                            </div>
                            <div className={styles.skeleton__end}></div>
                        </article>
                    ))
                ) : content.length > 0 ? (
                    content.map((item, index) => (
                        <article className={styles.active} key={index}>
                            <div className={styles.active__start}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 -960 960 960"
                                    className={styles.active__circle}
                                >
                                    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0 0q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Z" />
                                </svg>
                                <p className={styles.active__text}>
                                    {center ? center(item) : 'Sin información'}
                                </p>
                            </div>
                            <div className={styles.active__end}>
                                {right && right(item)}
                            </div>
                        </article>
                    ))
                ) : (
                    <article className={styles.active}>
                        <div className={styles.active__start}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -960 960 960"
                                className={styles.active__circle}
                            >
                                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0 0q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Z" />
                            </svg>
                            <p className={styles.active__text}>
                                No se encontraron resultados
                            </p>
                        </div>
                    </article>
                )}
            </div>
            {bottom}
        </section>
    )
}

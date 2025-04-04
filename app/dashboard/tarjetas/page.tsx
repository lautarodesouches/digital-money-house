import { List } from '@/components'
import styles from './page.module.css'
import { getCards } from '@/services/getCards'
import { getToken } from '@/services/getToken'
import { getAccount } from '@/services/getAccount'
import { ROUTES } from '@/routes'
import { redirect } from 'next/navigation'

export default async function Tarjetas() {
    const token = await getToken()

    const account = await getAccount(token)

    if (!account) return redirect(ROUTES.INICIAR_SESION)

    const cards = await getCards(token, account)

    return (
        <>
            <section className={styles.top}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className={styles.top__arrow}
                >
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
                <p className={styles.top__text}>Tarjetas</p>
            </section>
            <section className={styles.add}>
                <h2 className={styles.add__title}>
                    Agregá tu tarjeta de débito o crédito
                </h2>
                <div className={styles.add__div}>
                    <div className={styles.add__left}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className={styles.add__svg}
                        >
                            <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                        </svg>
                        <span className={styles.add__text}>Nueva tarjeta</span>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        className={styles.add__svg}
                    >
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                    </svg>
                </div>
            </section>
            <List
                title="Tus tarjetas"
                content={cards}
                center={card =>
                    `Terminada en ${card.number_id.toString().slice(-4)}`
                }
                right={() => (
                    <button className={styles.cards__button}>Eliminar</button>
                )}
            />
        </>
    )
}

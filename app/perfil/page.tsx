import { Footer, Menu } from '@/components'
import styles from './page.module.css'
import Data from './data'
import { cookies } from 'next/headers'

interface Account {
    id: number
    user_id: number
    cvu: string
    alias: string
    available_amount: number
}

interface DataUser {
    dni: number
    email: string
    firstname: string
    lastname: string
    password: string
    phone: string
}

export default async function Perfil() {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')

    const response_account = await fetch(
        'https://digitalmoney.digitalhouse.com/api/account',
        {
            method: 'GET',
            headers: {
                Authorization: token?.value || '',
                accept: 'application/json',
            },
        }
    )

    const account: Account = await response_account.json()

    const response_data = await fetch(
        `https://digitalmoney.digitalhouse.com/api/users/${account.user_id}`,
        {
            method: 'GET',
            headers: {
                Authorization: token?.value || '',
                accept: 'application/json',
            },
        }
    )

    const dataUser: DataUser = await response_data.json()

    console.log({dataUser});
    

    const user = {
        user_id: account.user_id,
        cvu: account.cvu,
        alias: account.alias,
        email: dataUser.email,
        firstname: dataUser.firstname,
        lastname: dataUser.lastname,
        cuit: '990482929064819024',
        phone: dataUser.phone,
    }

    return (
        <>
            <Menu />
            <main className={styles.main}>
                <section className={styles.top}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        className={styles.top__arrow}
                    >
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                    </svg>
                    <p className={styles.top__text}>Perfil</p>
                </section>
                <section className={styles.info}>
                    <h2 className={styles.info__title}>Tus datos</h2>
                    {[
                        {
                            id: 'email',
                            label: 'Email',
                            type: 'email',
                            value: user.email,
                        },
                        {
                            id: 'name',
                            label: 'Nombre y apellido',
                            type: 'text',
                            hasIcon: true,
                            value: user.firstname,
                        },
                        {
                            id: 'cuit',
                            label: 'CUIT',
                            type: 'number',
                            hasIcon: true,
                            value: user.cuit,
                        },
                        {
                            id: 'phone',
                            label: 'Teléfono',
                            type: 'tel',
                            hasIcon: true,
                            value: user.phone,
                        },
                        {
                            id: 'password',
                            label: 'Contraseña',
                            type: 'password',
                            hasIcon: true,
                            value: '1234567890',
                        },
                    ].map(({ id, label, type, hasIcon, value }) => (
                        <div key={id} className={styles.info__group}>
                            <label className={styles.info__label} htmlFor={id}>
                                {label}
                            </label>
                            <input
                                className={styles.info__input}
                                id={id}
                                name={id}
                                type={type}
                                defaultValue={value}
                            />
                            {hasIcon && (
                                <svg
                                    className={styles.info__svg}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 -960 960 960"
                                >
                                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                                </svg>
                            )}
                        </div>
                    ))}
                </section>
                <section className={styles.button}>
                    <button className={styles.button__btn}>
                        <span>Gestioná los medios de pago</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className={styles.top__arrow}
                        >
                            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                        </svg>
                    </button>
                </section>
                <Data cvu={user.cvu} alias={user.alias} />
            </main>
            <Footer />
        </>
    )
}

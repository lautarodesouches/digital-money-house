import styles from './page.module.css'
import Data from './data'
import { getUser } from '@/services/getUser'
import { getAccount } from '@/services/getAccount'
import { getToken } from '@/services/getToken'
import { ROUTES } from '@/routes'
import { redirect } from 'next/navigation'

export default async function Perfil() {
    const token = await getToken()

    const account = await getAccount(token)

    if (!account) return redirect(ROUTES.INICIAR_SESION)

    const user = await getUser(token, account.user_id)

    if (!user) return redirect(ROUTES.INICIAR_SESION)

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
                        id: 'dni',
                        label: 'DNI',
                        type: 'number',
                        hasIcon: true,
                        value: user.dni,
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
            <Data cvu={account.cvu} alias={account.alias} />
        </>
    )
}

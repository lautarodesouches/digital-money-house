'use client'
import { Footer, Menu } from '@/components'
import styles from './page.module.css'
import { useRef } from 'react'
export default function Perfil() {
    const refs = useRef<Record<string, HTMLElement | null>>({}) // Almacena referencias dinámicamente

    const dataItems = [
        { label: 'CVU', value: '0000002100075320000000' },
        { label: 'Alias', value: 'estealiasnoexiste' },
    ]

    const copyToClipboard = (key: string) => {        
        if (refs.current[key]) {
            navigator.clipboard
                .writeText(refs.current[key].innerText)
                .then(() => alert(`${key} copiado!`)) // Opcional
                .catch(err => console.error('Error al copiar: ', err))
        }
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
                            value: 'mauriciobrito@digitalhouse.com',
                        },
                        {
                            id: 'name',
                            label: 'Nombre y apellido',
                            type: 'text',
                            hasIcon: true,
                            value: 'Mauricio Brito',
                        },
                        {
                            id: 'cuit',
                            label: 'CUIT',
                            type: 'number',
                            hasIcon: true,
                            value: '20350269798',
                        },
                        {
                            id: 'phone',
                            label: 'Teléfono',
                            type: 'tel',
                            hasIcon: true,
                            value: '1146730989',
                        },
                        {
                            id: 'password',
                            label: 'Contraseña',
                            type: 'password',
                            hasIcon: true,
                            value: 'test',
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
                <section className={styles.data}>
                    <p className={styles.data__title}>
                        Copia tu cvu o alias para ingresar o transferir dinero
                        desde otra cuenta
                    </p>
                    {dataItems.map(({ label, value }) => (
                        <div key={label} className={styles.data__container}>
                            <div className={styles.data__div}>
                                <p className={styles.data__text}>{label}</p>
                            </div>
                            <div className={styles.data__div}>
                                <svg
                                    className={styles.data__svg}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => copyToClipboard(label)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <path
                                        d="M21 7.5V21H7.5V7.5H21ZM21 6H7.5C7.10218 6 6.72064 6.15804 6.43934 6.43934C6.15804 6.72064 6 7.10218 6 7.5V21C6 21.3978 6.15804 21.7794 6.43934 22.0607C6.72064 22.342 7.10218 22.5 7.5 22.5H21C21.3978 22.5 21.7794 22.342 22.0607 22.0607C22.342 21.7794 22.5 21.3978 22.5 21V7.5C22.5 7.10218 22.342 6.72064 22.0607 6.43934C21.7794 6.15804 21.3978 6 21 6Z"
                                        fill="#C1FD35"
                                    />
                                    <path
                                        d="M3 13.5H1.5V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H13.5V3H3V13.5Z"
                                        fill="#C1FD35"
                                    />
                                </svg>
                            </div>
                            <div className={styles.data__div}>
                                <p
                                    ref={el => {
                                        refs.current[label] = el;
                                    }}
                                    className={styles.data__number}
                                >
                                    {value}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}

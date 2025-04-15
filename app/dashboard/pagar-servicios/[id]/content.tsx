'use client'
import { ButtonPrimary, List } from '@/components'
import styles from './page.module.css'
import { ServiceType, TransactionType } from '@/interfaces'
import { useState } from 'react'
import createTransaction from '@/services/createTransaction'
import Success from './_components/Success'
import Error from './_components/Error'

interface Props {
    service: ServiceType
    account: string
    cards: {
        id: number
        number: string
    }[]
}

interface Form {
    account: string
    card: number | null
}

export default function Content({ service, account, cards }: Props) {
    const [step, setStep] = useState(1)
    const [error, setError] = useState(null)
    const [form, setForm] = useState<Form>({
        account,
        card: null,
    })
    const [response, setResponse] = useState<TransactionType>({
        id: 0,
        account_id: 0,
        type: '',
        description: '',
        amount: 0,
        dated: '',
    })

    const handleNext = () => {
        setStep(prev => prev + 1)
    }

    const handleSelectAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, account: e.target.value }))
    }

    const handleSelectCard = (id: number) => {
        setForm(prev => ({ ...prev, card: id }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const body = {
            amount: parseInt(`-${service.invoice_value}`),
            dated: new Date().toISOString(),
            description: service.name,
        }

        const response = await createTransaction(form.account, body)

        if (response.error) return setError(response.error)

        setResponse(response)

        handleNext()
    }

    if (error) return <Error />

    if (response.dated && form.card)
        return (
            <Success
                card={form.card}
                date={response.dated}
                description={response.description}
                amount={response.amount}
            />
        )

    return (
        <>
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <section className={styles.section}>
                        <div className={styles.one__div}>
                            <h2 className={styles.one__title}>
                                Número de cuenta sin el primer 2
                            </h2>
                            <input
                                className={styles.one__input}
                                type="number"
                                defaultValue={parseInt(account)}
                                id="account"
                                name="account"
                                onChange={handleSelectAccount}
                            />
                        </div>
                        <div className={styles.button__container}>
                            <ButtonPrimary
                                onClick={handleNext}
                                disabled={!form.account}
                            >
                                Continuar
                            </ButtonPrimary>
                        </div>
                    </section>
                )}
                {step === 2 && (
                    <section className={styles.section}>
                        <div className={styles.two}>
                            <span className={styles.two__span}>
                                Ver detalle del pago
                            </span>
                            <h2 className={styles.two__title}>
                                {service.name}
                            </h2>
                            <div className={styles.two__div}>
                                <p className={styles.two__text}>
                                    Total a pagar
                                </p>
                                <p className={styles.two__text}>
                                    ${service?.invoice_value}
                                </p>
                            </div>
                        </div>
                        <List
                            title="Tus tarjetas"
                            content={cards}
                            center={card => `Terminada en ${card.number}`}
                            right={card => (
                                <input
                                    type="radio"
                                    name="card"
                                    value={card.id}
                                    className={styles.two__input}
                                    onChange={() => handleSelectCard(card.id)}
                                />
                            )}
                        />
                        <div className={styles.button__container}>
                            <ButtonPrimary disabled={!form.card} type="submit">
                                Pagar
                            </ButtonPrimary>
                        </div>
                    </section>
                )}
            </form>
        </>
    )
}

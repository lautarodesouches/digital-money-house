'use client'
import { ServiceType, TransactionType } from '@/interfaces'
import { useState } from 'react'
import createTransaction from '@/services/createTransaction'
import Success from './_components/Success'
import Error from './_components/Error'
import StepOne from './_components/StepOne'
import StepTwo from './_components/StepTwo.tsx'

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
    card: string | null
}

const AccountError = {
    title: 'No encontramos facturas asociadas a este dato',
    text: 'Revisá el dato ingresado. Si es correcto, es posible que la empresa aún no haya cargado tu factura.',
    button: 'Revisar dato',
}

const UnknownError = {
    title: 'Hubo un problema con tu pago',
    text: 'Puede deberse a fondos insuficientes. Comunicate con la entidad emisora de la tarjeta',
    button: 'Volver a intentarlo',
}

type Error =
    | undefined
    | {
          title: string
          text: string
          button: string
      }

export default function Content({ service, account, cards }: Props) {
    const [step, setStep] = useState(1)
    const [error, setError] = useState<Error>(undefined)
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

    const handleSelectCard = (card: string) => {
        setForm(prev => ({ ...prev, card }))
    }

    const handleError = (error: string) => {
        if (error === 'Not allowed to access account') setError(AccountError)
        else setError(UnknownError)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = {
            amount: parseInt(`-${service.invoice_value}`),
            dated: new Date().toISOString(),
            description: service.name,
        }

        const response = await createTransaction(form.account, data)

        if (response.error) return handleError(response.error)

        setResponse(response)

        handleNext()
    }

    if (error) return <Error {...error} />

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
                    <StepOne
                        account={account}
                        disabled={!form.account}
                        handleNext={handleNext}
                        handleSelectAccount={handleSelectAccount}
                    />
                )}
                {step === 2 && (
                    <StepTwo
                        name={service.name}
                        value={service.invoice_value || '0'}
                        cards={cards}
                        disabled={!form.card}
                        handleSelectCard={handleSelectCard}
                    />
                )}
            </form>
        </>
    )
}

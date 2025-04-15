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

    const handleSelectCard = (card: string) => {
        setForm(prev => ({ ...prev, card }))
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

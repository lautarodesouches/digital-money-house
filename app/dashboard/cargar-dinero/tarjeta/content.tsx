'use client'
import styles from './page.module.css'
import { useState } from 'react'
import { AccountType, CardType } from '@/interfaces'
import createDeposit from '@/services/createDeposit'
import StepOne from './_components/stepOne'
import StepTwo from './_components/stepTwo'
import StepThree from './_components/stepThree'
import StepFour from './_components/stepFour'

interface Props {
    cards: CardType[]
    account: AccountType
}

interface ResponseSuccess {
    account_id: number
    amount: number
    dated: string
    description: string
    destination: string
    id: number
    origin: string
    type: string
}

interface ResponseError {
    error: string
}

export default function Content({ cards, account }: Props) {
    const [step, setStep] = useState(0)

    const [data, setData] = useState({
        origin: cards[0].number_id.toString(),
        destination: account.cvu,
        dated: new Date().toISOString(),
        amount: 0,
    })

    const [depositResponse, setDepositResponse] = useState<
        ResponseSuccess | ResponseError
    >({ error: 'unknown' })

    const handleNext = () => {
        setStep(prev => prev + 1)
    }

    const handleBack = () => {
        setStep(prev => prev - 1)
    }

    const handleSelectCard = (cardNumber: number) => {
        setData(prev => ({
            ...prev,
            origin: cardNumber.toString(),
        }))
    }

    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '')
        const amount = parseInt(value, 10) || 0
        setData(prev => ({
            ...prev,
            amount: amount,
        }))
    }

    const handleSubmit = async () => {
        const response = await createDeposit(data)

        setDepositResponse(response)

        handleNext()
    }

    return (
        <div className={styles.container}>
            {step === 0 && (
                <StepOne
                    cards={cards}
                    origin={data.origin}
                    handleNext={handleNext}
                    handleSelectCard={handleSelectCard}
                />
            )}
            {step === 1 && (
                <StepTwo
                    amount={data.amount}
                    handleAmount={handleAmount}
                    handleNext={handleNext}
                />
            )}
            {step === 2 && (
                <StepThree
                    amount={data.amount}
                    cvu={account.cvu}
                    handleBack={handleBack}
                    handleSubmit={handleSubmit}
                />
            )}
            {step === 3 && 'account_id' in depositResponse && (
                <StepFour
                    id={depositResponse.id}
                    amount={depositResponse.amount}
                    dated={depositResponse.dated}
                    destination={depositResponse.destination}
                    handleBack={handleBack}
                />
            )}
        </div>
    )
}

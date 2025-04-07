'use client'
import { useState, useTransition } from 'react'
import styles from './page.module.css'
import { formatCardNumber } from '@/utils/formatCardNumber'
import formatCardExpiration from '@/utils/formatCardExpiration'
import { createCard } from '@/services/createCard'
import { useRouter } from 'next/navigation'


interface CardData {
    number_id: string
    first_last_name: string
    expiration_date: string
    cod: string
}

const MAX_LENGTHS = {
    number_id: 19,
    first_last_name: 20,
    expiration_date: 6,
    cod: 3,
}

export default function Content() {
    const [isPending, startTransition] = useTransition()

    const router = useRouter()

    const [cardData, setCardData] = useState<CardData>({
        number_id: '',
        first_last_name: '',
        expiration_date: '',
        cod: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        if (!(name in cardData)) return

        const input =
            name === 'first_last_name' ? value : value.replace(/\D/g, '') // Solo números

        if (name === 'expiration_date') {
            // Máximo 6 dígitos: MMYYYY
            if (input.length > 6) return

            setCardData(prev => ({
                ...prev,
                [name]: formatCardExpiration(input),
            }))
            return
        }

        // Limitar longitud para los demás campos
        const maxLength = MAX_LENGTHS[name as keyof CardData]
        if (input.length > maxLength) return

        setCardData(prev => ({
            ...prev,
            [name]: input,
        }))
    }

    const handleSubmit = (formData: FormData) => {
        startTransition(async () => {
            const success = await createCard(formData)

            if (success) router.push('/dashboard/tarjetas')
        })
    }

    return (
        <>
            <section className={styles.card}>
                <div className={styles.card__card}>
                    <div className={styles.card__chip} />
                    <div className={styles.card__numbers}>
                        {formatCardNumber(
                            cardData.number_id || '**** **** **** ****'
                        )
                            .split(' ')
                            .map((num, index) => (
                                <span
                                    key={index}
                                    className={styles.card__number}
                                >
                                    {num}
                                </span>
                            ))}
                    </div>
                    <div className={styles.card__info}>
                        <span className={styles.card__name}>
                            {cardData.first_last_name || 'NOMBRE DEL TITULAR'}
                        </span>
                        <span className={styles.card__expiry}>
                            {cardData.expiration_date || 'MM/YY'}
                        </span>
                    </div>
                </div>
            </section>

            <form className={styles.card__form} action={handleSubmit}>
                <input
                    name="number_id"
                    className={styles.card__input}
                    placeholder="Número de la tarjeta*"
                    type="number"
                    value={cardData.number_id}
                    onChange={handleChange}
                />
                <input
                    name="first_last_name"
                    className={styles.card__input}
                    placeholder="Nombre y apellido*"
                    type="text"
                    value={cardData.first_last_name}
                    onChange={handleChange}
                />
                <input
                    name="expiration_date"
                    className={styles.card__input}
                    placeholder="Fecha de vencimiento (MMYY)*"
                    type="text"
                    value={cardData.expiration_date}
                    onChange={handleChange}
                />
                <input
                    name="cod"
                    className={styles.card__input}
                    placeholder="Código de seguridad*"
                    type="password"
                    value={cardData.cod}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className={styles.card__button}
                    disabled={isPending}
                >
                    {isPending ? 'Cargando...' : 'Continuar'}
                </button>
            </form>
        </>
    )
}

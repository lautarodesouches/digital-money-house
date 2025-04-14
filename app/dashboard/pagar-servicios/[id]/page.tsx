import { getServiceById } from '@/services/getServiceById'
import Content from './content'
import { getAccount } from '@/services/getAccount'
import { getToken } from '@/services/getToken'
import { ROUTES } from '@/routes'
import { redirect } from 'next/navigation'
import { getCards } from '@/services/getCards'

export default async function Service({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    const token = await getToken()

    const account = await getAccount(token)

    if (!account) return redirect(ROUTES.INICIAR_SESION)

    const service = await getServiceById(id)

    const cards = await getCards(token, account)

    const cardsData = cards.map(card => ({
        id: card.id,
        number: card.number_id.toString().slice(-4),
    }))

    return (
        <>
            {service ? (
                <Content service={service} account={account.id.toString()} cards={cardsData} />
            ) : (
                'No se encontró ese servicio'
            )}
        </>
    )
}

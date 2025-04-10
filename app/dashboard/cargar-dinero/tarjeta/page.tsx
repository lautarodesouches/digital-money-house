import { getToken } from '@/services/getToken'
import { getAccount } from '@/services/getAccount'
import { ROUTES } from '@/routes'
import { redirect } from 'next/navigation'
import Content from './content'
import { getCards } from '@/services/getCards'

export default async function TopUpCard() {
    const token = await getToken()

    const account = await getAccount(token)

    if (!account) return redirect(ROUTES.INICIAR_SESION)

    const cards = await getCards(token, account)

    return <Content cards={cards} account={account} />
}

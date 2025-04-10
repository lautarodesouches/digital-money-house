import Content from './content'
import { getToken } from '@/services/getToken'
import { getAccount } from '@/services/getAccount'
import { redirect } from 'next/navigation'
import { ROUTES } from '@/routes'
import { Title } from '@/components'

export default async function NewCard() {
    const token = await getToken()

    const account = await getAccount(token)

    if (!account) return redirect(ROUTES.INICIAR_SESION)

    return (
        <>
            <Title>Tarjetas</Title>
            <Content />
        </>
    )
}

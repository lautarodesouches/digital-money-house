import { CvuAlias } from '@/components'
import { ROUTES } from '@/routes'
import { getAccount } from '@/services/getAccount'
import { getToken } from '@/services/getToken'
import { redirect } from 'next/navigation'

export default async function TopUpTransfer() {
    const token = await getToken()

    const account = await getAccount(token)

    if (!account) return redirect(ROUTES.INICIAR_SESION)

    return <CvuAlias cvu={account.cvu} alias={account.alias} />
}

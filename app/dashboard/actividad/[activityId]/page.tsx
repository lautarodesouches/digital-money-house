import { ROUTES } from '@/routes'
import { getAccount } from '@/services/getAccount'
import { getToken } from '@/services/getToken'
import { getActivityById } from '@/services/getActivityById'
import { redirect } from 'next/navigation'
import Content from './content'

type Params = Promise<{ activityId: string }>

export default async function Activity(props: { params: Params }) {
    // Token, account info
    const token = await getToken()
    const account = await getAccount(token)
    if (!account) return redirect(ROUTES.INICIAR_SESION)

    // Params
    const params = await props.params

    const activityId = params.activityId

    // Fetch
    const activity = await getActivityById(token, account.id, activityId)

    if (activity === null) return redirect(ROUTES.ACTIVIDAD)

    return <Content activity={activity} />
}

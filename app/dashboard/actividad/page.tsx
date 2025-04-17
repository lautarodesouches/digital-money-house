import { getToken } from '@/services/getToken'
import { getAccount } from '@/services/getAccount'
import { redirect } from 'next/navigation'
import { ROUTES } from '@/routes'
import { getAllActivityFiltered } from '@/services/getAllActivityFiltered'
import Content from './content'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function ActivityPage(props: {
    searchParams: SearchParams
}) {
    const searchParams = await props.searchParams

    const { search, page, date } = searchParams

    // Token, account info
    const token = await getToken()
    const account = await getAccount(token)
    if (!account) return redirect(ROUTES.INICIAR_SESION)

    // Activity
    const activity = await getAllActivityFiltered(token, account, search, date)

    // Pagination
    const pageSize = 10
    const currentPage = Math.max(Number(page) || 1, 1)
    const totalPages = Math.ceil(activity.length / pageSize)
    const paginatedActivity = activity.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    )

    return (
        <Content
            activity={paginatedActivity}
            currentPage={currentPage}
            totalPages={totalPages}
        />
    )
}

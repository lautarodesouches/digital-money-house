import styles from './page.module.css'
import { getToken } from '@/services/getToken'
import { getAccount } from '@/services/getAccount'
import { redirect } from 'next/navigation'
import { ROUTES } from '@/routes'
import Activity from './activity'
import { Search } from '@/components'
import { getActivityFiltered } from '@/services/getActivityFiltered'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function ActivityPage(props: {
    searchParams: SearchParams
}) {
    const searchParams = await props.searchParams

    const { search, page, date} = searchParams

    // Token, account info
    const token = await getToken()
    const account = await getAccount(token)
    if (!account) return redirect(ROUTES.INICIAR_SESION)

    // Activity
    const activity = await getActivityFiltered(token, account, search, date)

    // Pagination
    const pageSize = 10
    const currentPage = Math.max(Number(page) || 1, 1)
    const totalPages = Math.ceil(activity.length / pageSize)
    const paginatedActivity = activity.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    )

    return (
        <>
            <section className={styles.top}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className={styles.top__arrow}
                >
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
                <p className={styles.top__text}>Tu actividad</p>
            </section>
            <Search />
            <Activity
                activity={paginatedActivity}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </>
    )
}

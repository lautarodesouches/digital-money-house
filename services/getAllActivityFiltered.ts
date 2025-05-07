import { AccountType } from '@/interfaces'
import { getAllActivity } from './getAllActivity'
import { isDateInRange } from '@/utils/isDateInRange'

export async function getAllActivityFiltered(
    token: string,
    account: AccountType,
    search?: string | string[],
    date?: string | string[]
) {
    const allActivity = await getAllActivity(token, account)

    const query = typeof search === 'string' ? search.trim().toLowerCase() : ''
    const dateFilter = typeof date === 'string' ? date : undefined

    const filteredAndSorted = allActivity
        .filter(({ description, dated }) => {
            const matchesSearch =
                !query || description.toLowerCase().includes(query)
            const matchesDate =
                !dateFilter || isDateInRange(new Date(dated), dateFilter)
            return matchesSearch && matchesDate
        })
        .sort(
            (a, b) => new Date(b.dated).getTime() - new Date(a.dated).getTime()
        )

    return filteredAndSorted
}

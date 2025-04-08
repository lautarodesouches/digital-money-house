import { AccountType } from '@/interfaces'
import { getActivity } from './getActivity'
import { isDateInRange } from '@/utils/isDateInRange'

export async function getActivityFiltered(
    token: string,
    account: AccountType,
    search: string | string[] | undefined,
    date: string | string[] | undefined
) {
    // Fetch
    const allActivity = await getActivity(token, account)
    
    // Filter
    const query = typeof search === 'string' ? search.toLowerCase().trim() : ''
    const dateFilter = typeof date === 'string' ? date : undefined

    const filteredActivity = allActivity.filter(item => {
        const matchesSearch = !query || item.description.toLowerCase().includes(query)
        const matchesDate = !dateFilter || isDateInRange(new Date(item.dated), dateFilter)
        return matchesSearch && matchesDate
    })

    // Sort
    filteredActivity.sort((a, b) => {
        const dateA = new Date(a.dated).getTime()
        const dateB = new Date(b.dated).getTime()
        return dateB - dateA
    })

    return filteredActivity
}

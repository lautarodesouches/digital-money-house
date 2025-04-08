export function isDateInRange(date: Date, range: string): boolean {
    const now = new Date()

    const startOfToday = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    )

    const oneDay = 24 * 60 * 60 * 1000

    switch (range) {
        case 'hoy':
            return date >= startOfToday
        case 'ayer': {
            const yesterday = new Date(startOfToday.getTime() - oneDay)
            return date >= yesterday && date < startOfToday
        }
        case 'última_semana':
            return date >= new Date(startOfToday.getTime() - 7 * oneDay)
        case 'últimos_15_días':
            return date >= new Date(startOfToday.getTime() - 15 * oneDay)
        case 'último_mes':
            return (
                date >=
                new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
            )
        case 'último_año':
            return (
                date >=
                new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
            )
        default:
            return true
    }
}

export function getWeekday(dateString: string) {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('es-AR', { weekday: 'long' }).format(date)
}

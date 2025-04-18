export default function formatDate(date: string) {
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }

    return (
        new Date(date).toLocaleString('es-AR', options).replace(',', ' a las') +
        ' hs'
    )
}

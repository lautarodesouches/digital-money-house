export default function formatCardExpiration(expirationDate: string) {
    const month = expirationDate.slice(0, 2)
    const year = expirationDate.slice(2)

    return year ? `${month}/${year}` : month
}

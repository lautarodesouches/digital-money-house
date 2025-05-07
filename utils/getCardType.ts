type CardType = 'Visa' | 'MasterCard' | 'Amex' | 'Discover' | 'Unknown'

// Función que toma un número de tarjeta y devuelve el tipo de tarjeta
export const getCardType = (cardNumber: string): CardType => {
    const cleanedCardNumber = cardNumber.replace(/\s+/g, '') // Eliminamos espacios en blanco
    const firstFourDigits = cleanedCardNumber.slice(0, 4) // Tomamos los primeros 4 dígitos

    if (/^4/.test(firstFourDigits)) {
        return 'Visa'
    }
    if (/^5[1-5]/.test(firstFourDigits)) {
        return 'MasterCard'
    }
    if (/^3[47]/.test(firstFourDigits)) {
        return 'Amex'
    }
    if (/^6/.test(firstFourDigits)) {
        return 'Discover'
    }

    return 'Unknown' // Si no coincide con ningún patrón conocido, devolvemos 'Unknown'
}

export const formatDni = (num: string) => {
    const cleaned = num.replace(/\D/g, '') // Elimina todo lo que no sea número
    return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

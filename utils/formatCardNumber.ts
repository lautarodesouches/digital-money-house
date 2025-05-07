export const formatCardNumber = (num: string) =>
    num
        .replace(/\s/g, '')
        .slice(0, 15)
        .replace(/(.{4})/g, '$1 ')
        .trim()

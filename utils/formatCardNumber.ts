export const formatCardNumber = (num: string) =>
    num
        .replace(/\s/g, '')
        .slice(0, 19)
        .replace(/(.{4})/g, '$1 ')
        .trim()

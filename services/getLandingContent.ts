interface LandingType {
    title: string
    subtitle: string
    features: {
        title: string
        description: string
    }[]
}

export async function getLandingContent(): Promise<LandingType> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/landing`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    })

    return response.json()
}

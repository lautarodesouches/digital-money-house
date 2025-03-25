import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
    const cookiesStore = await cookies()

    cookiesStore.delete('token')
    cookiesStore.delete('email')

    return NextResponse.json({ message: 'Sesión cerrada' }, { status: 200 })
}

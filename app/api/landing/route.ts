import { NextResponse } from 'next/server'

export async function GET() {
    const data = {
        title: 'De ahora en adelante, hacés más con tu dinero',
        subtitle: 'Tu nueva <strong>billetera</strong> virtual',
        features: [
            {
                title: 'Transferí dinero',
                description:
                    'Desde Digital Money House vas a poder transferir dinero a otras cuentas, así como también recibir transferencias y nuclear tu capital en nuestra billetera virtual.',
            },
            {
                title: 'Pago de servicios',
                description:
                    'Pagá mensualmente los servicios en 3 simples clicks. Fácil, rápido y conveniente. Olvidate de las facturas en papel.',
            },
        ],
    }

    return NextResponse.json(data)
}

import { NextRequest, NextResponse } from 'next/server'
import { ROUTES } from './app/routes'

export function middleware(request: NextRequest) {

    console.log('test');
    

    const token = request.cookies.get('token')

    if (
        (request.nextUrl.pathname !== ROUTES.landing &&
            request.nextUrl.pathname !== ROUTES.ingreso &&
            request.nextUrl.pathname !== ROUTES.crearCuenta) &&
        !token
    ) {
        return NextResponse.redirect(new URL(ROUTES.landing, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Excluir todas las rutas que empiecen con:
         * - api (rutas de API)
         * - _next/static (archivos estáticos)
         * - _next/image (archivos de optimización de imágenes)
         * - favicon.ico, sitemap.xml, robots.txt (archivos de metadatos)
         * - imágenes de cualquier tipo (jpg, jpeg, png, gif, svg, webp, etc.)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\.jpg|.*\.jpeg|.*\.png|.*\.gif|.*\.svg|.*\.webp).*)',
    ],
};


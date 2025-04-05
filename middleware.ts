import { NextRequest, NextResponse } from 'next/server'
import { ROUTES } from './routes'

export function middleware(request: NextRequest) {    

    const token = request.cookies.get('token')

    if (
        (request.nextUrl.pathname !== ROUTES.LANDING &&
            request.nextUrl.pathname !== ROUTES.INICIAR_SESION &&
            request.nextUrl.pathname !== ROUTES.CREAR_CUENTA &&
            request.nextUrl.pathname !== ROUTES.CREAR_CUENTA_EXITO) &&
        !token
    ) {
        return NextResponse.redirect(new URL(ROUTES.LANDING, request.url))
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


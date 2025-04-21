import { Suspense } from 'react'
import Content from './content'

export default function Login() {
    return (
        <Suspense fallback={<div>Cargando login...</div>}>
            <Content />
        </Suspense>
    )
}

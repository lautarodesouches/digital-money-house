import { getServices } from '@/services/getServices'
import Content from './content'

export default async function PagarServicios() {
    const allServices = await getServices()

    const lastTenServices = [...allServices]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 10)

    return <Content servicesServer={lastTenServices} />
}

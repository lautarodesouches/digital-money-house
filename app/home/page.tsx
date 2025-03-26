'use client'
import styles from './page.module.css'
import { Menu } from '@/components'

export default function Home() {

    return (
        <>
            <Menu name='Manuel Brito' />
            <main className={styles.main}></main>
        </>
    )
}

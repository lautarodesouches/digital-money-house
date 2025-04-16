import styles from './styles.module.css'

export default function Footer() {
    return <footer className={styles.footer}>© {new Date().getFullYear()} Digital Money House</footer>
}

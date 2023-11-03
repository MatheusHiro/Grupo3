import Link from 'next/link'
import styles from '../../../styles/Home.module.css'

export default function Header() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/">HOME</Link>
                    <Link href="iniciais">INICIAIS</Link>
                    <Link href="sobre">SOBRE</Link>
                    <Link href="forms">FORMULARIO</Link>
                </li>
            </ul>
        </nav>
    )
}
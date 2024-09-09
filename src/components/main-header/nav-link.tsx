'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './nav-link.module.css'

export const NavLink = ({ href, children }:{ href: string, children:React.ReactNode }) => {
    const pathname = usePathname()
    return (
        <Link
            href={href}
            className={`${ styles['nav-link'] } ${pathname.startsWith(href) ? styles.active : undefined}`}
        >
            { children }
        </Link>
    )
}

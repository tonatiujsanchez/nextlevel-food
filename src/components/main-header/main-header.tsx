'use client'
import Image from "next/image"
import Link from "next/link"
import { MainHeaderBg } from "./main-header-bg"
import logoImg from '@/assets/logo.png'
import styles from './main-header.module.css'

export const MainHeader = () => {
    return (
        <>
            <MainHeaderBg />
            <header className={ styles.header }>
                <Link href="/" className={ styles.logo }>
                    <Image
                        // src={'/images/logo.png'}
                        src={logoImg}
                        alt="A plate with food on it"
                        width={128}
                        height={128}
                        priority
                    />
                    NextLevel Food
                </Link>
                <nav className={ styles.nav }>
                    <ul>
                        <li>
                            <Link href="/meals">Brouse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

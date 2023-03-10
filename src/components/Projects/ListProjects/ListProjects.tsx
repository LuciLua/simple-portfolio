"use client"

import Link from "next/link"
import { Suspense, useState } from "react"
import styles from "./ListProjects.module.scss"

function ListProjects() {

    const [projects, setProjects] = useState(false)

    return (
        <div className={styles.container}>
            <button onClick={() => { projects ? setProjects(false) : setProjects(true) }} >See more projects</button>
            {projects ?
                <Suspense fallback={<p>Loading project...</p>}>
                    <ul>
                        <li><Link href={'https://pokedeex.vercel.app/'}>Pokedex</Link></li>
                        <li><Link href={'https://valorant-tricks.vercel.app/'}>Valorant Tricks</Link></li>
                        <li><Link href={'https://blog-with-local-storage.vercel.app/'}>Blog with Local Storage</Link></li>
                        <li><Link href={'https://notein.vercel.app/'}>NoteIn</Link></li>
                        <li><Link href={'https://siteecommerce.vercel.app/'}>Site E-commerce: Sorvetes Store</Link></li>
                        <li><Link href={'https://desktop-fake.vercel.app/'}>Desktop Fake</Link></li>
                        <li><Link href={'https://compare-orpin.vercel.app/'}>Github Compare followers/following </Link></li>
                        <li><Link href={'https://www.gamejs-rps.tk/'}>Rock, Paper and Scissors</Link></li>
                    </ul >
                </Suspense>
                : null}
        </div>
    )
}

export default ListProjects
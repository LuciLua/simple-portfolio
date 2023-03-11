import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./ListProjects.module.scss"


export default function Lis() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const projectsData = [
        { name: 'Pokedex', href: 'https://pokedeex.vercel.app/' },
        { name: 'Valorant Tricks', href: 'https://valorant-tricks.vercel.app/' },
        { name: 'Blog with Local Storage', href: 'https://blog-with-local-storage.vercel.app/' },
        { name: 'NoteIn', href: 'https://notein.vercel.app/' },
        { name: 'Site E-commerce: Sorvetes Store', href: 'https://siteecommerce.vercel.app/' },
        { name: 'Desktop Fake', href: 'https://desktop-fake.vercel.app/' },
        { name: 'Github Compare followers/following', href: 'https://compare-orpin.vercel.app/' },
        { name: 'Rock, Paper and Scissors', href: 'https://www.gamejs-rps.tk/' },
    ]

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 600));
            setData(projectsData);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <ul>
                {Array.from({ length: 5 }, () => (
                <li className={styles.li_load}><Link href={'/'}>Loading...</Link></li>
                ))}
            </ul>
        );
    }
    return <ul>{data.map(project => <li><Link href={project.href}>{project.name}</Link></li>)}</ul>
}
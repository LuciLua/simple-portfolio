import Link from "next/link";

export default function Lis() {
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
    return <ul>{projectsData.map(project => <li><Link href={project.href}>{project.name}</Link></li>)}</ul>
}
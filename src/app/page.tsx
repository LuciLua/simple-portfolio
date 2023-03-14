import { Suspense } from "react"
import About from "../components/About/About"
import Apresentation from "../components/Apresentation/Apresentation"
import Contact from "../components/Contact/Contact"
import ListProjects from "../components/Projects/ListProjects/ListProjects"
import Projects from "../components/Projects/Projects"
import styles from "../styles/pages/HomePage.module.scss"


// const loading = async () => {
//     await new Promise(resolve => setTimeout(resolve, 3000))
// }

// export default async function HomePage() {
export default function HomePage() {

    // await loading()

    return (
        <div className={styles.container}>
            <Apresentation />
            <Suspense fallback={<p className="load"></p>}>
                {/* @ts-ignore */}
                <Projects />
            </Suspense>
            <About />
            <Contact />
        </div>
    )
}
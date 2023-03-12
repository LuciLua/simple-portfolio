import About from "../components/About/About"
import Apresentation from "../components/Apresentation/Apresentation"
import Contact from "../components/Contact/Contact"
import ListProjects from "../components/Projects/ListProjects/ListProjects"
import Projects from "../components/Projects/Projects"
import styles from "../styles/pages/HomePage.module.scss"

export default function HomePage() {
    return (
        <div className={styles.container}>
            <Apresentation />
            <Projects />
            <ListProjects />
            <About />
            <Contact />
        </div>
    )
}
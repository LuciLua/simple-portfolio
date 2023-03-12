// 'use client'

import ListProjects from "./ListProjects/ListProjects"
import styles from "./Projects.module.scss"
import ProjectsCards from "./ProjectsCards"
// import { fadeIn, textVariant } from "../../utils/motion";


const loading = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
}

async function Projects() {

    await loading()

    return (
        <>
            <div className={styles.container} id="projects">
                <h1>My projects</h1>
                <ProjectsCards />
            </div>
            <ListProjects />
        </>
    )
}

export default Projects
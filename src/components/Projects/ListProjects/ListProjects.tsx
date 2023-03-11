"use client"

import { useState, lazy } from "react"
import styles from "./ListProjects.module.scss"


const Lis = lazy(() => import('./Lis'));

function ListProjects() {

    const [projects, setProjects] = useState(false)

    return (
        <div className={styles.container}>
            <button onClick={() => { projects ? setProjects(false) : setProjects(true) }} >
                See more projects
            </button>
            {projects ? <Lis /> : null}
        </div>
    )
}

export default ListProjects
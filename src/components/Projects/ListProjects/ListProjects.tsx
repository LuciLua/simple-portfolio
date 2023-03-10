"use client"

import { useState } from "react"
import Lis from "./Lis"
import styles from "./ListProjects.module.scss"

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
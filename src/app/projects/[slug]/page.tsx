'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "../../../styles/pages/Project.module.scss"

type ProjectType = {
    id: string,
    title: string,
    href: string,
    description: string
}

export default function Project({ params }) {

    const [project, setProject] = useState<ProjectType>()

    const fetchData = async () => {
        const data = await fetch('http://localhost:3000/db/projects.json')
        const result = await data.json()
        const projectsData = await result.projects
        const project = await projectsData.find(project => project.id === params.slug)
        setProject(project)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className={styles.container}>
            {project ?
                <>
                    <h1>
                        {project.title}
                    </h1>
                    <h2>{project.description}</h2>
                    <div className={styles.c_img}>
                    <Image fill src={`/${project.id}_preview.png`} alt={project.title}/>
                    </div>
                </>
                : null
            }
            {/* <Image src={}/> */}
        </div >
    )
}

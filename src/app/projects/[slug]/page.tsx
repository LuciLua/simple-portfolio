'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "../../../styles/pages/Project.module.scss"

import ProjectType from "../../../types/project"

export default function Project({ params }) {

    const [project, setProject] = useState<ProjectType>()

    const fetchData = async () => {
        const { hostname } = window.location
        var path;
        if (hostname === 'localhost' || hostname === '192.168.0.106') {
            path = `http://${hostname}:3000/db/projects.json`
        }
        else if (hostname !== 'localhost' && hostname !== '192.168.0.106') {
            path = `https://${hostname}/db/projects.json`
        }


        const data = await fetch(path)
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
                        <Image fill src={`/${project.id}_preview.png`} alt={project.title} />
                    </div>
                </>
                : null
            }
        </div >
    )
}

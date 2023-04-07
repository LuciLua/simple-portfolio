'use client'

import styles from "./Projects.module.scss"

import Tilt from "react-tilt"
import { motion } from "framer-motion";

import { TbBrandReact } from "react-icons/tb"
import { IoLogoPython } from "react-icons/io"
import { IoLogoElectron } from "react-icons/io5"
import { GrStorage } from "react-icons/gr"

import { FcNext } from "react-icons/fc"
import Link from "next/link";

import ProjectType from "../../types/project";

import { useEffect, useState } from 'react'

const ProjectCard = ({ id, title, href, icon, description }) => (
    <Tilt className={styles.project} >
        <motion.h1>
            <motion.a href={href} whileHover={{ x: -2, backgroundColor: "rgb(210, 210, 210, 0.3)" }}>
                {title}
            </motion.a>
            <motion.p className={styles.description}>
                {description}
            </motion.p>
            <Link href={`/projects/${id}`} className={styles.read_more}>
                Read more <span><FcNext /></span>
            </Link>
        </motion.h1>
        <div className={styles.c_preview}>
            {icon}
        </div>
    </Tilt>
);

function ProjectsCards() {

    const [projects, setProjects] = useState([])

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
        setProjects(projectsData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className={styles.projects_grid}>
            <div className={styles.row_one}>
                {projects ?
                    projects.slice(0,2).map((project: ProjectType) => {
                        return (
                            <ProjectCard
                                id={project.id}
                                key={project.id}
                                title={project.title}
                                href={project.href}
                                description={project.description} 
                                icon={<TbBrandReact/>}
                                />
                        )
                    }) : null}
            </div>
            <div className={styles.row_two}>
            {projects ?
                    projects.slice(2,4).map((project: ProjectType) => {
                        return (
                            <ProjectCard
                                id={project.id}
                                icon={<TbBrandReact />}
                                key={project.id}
                                title={project.title}
                                href={project.href}
                                description={project.description} />
                        )
                    }) : null}
            </div>
        </div>
    )
}

export default ProjectsCards
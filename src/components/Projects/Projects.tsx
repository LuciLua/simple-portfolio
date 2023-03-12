'use client'

import styles from "./Projects.module.scss"

import Tilt from "react-tilt"
import { animate, motion } from "framer-motion";
import { TbBrandReact } from "react-icons/tb"
import { IoLogoPython } from "react-icons/io"
import { IoLogoElectron } from "react-icons/io5"
import { GrStorage } from "react-icons/gr"
import { FcNext } from "react-icons/fc"
// import { fadeIn, textVariant } from "../../utils/motion";

function Projects() {

    const ProjectCard = ({ title, imgPath, imgAlt, href, icon, description }) => (
        <Tilt className={styles.project} >
            <motion.h1>
                <motion.a href={href} whileHover={{ x: -2, backgroundColor: "rgb(210, 210, 210, 0.3)" }}>
                    {title}
                </motion.a>
                <motion.p className={styles.description}>
                    {description}
                </motion.p>
                <motion.button className={styles.read_more}>
                    Read more <span><FcNext /></span>
                </motion.button>
            </motion.h1>
            <div className={styles.c_preview}>
                {icon}
                {/* <Image sizes="100" src={imgPath} fill alt={imgAlt} /> */}
            </div>
        </Tilt>
    );

    return (
        <div className={styles.container} id="projects">
            <h1>My projects</h1>
            <div className={styles.projects_grid}>
                <div className={styles.row_one}>
                    <ProjectCard
                        icon={<TbBrandReact />}
                        key={'dognos-project'}
                        title="Dognos"
                        imgPath="/dognos_preview.png"
                        imgAlt="dognos-project"
                        href="https://dognos.vercel.app/"
                        description="design of a social network to share thoughts about music" />
                    <ProjectCard
                        icon={<GrStorage />}
                        key={'todo-list-project'}
                        title="Todo List"
                        imgPath="/todo_preview.png"
                        imgAlt="todo-list-project"
                        href="https://todo-lucilua.vercel.app/"
                        description="todo style list using local storage to store tasks"
                    />
                </div>
                <div className={styles.row_two}>
                    <ProjectCard
                        icon={<IoLogoElectron />}
                        key={'overtherminal_project'}
                        title="Overtherminal"
                        imgPath="/overtherminal_preview.png"
                        imgAlt="overtherminal-project"
                        href="https://github.com/LuciLua/consoleElectron"
                        description="terminal prototype made in electron"
                    />
                    <ProjectCard
                        icon={<IoLogoPython />}
                        key={'CLI-python-requests-project'}
                        title="CLI: Python requests"
                        imgPath="/pythonCLI_preview.png"
                        imgAlt="CLI-python-requests-project"
                        href="https://github.com/LuciLua/python_studies_1/tree/master/requestsCli"
                        description="CLI made in python to send GET and POST requests, return headers, content, cookies, etc..."
                    />
                </div>
            </div>
        </div >
    )
}

export default Projects
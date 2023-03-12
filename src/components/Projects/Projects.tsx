'use client'

import Image from "next/image"
import styles from "./Projects.module.scss"

import Tilt from "react-tilt"
import { motion } from "framer-motion";
// import { fadeIn, textVariant } from "../../utils/motion";

function Projects() {

    const ServiceCard = ({ title, imgPath, imgAlt, href }) => (
        <Tilt className={styles.project} >
            <motion.h1 whileHover={{ x: -2, backgroundColor:"rgb(210, 210, 210, 0.9)" }}>
                <motion.a href={href}>
                    {title}
                </motion.a>
            </motion.h1>
            <div className={styles.c_preview}>
                <Image sizes="100" src={imgPath} fill alt={imgAlt} />
            </div>
        </Tilt>
    );

    return (
        <div className={styles.container} id="projects">
            <h1>My projects</h1>
            <div className={styles.projects_grid}>
                <div className={styles.row_one}>
                    <ServiceCard key={'dognos-project'} title="Dognos" imgPath="/dognos_preview.png" imgAlt="dognos-project" href="https://dognos.vercel.app/" />
                    <ServiceCard key={'todo-list-project'} title="Todo List" imgPath="/todo_preview.png" imgAlt="todo-list-project" href="https://todo-lucilua.vercel.app/" />
                </div>
                <div className={styles.row_two}>
                    <ServiceCard key={'overtherminal_project'} title="Overtherminal" imgPath="/overtherminal_preview.png" imgAlt="overtherminal-project" href="https://github.com/LuciLua/consoleElectron" />
                    <ServiceCard key={'CLI-python-requests-project'} title="CLI: Python requests" imgPath="/pythonCLI_preview.png" imgAlt="CLI-python-requests-project" href="https://github.com/LuciLua/python_studies_1/tree/master/requestsCli" />
                </div>
            </div>
        </div >
    )
}

export default Projects
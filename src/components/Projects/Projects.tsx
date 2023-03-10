import Image from "next/image"
import styles from "./Projects.module.scss"

function Projects() {
    return (
        <div className={styles.container}>
            <h1>My projects</h1>
            <div className={styles.projects_grid}>
                <div className={styles.row_one}>
                    <div className={styles.project}>
                        <h1>Dognos</h1>
                        <div className={styles.c_preview}>
                            <Image sizes="100" src={'/dognos_preview.png'} fill alt="Dognos"/>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <h1>Todo List</h1>                        <div className={styles.c_preview}>
                            <Image sizes="100" src={'/todo_preview.png'} fill alt="ToDo" />
                        </div>
                    </div>
                </div>
                <div className={styles.row_two}>
                    <div className={styles.project}>
                        <h1>Overtherminal</h1>
                        <div className={styles.c_preview}>
                            <Image sizes="100" src={'/overtherminal_preview.png'} fill alt="Overtherminal" />
                        </div>
                    </div>
                    <div className={styles.project}>
                        <h1>
                            CLI: Python requests
                        </h1>
                        <div className={styles.c_preview}>
                            <Image sizes="100" src={'/pythonCLI_preview.png'} fill alt="Overtherminal" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Projects
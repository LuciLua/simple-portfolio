import styles from "../../styles/pages/Projects.module.scss"

export default function ProjectsLayout({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}
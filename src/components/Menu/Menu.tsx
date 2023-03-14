import styles from "./Menu.module.scss"

function Menu() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ul><li><a href='/#apresentation'>LuciLua</a></li></ul>
                <ul>
                    <li><a href='/#apresentation'>Home</a></li>
                    <li><a href='/#projects'>Projects</a></li>
                    <li><a href='/#about'>About</a></li>
                    <li><a href='/#contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
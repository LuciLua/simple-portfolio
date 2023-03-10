import Image from "next/image"
import styles from "./Apresentation.module.scss"

function Apresentation() {
    return (
        <div className={styles.container}>
            <div className={styles.c_img}>
                <Image priority={true} sizes="100" src={'/image.jpg'} alt='my photo' fill />
            </div>
            <div className={styles.c_text}>
                <h1>Hi, I'm Luci</h1>
                <h2>I'm frontend web developer, 3D artist, videomaker and designer</h2>
            </div>
            <button className={styles.btn_email}>Email Me</button>
        </div>
    )
}

export default Apresentation
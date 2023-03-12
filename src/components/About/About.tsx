import styles from "./About.module.scss"

function About() {
    return (
        <div className={styles.container} id="about">
            <div className={styles.content}>
                <h2>LuciLua</h2>
                <h1>About me</h1>
                <p>
                    Eu sou uma desenvolvedora front-end formada em artes e com formação em cinema em andamento. Trabalho em projetos web e audiovisuais, sempre buscando oferecer uma experiência excepcional ao usuário através de interfaces intuitivas e elegantes. Além disso, tenho projetos pessoais em ambas as áreas, que me ajudam a desenvolver minha criatividade e visão crítica. Estou sempre em busca de novos desafios para aprimorar minhas habilidades e conhecimentos.
                </p>
            </div>
        </div>
    )
}

export default About
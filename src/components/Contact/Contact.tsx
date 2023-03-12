'use client'

import Link from "next/link"
import styles from "./Contact.module.scss"

function Contact() {
    return (
        <div className={styles.container} id='contact'>
            <div className={styles.content}>
                <h1>📧 Email Me</h1>
                <form>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" />
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" />
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" />
                    <label htmlFor="msg">Message</label>
                    <textarea id="msg" />
                    <div className={styles.btn_collection}>
                        <button onClick={() => alert('not works yet')} type="submit">Send</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
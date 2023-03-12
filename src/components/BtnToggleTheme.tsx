'use client'

import { useEffect } from "react"

function BtnToggleTheme() {

    function changeDOM(theme) {
        if (theme === 'dark') {
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        }
    }

    function handleTheme() {
        const local_theme = localStorage.getItem('theme_simple')

        if (local_theme === 'dark') {
            localStorage.setItem('theme_simple', 'light')
            changeDOM('light')
        } else {
            localStorage.setItem('theme_simple', 'dark')
            changeDOM('dark')
        }
        console.log(local_theme)
    }

    useEffect(() => {
        const local_theme = localStorage.getItem('theme_simple')
        changeDOM(local_theme)

    })

    return (
        <button
            onClick={handleTheme}
            style={{
                position: "fixed",
                background: 'transparent',
                border: 'none',
                margin: 'calc((var(--menuHeight)/8) + 20px) 20px',
                cursor: "pointer",
                zIndex: 50
            }}>
            🌙
        </button>
    )
}

export default BtnToggleTheme
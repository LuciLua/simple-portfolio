import "../styles/globals.scss"
import { Ubuntu } from "next/font/google"
import BtnToggleTheme from "../components/BtnToggleTheme"

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '400' })

export default function RootApp({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Simples Portfolio</title>
            </head>
            <body className={ubuntu.className}>
                <BtnToggleTheme />
                {children}
            </body>
        </html>
    )
}
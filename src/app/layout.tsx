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
                <link rel="manifest" href="manifest.json" />
                <link rel="apple-touch-startup-image" href="images/splash/launch-640x1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
                <link rel="apple-touch-icon" href="/icons/icon-192x192.png"/>
                <meta name="theme-color" content="#b481f4"/>
                <meta name="description" content="My simple portfolio" />
            </head>
            <body className={`${ubuntu.className} light`}>
                <BtnToggleTheme />
                {children}
            </body>
        </html>
    )
}
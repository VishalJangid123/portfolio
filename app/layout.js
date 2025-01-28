import { Header } from '@/components/header/Header'
import '../styles/global.css'
import './globals.css';
import Head from 'next/head';
import Footer from '@/components/Footer/Footer';
import Script from "next/script";


export const metadata = {
  title: 'Vishal Jangid | Game Developer | Unity Developer | Thailand',
  description: 'Discover the portfolio of Vishal Jangid, a Unity Game Developer in Thailand. Expert in Unity, C#, ReactJS, and NodeJS. Crafting immersive games with creative coding finesse. Explore now!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning={true} class="notranslate" translate="no">
      <head>
        <meta name="google-site-verification" content="etNh-yQShUhoj5e2NXKovWwkP-j-jWDm2iM2QjVAb58" />
        <link rel="apple-touch-icon" sizes="57x57" href="/portfolio/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/portfolio/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/portfolio/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/portfolio/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/portfolio/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/portfolio/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/portfolio/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/portfolio/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/portfolio/icons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/portfolio/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/portfolio/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/portfolio/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/portfolio/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"></meta>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vishaljangid123.github.io/portfolio/" />
        <meta property="og:title" content="Vishal Jangid | Game Developer | Unity Developer | Thailand" />
        <meta property="og:description" content="Discover the portfolio of Vishal Jangid, a Unity Game Developer in Thailand. Expert in Unity, C#, ReactJS, and NodeJS. Crafting immersive games with creative coding finesse. Explore now!" />
        <meta property="og:image" content="https://vishaljangid123.github.io/portfolio/Portfolio_SS.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vishaljangid123.github.io/portfolio/" />
        <meta property="twitter:title" content="Vishal Jangid | Game Developer | Unity Developer | Thailand" />
        <meta property="twitter:description" content="Discover the portfolio of Vishal Jangid, a Unity Game Developer in Thailand. Expert in Unity, C#, ReactJS, and NodeJS. Crafting immersive games with creative coding finesse. Explore now!" />
        <meta property="twitter:image" content="https://vishaljangid123.github.io/portfolio/Portfolio_SS.png" />

        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel='stylesheet' href='https://unicons.iconscout.com/release/v4.0.0/css/line.css' ></link>
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>

        <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      </head>

      <body suppressContentEditableWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

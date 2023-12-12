import { Header } from '@/components/header/Header'
import '../styles/global.css'
import './globals.css';
import Head from 'next/head';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Vishal Jangid | Portfolio | Game Developer | Thailand | Unity Developer',
  description: 'A Unity Game Developer with experience in Full stack development. I love to write code to create playable games with complex mechanics. I also enjoy working in full stack. My expertise lies within Unity game engine, and web apps and the main languages/frameworks in my tech stack are C#, ReactJS, and NodeJS. Training for Kickboxing and always ready to play 8-ball pool.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning={true}>
      <head>
        <meta name="google-site-verification" content="etNh-yQShUhoj5e2NXKovWwkP-j-jWDm2iM2QjVAb58" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"></meta>


        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel='stylesheet' href='https://unicons.iconscout.com/release/v4.0.0/css/line.css' ></link>
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
      </head>
      <body suppressContentEditableWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

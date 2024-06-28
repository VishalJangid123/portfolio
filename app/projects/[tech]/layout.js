'use client'
import Head from 'next/head';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../components/ui/navigation-menu"

import Link from 'next/link';
import { navigationMenuTriggerStyle } from '../../../components/ui/navigation-menu';
import Footer from '@/components/Footer/Footer';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel='stylesheet' href='https://unicons.iconscout.com/release/v4.0.0/css/line.css' ></link>
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
      </head>
      <body>

     
{/* <Header /> */}
        {children}
      </body>
    </html>
  )
}

const Header = () => {
  return(
   <>
   <div className='container sticky top-0 bg-card flex justify-between items-center '>

    <p>Vishal Jangid</p>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>


      </NavigationMenuList>
    </NavigationMenu>
  </div>
  <div className='container sticky top-0 bg-card justify-between items-center sm:block lg:hidden'>
   
  </div>

        
      
  </>
  )
}

'use client'

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Button } from '../ui/button';
import { useState } from 'react';

export const Header = () => {
  const menuInfo = [
    {icon: "uil-estate", text: "Home", id: "#home"},
    {icon: "uil-user", text: "About", id: "#about"},
    {icon: "uil-file-alt", text: "Skills", id: "#skills"},
    {icon: "uil-scenery", text: "Portfolio", id: "#portfolio"},
    {icon: "uil-github-alt", text: "Github", id: "#github"},
    {icon: "uil-file-graph", text: "Publications", id: "#publications"},
  ]
  
  const [showMenu, setShowMenu] = useState(true);

  return (
    <header className="container mx-auto  flex flex-col sticky top-0 bg-background h-10 sm:relative">
      <div className='lg:flex justify-between items-center sm:hidden md:hidden'>
        <p>Vishal Jangid</p>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="#home" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#skills" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Skills
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#portfolio" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#github" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Github
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#publications" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Publications
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className='justify-between items-center lg:hidden sm:relative fixed'>
        
        <div className='w-full  bottom-0 left-0 fixed shadow-lg z-50'>
          <Button variant="outline" className="absolute bottom-8 right-8 z-[51] bg-opacity-40" onClick={() => setShowMenu(!showMenu)}>
            <i className='uil uil-apps text-title'></i>
            </Button>
         <NavigationMenu>
          <NavigationMenuList  
          className={`border-t-4 border-title  h-80 bg-card grid grid-cols-3 gap-5 w-full place-content-center items-center p-5 transition ease-in-out ${showMenu ? "translate-y-[20rem]" : " delay-150 -translate-y-0"}`}>
            
            {
              menuInfo.map((item, i) => {
                return (
                  <NavigationMenuItem key={i} className='flex items-center justify-center '>
                  <Link href={`${item.id}`} legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-card`}>
                      <div className='flex flex-col justify-center items-center'>
                      <i className={`uil ${item.icon} text-lg`}></i>
                      <p className='text-sm'>{item.text}</p>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                )
              })
            }
            
          

            
          </NavigationMenuList>
        </NavigationMenu>
        </div>
        
        <Button className="absolute bottom-0">
          <i className='uil uil-github'></i>
        </Button>
        
        
      </div>
    </header>
  )
}

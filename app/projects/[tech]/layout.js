"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../components/ui/navigation-menu";

import Link from "next/link";
import { navigationMenuTriggerStyle } from "../../../components/ui/navigation-menu";
export default function ProjectLayout({ children }) {
  return <section>{children}</section>;
}

const Header = () => {
  return (
    <>
      <div className="container sticky top-0 bg-card flex justify-between items-center ">
        <p>Vishal Jangid</p>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="container sticky top-0 bg-card justify-between items-center sm:block lg:hidden"></div>
    </>
  );
};

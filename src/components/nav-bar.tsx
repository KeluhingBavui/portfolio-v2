"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

export function NavigationBar() {
    return (
        <>
            <NavigationMenu className="hidden sm:flex sm:sticky sm:top-0 min-w-full bg-black bg-opacity-20 backdrop-blur-lg container py-4 justify-between border-b border-border/40">
                <Link href="/" passHref>
                    <Avatar className="cursor-pointer">
                        <AvatarImage src="https://github.com/KeluhingBavui.png" alt="@KeluhingBavui" />
                        <AvatarFallback>DW</AvatarFallback>
                    </Avatar>
                </Link>
                <NavigationMenuList className="w-full justify-end">
                    <NavigationMenuItem>
                        <Link href="#about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="#experiences" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Experiences
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="#projects" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Projects
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
                        <Link href="#contact" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Sheet>
                <SheetTrigger className="sm:hidden sticky top-0 bg-black bg-opacity-20 backdrop-blur-lg container py-2 justify-end flex z-10">
                    <Menu />
                </SheetTrigger>
                <SheetContent className="w-1/3">
                    <NavigationMenu className="flex flex-col w-full">
                        <NavigationMenuList className="w-full justify-end flex-col pt-4">
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
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
                                <Link href="#experiences" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Experiences
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="#projects" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Projects
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
                                <Link href="#contact" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Contact
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </SheetContent>
            </Sheet>
        </>
    )
}
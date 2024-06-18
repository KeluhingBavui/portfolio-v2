"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

export function NavigationBar() {
    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    return (
        <>
            <NavigationMenu className="hidden sm:flex sm:sticky sm:top-0 min-w-full bg-black bg-opacity-20 backdrop-blur-lg container py-4 justify-between border-b border-border/40">
                <Avatar className="cursor-pointer" onClick={() => scrolltoHash("hero")}>
                    <AvatarImage src="https://github.com/KeluhingBavui.png" alt="@KeluhingBavui" />
                    <AvatarFallback>DW</AvatarFallback>
                </Avatar>
                <NavigationMenuList className="w-full justify-end">
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrolltoHash("about")}>
                            About
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrolltoHash("experiences")}>
                            Experiences
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrolltoHash("projects")}>
                            Projects
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrolltoHash("feedbacks")}>
                            Testimonials
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrolltoHash("skills")}>
                            Skills
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="cursor-pointer">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrolltoHash("contact")}>
                            Contact
                        </NavigationMenuLink>
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
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrolltoHash("hero")}>
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrolltoHash("about")}>
                                    About
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrolltoHash("experiences")}>
                                    Experiences
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrolltoHash("projects")}>
                                    Projects
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrolltoHash("feedbacks")}>
                                    Testimonials
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrolltoHash("skills")}>
                                    Skills
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrolltoHash("contact")}>
                                    Contact
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </SheetContent>
            </Sheet>
        </>
    )
}
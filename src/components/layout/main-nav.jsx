"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function MainNav() {
    return (
        (<header className="relative w-full flex items-center justify-center">
            <Navbar className="top-0" />
        </header>)
    );
}

function Navbar({
    className
}) {
    const [active, setActive] = useState(null);
    return (
        (<div
            className={cn("fixed top-10 inset-x-0 mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <div className="flex justify-between items-center lg:w-1/5 w-full">
                    <Link href={'/'}>
                        <img src="/img/logo-text.png" alt="cognir logo" className="logo-font h-8 hover:opacity-75" />
                    </Link>
                    <MobileNav />
                </div>
                <div className="w-full justify-start space-x-14 items-center hidden lg:flex">
                    <MenuItem setActive={setActive} active={active} item="Product">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/web-dev">Web Development</HoveredLink>
                            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                            <HoveredLink href="/branding">Branding</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Blog">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/web-dev">Web Development</HoveredLink>
                            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                            <HoveredLink href="/branding">Branding</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Company">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/hobby">Hobby</HoveredLink>
                            <HoveredLink href="/individual">Individual</HoveredLink>
                            <HoveredLink href="/team">Team</HoveredLink>
                            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        </div>
                    </MenuItem>
                </div>
                <div className="hidden lg:flex w-full justify-end gap-8 text-sm">
                    <button>Customer Login</button>
                    <button className="px-8 py-3  bg-black text-white rounded-lg hover:bg-black/[0.8] hover:shadow-lg">
                        Sign up
                    </button>
                </div>
            </Menu>

        </div>)
    );
}

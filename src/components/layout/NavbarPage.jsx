"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarPage() {
    return (
        (<div className="relative w-full flex items-center justify-center">
            <Navbar className="top-0" />
        </div>)
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
                <div className="flex justify-between items-center w-2/5">
                    <Link href={'/'}>
                        <img src="/svg/logo_black.svg" alt="cognir logo" width={85} />
                    </Link>
                    <MenuItem setActive={setActive} active={active} item="Product">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/web-dev">Web Development</HoveredLink>
                            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                            <HoveredLink href="/branding">Branding</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Blog">
                        <div className="text-sm grid grid-cols-2 gap-10 p-4">
                            <ProductItem
                                title="Algochurn"
                                href="https://algochurn.com"
                                src="/img/blog-1.jpg"
                                description="Prepare for tech interviews like never before."
                            />
                            <ProductItem
                                title="Tailwind Master Kit"
                                href="https://tailwindmasterkit.com"
                                src="/img/blog-2.jpg"
                                description="Production ready Tailwind css components for your next project"
                            />
                            <ProductItem
                                title="Moonbeam"
                                href="https://gomoonbeam.com"
                                src="/img/blog-3.jpg"
                                description="Never write from scratch again. Go from idea to blog in minutes."
                            />
                            <ProductItem
                                title="Rogue"
                                href="https://userogue.com"
                                src="/img/blog-4.jpg"
                                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                            />
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
                <div className="flex w-full justify-end gap-8 text-sm">
                    <button>Customer Login</button>
                    <button className="px-8 py-3  bg-black text-white rounded-lg hover:bg-black/[0.8] hover:shadow-lg">
                        Sign up
                    </button>
                </div>
            </Menu>
        </div>)
    );
}

"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">

                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="our courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/Courses">
                            All Courses
                        </HoveredLink>
                        <HoveredLink href="/Courses">
                            Basic Music Theory
                        </HoveredLink>
                        <HoveredLink href="/Courses">
                            Advance Compostion
                        </HoveredLink>
                        <HoveredLink href="/Courses">
                            Song Writing
                        </HoveredLink>
                        <HoveredLink href="/Courses">
                            Music Production
                        </HoveredLink>
                    </div>
                </MenuItem>
                <Link href="/Contacts">
                    <MenuItem setActive={setActive} active={active} item="contacts">
                    </MenuItem>
                </Link>

            </Menu>



        </div>
    )
}

export default Navbar
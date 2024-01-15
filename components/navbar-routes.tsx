"use client"

import React from 'react';
import {useAuth, UserButton} from "@clerk/nextjs";
import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";
import {LogOut} from "lucide-react";
import Link from "next/link";
import {isTeacher} from "@/lib/teacher";

function NavbarRoutes() {
    const {userId} = useAuth();
    const pathname = usePathname();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isCoursePage = pathname?.includes("/courses");
    const isSearchPage = pathname === "/search";
    const isPlayerPage = pathname?.includes("/player");
    return (
        <>
            {isSearchPage && (
                <div className="hidden md:block">
                    {/*<SearchInput/>*/}
                </div>
            )}
            <div className="flex gap-x-2 ml-auto">
                {isTeacherPage || isPlayerPage ? (
                    <Link href="/">
                        <Button size="sm" variant="ghost">
                            <LogOut className="h-4 w-4 mr-2"/>
                            Exit
                        </Button>
                    </Link>
                ) : (
                    <Link href="/teacher/courses">
                        <Button size="sm" variant="ghost">
                            Teacher mode
                        </Button>
                    </Link>
                )}
                <UserButton
                    afterSignOutUrl="/"
                />
            </div>
        </>
    );
}

export default NavbarRoutes;
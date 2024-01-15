"use client"

import React from 'react';
import {UserButton} from "@clerk/nextjs";

function NavbarRoutes() {
    return (
        <div className="flex gap-x-2 ml-auto">
            <UserButton/>
        </div>
    );
}

export default NavbarRoutes;
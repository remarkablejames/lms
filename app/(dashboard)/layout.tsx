import React from 'react';
import Sidebar from "@/app/(dashboard)/_components/sidebar";

function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50"
            >
                <Sidebar/>
            </div>
            <main className="md:pl-56 pt-[80px] h-full">
                {children}
            </main>
        </div>
    );
}

export default Layout;
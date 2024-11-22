'use client';

import { useState } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import "./AdminHeader.css";

export default function AdminHeader() {
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();

    const handleOpenMenu = () => {
        setShowMenu(true);
    };

    const handleCloseMenu = () => {
        setShowMenu(false);
    };

    return (
        <nav id="admin-header">
            <div className="icon-menu" onClick={handleOpenMenu}></div>
            <ul className={showMenu ? "showmenu" : "admin-header-list"}>
                <li>
                    <div className="btn-close" onClick={handleCloseMenu}></div>
                </li>
                <li className='admin-header-list__element'>
                    <Link href="/admin">Alla Event</Link>
                </li>
                <li className={`${pathname === '/admin/1/event' ? 'admin-header-list__element active' : 'admin-header-list__element'}`}>
                    <Link href="/admin/1/event">Redigera Eventet</Link>
                </li>
                <li className={`${pathname === '/admin/1/discounts' ? 'admin-header-list__element active' : 'admin-header-list__element'}`}>
                    <Link href="/admin/1/discounts">Rabatter</Link>
                </li>
                <li className={`${pathname === '/admin/1/sponsors' ? 'admin-header-list__element active' : 'admin-header-list__element'}`}>
                    <Link href="/admin/1/sponsors">Sponsorer</Link>
                </li>
            </ul>
        </nav>
    );
}

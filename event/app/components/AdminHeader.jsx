'use client';

import { useState } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";

import "./AdminHeader.css";

export default function AdminHeader() {
    const [ showMenu, setShowMenu ] = useState(false);
    const pathname = usePathname();

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <header id="admin-header">
            <nav className="admin-header-nav">
                <ul className={showMenu ? "admin-header-list showmenu" : "admin-header-list"}>
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

                <div id="hamburger" onClick={handleShowMenu}>
                    <Image src={showMenu ? '/icon-x.svg' : '/icon-hamburger.svg'} width={20} height={20} />
                </div>
            </nav>
        </header>
    );
}

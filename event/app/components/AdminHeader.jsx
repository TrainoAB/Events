'use client';

import { useState } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";

import "./AdminHeader.css";

export default function AdminHeader({ params }) {
    const [ showMenu, setShowMenu ] = useState(false);
    const pathname = usePathname();

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <header id="admin-header">
            <nav className="admin-header-nav" style={{position: showMenu && "fixed"}}>
                <ul className={showMenu ? "admin-header-list showmenu" : "admin-header-list"} onClick={() => showMenu && handleShowMenu()}>
                    <li className='admin-header-list__element'>
                        <Link href="/admin">Alla Event</Link>
                    </li>
                    <li className={`${pathname === `/admin/${params.id}/event` ? 'admin-header-list__element active' : 'admin-header-list__element'}`}>
                        <Link href={`/admin/${params.id}/event`}>Redigera Eventet</Link>
                    </li>
                    <li className={`${pathname === `/admin/${params.id}/discounts` ? 'admin-header-list__element active' : 'admin-header-list__element'}`}>
                        <Link href={`/admin/${params.id}/discounts`}>Rabatter</Link>
                    </li>
                    <li className={`${pathname === `/admin/${params.id}/sponsors` ? 'admin-header-list__element active' : 'admin-header-list__element'}`}>
                        <Link href={`/admin/${params.id}/sponsors`}>Sponsorer</Link>
                    </li>
                    <li className={`${pathname === `/admin/${params.id}/rules` ? 'admin-header-list__element active' : 'admin-header-list__element'}`}>
                        <Link href={`/admin/${params.id}/rules`}>Regler</Link>
                    </li>
                    <li className={`${pathname === `/admin/${params.id}/faqs` ? 'admin-header-list__element active' : 'admin-header-list__element'}`}>
                        <Link href={`/admin/${params.id}/faqs`}>FAQ</Link>
                    </li>
                    <li className={`${pathname === `/admin/${params.id}/winners` ? 'admin-header-list__element active' : 'admin-header-list__element'}`}>
                        <Link href={`/admin/${params.id}/winners`}>Vinnare</Link>
                    </li>
                    <li className={`${pathname === `/admin/${params.id}/participants` ? 'admin-header-list__element active' : 'admin-header-list__element'}`}>
                        <Link href={`/admin/${params.id}/participants`}>Deltagare</Link>
                    </li>
                    <li className={`${pathname === `/admin/${params.id}/interested` ? 'admin-header-list__element active' : 'admin-header-list__element'}`}>
                        <Link href={`/admin/${params.id}/interested`}>Intressenter</Link>
                    </li>
                </ul>

                <div id="hamburger" onClick={handleShowMenu}>
                    <Image src={showMenu ? '/icon-x.svg' : '/icon-hamburger.svg'} width={20} height={20} alt="Hamburger menu icon" />
                </div>
                {showMenu ? <div className="nav-backdrop" onClick={handleShowMenu}></div> : <></>}
            </nav>
        </header>
    );
}

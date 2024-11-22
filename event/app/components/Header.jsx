"use client";

import { useState } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";

import "./Header.css";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();

    const handleOpenMenu = () => {
        setShowMenu(true);
    };

    const handleCloseMenu = () => {
        setShowMenu(false);
    };

    return (
        <nav id="header">
            <div className="logo"></div>
            <div className="icon-menu" onClick={handleOpenMenu}></div>
            <ul className={showMenu ? "showmenu" : "header-list"}>
                <li>
                    <div className="btn-close" onClick={handleCloseMenu}></div>
                </li>
                <li className={`${pathname === '/triathlon' ? 'header-list__element active' : 'header-list__element'}`}>
                    <Link href="/triathlon">Start</Link>
                </li>
                <li className={`${pathname === '/triathlon/about' ? 'header-list__element active' : 'header-list__element'}`}>
                    <Link href="/triathlon/about">Om Eventet</Link>
                </li>
                <li className={`${pathname === '/triathlon/participants' ? 'header-list__element active' : 'header-list__element'}`}>
                    <Link href="/triathlon/participants">Deltagare</Link>
                </li>
                <li className={`${pathname === '/triathlon/winners' ? 'header-list__element active' : 'header-list__element'}`}>
                    <Link href="/triathlon/winners">Vinnare</Link>
                </li>
                <li className={`${pathname === '/triathlon/sponsors' ? 'header-list__element active' : 'header-list__element'}`}>
                    <Link href="/triathlon/sponsors">Sponsorer</Link>
                </li>
                <li className={`${pathname === '/triathlon/faq' ? 'header-list__element active' : 'header-list__element'}`}>
                    <Link href="/triathlon/faq">FAQ</Link>
                </li>
                <li className={`${pathname === '/triathlon/merch' ? 'header-list__element active' : 'header-list__element'}`}>
                    <Link href="/triathlon/merch">Merch</Link>
                </li>
            </ul>
        </nav>
    );
}

"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";

import "./Header.css";

export default function Header() {
    const [ dropdown, setDropdown ] = useState(false);
    const pathname = usePathname();

    const handleDropdown = () => {
        setDropdown(!dropdown);
    }

    return (
        <header id="header">
            <nav id="menu-toggle" className="header-nav">
                <div className="logo"></div>

                <ul id="header-menu" className={dropdown ? `header-list dropdown` : 'header-list'}>
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

                <div id="hamburger" onClick={handleDropdown}>
                    <Image src={dropdown ? '/icon-x.svg' : '/icon-hamburger.svg'} width={20} height={20} />
                </div>
            </nav>
        </header>
    );
}

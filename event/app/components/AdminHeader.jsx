'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import "./AdminHeader.css";

export default function AdminHeader() {
    const pathname = usePathname();

    return (
        <nav id="admin-header">
            <ul className="admin-header-list">
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

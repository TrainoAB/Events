import Link from "next/link";

import "./AdminHeader.css";

export default function AdminHeader() {

    return (
        <nav id="admin-header">
            <ul className="admin-header-list">
                <li className="admin-header-list__element">
                    <Link href="/admin">Alla Event</Link>
                </li>
                <li className="admin-header-list__element">
                    <Link href="/admin/1/event">Redigera Eventet</Link>
                </li>
                <li className="admin-header-list__element">
                    <Link href="/admin/1/discounts">Rabatter</Link>
                </li>
                <li className="admin-header-list__element">
                    <Link href="/admin/1/sponsors">Sponsorer</Link>
                </li>
            </ul>
        </nav>
    );
}

import AdminHeader from "@/app/components/AdminHeader";

export default function ManageLayout({ children }) {
    return (
        <>
            <AdminHeader />
            {children}
        </>
    );
}

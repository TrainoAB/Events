import AdminHeader from "@/app/components/AdminHeader";

export default function ManageLayout({ children, params }) {
    return (
        <>
            <AdminHeader params={params} />
            {children}
        </>
    );
}

import AdminLoginForm from "../components/AdminLoginForm";
import AuthLogin from "../components/AuthLogin";

export default function AdminLayout({ children }) {
    return (
        <AuthLogin
            FormComponent={AdminLoginForm}
            cookie={"admin-password"}
            envPassword={"ADMIN_PASSWORD"}
        >
            {children}
        </AuthLogin>
    );
}

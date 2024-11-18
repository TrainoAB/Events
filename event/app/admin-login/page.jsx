import "./page.css";

export default function AdminLoginPage() {
    return (
        <main id="admin-login" className="max-width gap">
            <h1 className="admin-login__title">Admin Login</h1>
            <form className="admin-login-form">
                <div className="input-wrapper">
                    <label htmlFor="username">Användarnamn</label>
                    <input id="username" name="username" type="text" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Lösenord</label>
                    <input id="password" name="password" type="password" />
                </div>
                <button className="admin-login-form__submit" type="submit">Logga in</button>
            </form>
        </main>
    );
}

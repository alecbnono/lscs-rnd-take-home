import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Sets layout for the webpage (Navigation, Content, Footer)
function Layout() {
    return (
        <div className="bg-zinc-950 text-zinc-50 font-(family-name:--font-body)">
            <Navbar />
            <main className="min-h-[100vh] flex justify-center">
                <div>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;

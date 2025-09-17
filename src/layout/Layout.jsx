import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

// Sets layout for the webpage (Navigation, Content, Footer)
function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-(family-name:--font-body)">
            <Navbar />
            <main className="flex-1 flex justify-center">
                {/* Page entry point */}
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;

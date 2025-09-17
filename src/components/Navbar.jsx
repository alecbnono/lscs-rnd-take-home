import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

function Navbar() {
    // Navigational items
    const navItems = ["Products", "FAQ", "Support", "Locations", "Account"];

    return (
        <nav className="py-3 px-4 w-full bg-zinc-950">
            <NavbarDesktop navItems={navItems} />
            <NavbarMobile navItems={navItems} />
        </nav>
    );
}

export default Navbar;

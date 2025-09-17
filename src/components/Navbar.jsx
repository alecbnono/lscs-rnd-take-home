import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = ["Products", "FAQ", "Support", "Locations", "Account"];

    return (
        <nav className="py-3 px-4 w-full bg-zinc-950">
            <div className="flex flex-row md:px-5 items-center justify-between w-full">
                <h3 className="text-xl font-semibold text-zinc-50">NovaMart</h3>

                {/* Desktop Navbar */}
                <ul className="hidden md:flex gap-5 align-center">
                    {navItems.map((item) =>
                        item === "Products" ? (
                            <li
                                className={`py-2 px-3 rounded-[10px] w-full text-zinc-800 bg-zinc-100 `}
                            >
                                {item}
                            </li>
                        ) : (
                            <li
                                className={`py-2 px-3 rounded-[10px] w-full text-zinc-100 hover:bg-zinc-800 transition-colors duration-300`}
                            >
                                {item}
                            </li>
                        ),
                    )}
                    <li className="m-auto">
                        <FaShoppingCart className="size-[24px]" />
                    </li>
                </ul>

                {/* Mobile Hamburger Button */}
                <div className="md:hidden">
                    {isOpen ? (
                        <button
                            className="flex items-center"
                            onClick={() => setIsOpen(false)}
                        >
                            <FiArrowLeft className="size-[32px] text-zinc-50" />
                        </button>
                    ) : (
                        <button
                            className="flex items-center"
                            onClick={() => setIsOpen(true)}
                        >
                            <FiMenu className="size-[32px] text-zinc-50" />
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Navbar */}
            <div
                className={`md:hidden absolute top-0 p-5 flex flex-col gap-5 h-full w-[80%] bg-zinc-950 ${isOpen ? "left-0" : "-left-full"}`}
            >
                <h3 className="text-xl font-bold text-zinc-50">NovaMart</h3>
                <div className="flex flex-col gap-1 text-lg list-none">
                    <li className="p-2 flex gap-2 items-center">
                        <FaShoppingCart className="size-[24px]" /> Cart
                    </li>
                    {navItems.map((item) =>
                        item === "Products" ? (
                            <li
                                className={`py-2 px-3 rounded-[10px] w-full text-zinc-800 bg-zinc-100 `}
                            >
                                {item}
                            </li>
                        ) : (
                            <li
                                className={`py-2 px-3 rounded-[10px] w-full text-zinc-100 hover:bg-zinc-800 transition-colors duration-300`}
                            >
                                {item}
                            </li>
                        ),
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

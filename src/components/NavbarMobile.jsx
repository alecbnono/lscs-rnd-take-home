import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

function NavbarMobile({ navItems }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex flex-row md:hidden items-center justify-between w-full">
                <h3 className="text-xl font-bold text-zinc-50">NovaMart</h3>

                {/* Mobile Hamburger Button */}
                <div>
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
                className={`md:hidden absolute top-0 p-4 flex flex-col gap-5 h-full w-[80%] bg-zinc-950 transition-all duration-300 ${isOpen ? "left-0" : "-left-full"}  `}
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
        </>
    );
}

export default NavbarMobile;

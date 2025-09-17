import { FaShoppingCart } from "react-icons/fa";

function NavbarDesktop({ navItems }) {
    return (
        <div className="hidden md:flex flex-row md:px-5 items-center justify-between w-full">
            <h3 className="text-xl font-semibold text-slate-50">NovaMart</h3>
            <ul className="md:flex gap-5 align-center">
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
        </div>
    );
}

export default NavbarDesktop;

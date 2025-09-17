import { FaSearch } from "react-icons/fa";
import ProductGrid from "../components/ProductGrid";

function StorePage() {
    return (
        <main className="max-w-[800px] p-5 flex flex-col gap-5">
            <div className="flex gap-3 items-center w-full bg-zinc-100 py-2 px-4 rounded-full">
                <FaSearch className="text-zinc-400" />
                <input
                    type="text"
                    className="w-full text-zinc-800"
                    placeholder="Search products..."
                />
            </div>
            <ProductGrid />
        </main>
    );
}

export default StorePage;

import { useState } from "react";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";

function StorePage() {
    // stores query state to be passed from SearchBar to ProductGrid
    const [query, setQuery] = useState("");

    return (
        <main className="max-w-[800px] p-5 flex flex-col gap-5">
            <SearchBar query={query} setQuery={setQuery} />
            <ProductGrid query={query} />
        </main>
    );
}

export default StorePage;

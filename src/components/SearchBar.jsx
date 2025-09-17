import { FaSearch } from "react-icons/fa";

function SearchBar({ query, setQuery }) {
    return (
        <div className="flex gap-3 items-center w-full bg-zinc-100 py-2 px-4 rounded-full">
            <FaSearch className="text-zinc-400" />
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full text-zinc-800 focus:outline-0"
                placeholder="Search products..."
            />
        </div>
    );
}

export default SearchBar;

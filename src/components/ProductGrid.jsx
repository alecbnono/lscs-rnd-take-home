import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../services/products";

function ProductGrid({ query }) {
    // Store products state
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from API
    useEffect(() => {
        fetchProducts()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    // checks if query matches with product, then filters
    const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()),
    );

    // loading state
    if (loading) {
        return (
            <div className="py-20 text-center text-xl md:text-4xl font-semibold">
                Loading products...
            </div>
        );
    }
    // error state
    else if (error) {
        return (
            <div className="py-20 text-center text-xl md:text-4xl font-semibold">
                Error: {error}
            </div>
        );
    }
    // successful render
    else {
        return (
            <section className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                {/* Display filtered products */}
                {filtered.length > 0 ? (
                    filtered.map((product) => <ProductCard product={product} />)
                ) : (
                    <div className="col-span-full text-center text-gray-400">
                        No products found
                    </div>
                )}
            </section>
        );
    }
}

export default ProductGrid;

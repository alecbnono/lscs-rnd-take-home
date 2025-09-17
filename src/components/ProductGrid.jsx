import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function ProductGrid({ query }) {
    // Store products state
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from API
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()),
    );

    if (loading) {
        return (
            <div className="py-20 text-center text-xl md:text-4xl font-semibold">
                Loading products...
            </div>
        );
    } else if (error) {
        return (
            <div className="py-20 text-center text-xl md:text-4xl font-semibold">
                Error: {error}
            </div>
        );
    } else {
        return (
            <section className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                {filtered.length > 0 ? (
                    filtered.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                            rating={product.rating.rate}
                            count={product.rating.count}
                        />
                    ))
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

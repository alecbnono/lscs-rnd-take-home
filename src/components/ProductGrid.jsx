import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function ProductGrid() {
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
                {products.map((product) => {
                    return (
                        <ProductCard
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                            rating={product.rating.rate}
                            count={product.rating.count}
                        />
                    );
                })}
            </section>
        );
    }
}

export default ProductGrid;

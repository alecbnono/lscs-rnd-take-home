import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function ProductCard({ product }) {
    // Round down rating to nearest integer
    const stars = Math.floor(product.rating.rate);

    // Formats to a proper price label
    const priceFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PHP",
    }).format(product.price);

    return (
        <div className="flex flex-col gap-5 justify-center items-center bg-zinc-900 border-solid border-zinc-500 p-4 rounded-xl">
            {/* Product Image */}
            <img
                src={product.image}
                className="aspect-square size-25 md:size-50 object-contain"
                alt=""
            />
            {/* Product Info */}
            <div className="flex flex-col gap-2 w-full">
                <p className="text-zinc-400 text-sm">
                    {product.category.toUpperCase()}
                </p>
                <h3 className="line-clamp-3 h-17">{product.title}</h3>
                <h3 className="font-bold text-lg">{priceFormat}</h3>
                <div className="flex flex-col md:flex-row gap-1 md:items-center ">
                    {/* Number of stars */}
                    <div className="flex gap-1 text-amber-300">
                        {Array.from({ length: 5 }, (v, i) => (
                            <span key={i} className="my-auto">
                                {i + 1 <= stars ? <FaStar /> : <FaRegStar />}
                            </span>
                        ))}
                    </div>
                    <p className="text-zinc-400">({product.rating.count})</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function ProductCard({ image, title, price, category, rating, count }) {
    // Round down rating to nearest integer
    const stars = Math.floor(rating);

    return (
        <div className="flex flex-col gap-5 justify-center items-center bg-zinc-900 border-solid border-zinc-500 p-4 rounded-xl">
            <img
                src={image}
                className="aspect-square size-25 md:size-50 object-contain"
                alt=""
            />
            <div className="flex flex-col gap-2 w-full">
                <p className="text-zinc-400 text-sm">{category.toUpperCase()}</p>
                <h3 className="line-clamp-3 h-17">{title}</h3>
                <h3 className="font-bold text-lg">₱{price}</h3>
                <div className="flex flex-col md:flex-row gap-1 md:items-center ">
                    {/* Number of stars */}
                    <div className="flex gap-1 text-amber-300">
                        {Array.from({ length: 5 }, (v, i) => (
                            <span key={i} className="my-auto">
                                {i + 1 <= stars ? <FaStar /> : <FaRegStar />}
                            </span>
                        ))}
                    </div>
                    <p className="text-zinc-400">({count})</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;

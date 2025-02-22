import Image from "next/image";
import {useCartStore} from "@/store/cart-store";

interface ProductProps {
    id: number;
    image: string;
    name: string;
    price: number
}

export const ProductCard = ({ id, image, name, price}: ProductProps) => {
    const { addToCart } = useCartStore();
    return (
        <div className="border p-4 rounded-lg shadow-md flex flex-col items-start">
            <Image src={image} alt="name" width={150} height={150} className="rounded-lg w-full"/>
            <h2 className="mt-3 text-md font-semibold">{name}</h2>
            <p className="text-[#d2b19a] text-sm mt-3">${price}</p>
            <div className="mt-3 flex items-center gap-2 mb-3">
                <button
                    className="bg-gray-300 text-black px-2 py-1 rounded-xl"
                >
                    -
                </button>
                <span className="text-sm">quantity</span>
                <button
                    className="bg-gray-300 text-black px-2 py-1 rounded-xl"
                >
                    +
                </button>
            </div>
            <button
                className="mt-3 bg-[#1e120a] text-white text-sm px-4 py-2 rounded hover:bg-[#1e120a]"
                onClick={() => addToCart({id, name, image, price, quantity: 1})}
            >
                Add to Cart
            </button>
        </div>
    )
}
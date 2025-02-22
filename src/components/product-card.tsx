import Image from "next/image";

interface ProductProps {
    image: string;
    name: string;
    price: number
}

export const ProductCard = ({ image, name, price}: ProductProps) => {
    return (
        <div className="border p-4 rounded-lg shadow-md flex flex-col items-start">
            <Image src={image} alt="name" width={150} height={150} className="rounded-lg w-full"/>
            <h2 className="mt-3 text-md font-semibold">{name}</h2>
            <p className="text-[#d2b19a] text-sm mt-3">${price}</p>
            <button className="mt-3 bg-[#1e120a] text-white text-sm px-4 py-2 rounded hover:bg-[#1e120a]">
                Add to Cart
            </button>
        </div>
    )
}
import Image from "next/image";
import {Navbar} from "@/components/navbar";
import {useCartStore} from "@/store/cart-store";

const Cart = () => {
    const { cart, updateQuantity, removeItem } = useCartStore();

    return (
        <>
            <Navbar/>
            <div className='mx-auto p-8'>
                <h1 className='text-2xl font-semibold mb-4'>Shopping Cart</h1>
                {cart.length === 0 ? (
                    <p className='text-gray-500 text-md'>Your Cart is empty</p>
                ) : (
                    <div className="grid grid-cols-1 sm-grid-cols-2 md:grid-cols-5 gap-6">
                        {cart.map((product) => (
                            <div key={product.id} className='border p-4 rounded-lg shadow-md flex flex-col items-start'>
                                <Image src={product.image} alt={product.name} width={150} height={150}
                                       className="rounded-lg w-full"/>
                                <h2 className="mt-2 text-sm font-semibold">{product.name}</h2>
                                <p className="text-[#d2b19a] text-sm mt-3">${product.price}</p>

                                {/* Quantity Controls */}
                                <div className="mt-3 flex items-center gap-2">
                                    <button
                                        className="bg-gray-300 text-black px-2 py-1 rounded disabled:opacity-50"
                                        onClick={() => updateQuantity(product.id, -1)}
                                    >
                                        -
                                    </button>
                                    <span className="text-md">{product.quantity}</span>
                                    <button
                                        className="bg-gray-300 text-black px-2 py-1 rounded"
                                        onClick={() => updateQuantity(product.id, 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="mt-3 bg-red-700 text-white text-sm px-4 py-2 rounded hover:bg-red-800"
                                    onClick={() => removeItem(product.id)}
                                >
                                    Remove Item
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Cart;

import Image from "next/image";
import {Navbar} from "@/components/navbar";
import {useCartStore} from "@/store/cart-store";

const Cart = () => {
    const { cart, updateQuantity } = useCartStore();
    return (
        <>
            <Navbar/>
            <div className='container mx-auto p-4'>
                <h1 className='text-2xl font-semibold mb-4'>Shopping Cart</h1>
                {cart.length === 0 ? (
                    <p className='text-gray-500 text-md'>Your Cart is empty</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cart.map((product) => (
                            <div key={product.id} className='border p-4 rounded-lg shadow-md flex flex-col items-center'>
                                <Image src={product.image} alt={product.name} width={100} height={100} className="rounded-lg"/>
                                <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
                                <p className="text-gray-500">${product.price}</p>

                                {/* Quantity Controls */}
                                <div className="mt-3 flex items-center gap-2">
                                    <button
                                        className="bg-gray-300 text-black px-2 py-1 rounded disabled:opacity-50"
                                        onClick={() => updateQuantity(product.id, -1)}
                                        disabled={product.quantity <= 1}
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
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Cart;

import { create } from "zustand";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    cart: Product[];
    addToCart: (product: Product) => void;
    updateQuantity: (id: number, change: number) => void;
    removeItem: (id: number) => void;
    cartCount: number;
}

export const useCartStore = create<CartState>((set) => ({
    //Initial state
    cart: [],
    cartCount: 0,

    addToCart: (product) => {
        set((state) => {
            //check if the product is already in the cart
            const item = state.cart.find((p) => p.id === product.id);

            //If the product exists, increase its quantity
            //If it doesn't exist, add it to the cart with a quantity 1
            return {
                cart: item
                    ? state.cart.map((p) =>
                        p.id === product.id ? { ...p, quantity: p.quantity + 1} : p
                    )
                    : [...state.cart, { ...product, quantity: 1}],
                //update cart count
                cartCount: state.cartCount + 1,
            }
        })
    },


    updateQuantity: (id, change) => {
        //update the state
        set((state) => ({
            //Update the product's quantity
            cart: state.cart.map((p) =>
            p.id === id ? { ...p, quantity: p.quantity + change } : p
            )
            // Remove products with zero quantity
            .filter((p) => p.quantity > 0),
            //Update the cart item count
            cartCount: Math.max(0, state.cartCount + change),
        }))
    },

    removeItem: (id) => {
        set((state) => {
            //Find the item to remove
            const itemToRemove = state.cart.find((p) => p.id === id);
            return {
                cart: state.cart.filter((p) => p.id !== id),
                cartCount: state.cartCount - (itemToRemove?.quantity || 0)
            }
        })
    }
}));

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
    cartCount: number;
}

export const useCartStore = create<CartState>((set) => ({
    cart: [],
    cartCount: 0,

    addToCart: (product) => {
        set((state) => {
            //Checking if the product is already in the cart
            const item = state.cart.find((p) => p.id === product.id)
            //Updating the cart
            return {
                cart: item
                    ? state.cart.map((p) =>
                        p.id === product.id ? { ...p, quantity: p.quantity + 1} : p
                    )
                    : [...state.cart, {...product, quantity: 1}],
                //Updating the cart count
                cartCount: state.cartCount + 1,
            };
        });
    },

    updateQuantity: (id, change) => {
        //update the state
        set((state) => ({
            //Updating the product's quantity
            cart: state.cart.map((p) =>
            p.id === id ? { ...p, quantity: p.quantity + change } : p
            )
            // Removing products with zero quantity
            .filter((p) => p.quantity > 0),
            //Updating the cart item count
            cartCount: Math.max(0, state.cartCount + change),
        }))
    }
}));

import { create } from 'zustand'

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) => {
        set((state) => {
            const existingItem = state.cart.find(item => product.id === item.id)
            if (existingItem) {
                return {
                    cart: state.cart.map((item) => (
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item


                    ))

                }

            } else {
                return {
                    cart: [...state.cart, {
                        ...product, quantity: 1

                    }],
                };
            }
        });
    },


    removeFromCart: (id) => {
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
        }));
    },

    increaseQuantity: (id) => {
        set((state) => ({
            cart: state.cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item),
        }))
    },

    decreaseQuantity: (id) => {
        set((state) => ({
            cart: state.cart.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item),
        }))
    }
    

}));
import { create } from 'zustand'

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) => {
        set((state) => {
            const existingItem = state.cart.find(item => product.id === item.id)
            if (existingItem) {
                return {
                    cart: [...state, {
                        ...existingItem, quantity: existingItem.quantity + 1

                    }]

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
}

));
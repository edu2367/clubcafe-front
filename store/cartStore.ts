import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 1. Definimos la forma de un producto
interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

// 2. Definimos las acciones del carrito
interface CartState {
    cart: CartItem[];
    isOpen: boolean; // Para saber si el sidebar está abierto
    addToCart: (product: CartItem) => void;
    removeFromCart: (productId: number) => void; // <--- ¡ESTA ES LA NUEVA!
    clearCart: () => void;
    getTotal: () => number;
    openCart: () => void;
    closeCart: () => void;
}

// 3. Creamos el Store
export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],
            isOpen: false,

            // Agregar (abre el carrito automáticamente)
            addToCart: (product) => set((state) => ({
                cart: [...state.cart, product],
                isOpen: true
            })),

            // Eliminar un producto específico por ID
            removeFromCart: (productId) => set((state) => ({
                cart: state.cart.filter((item) => item.id !== productId)
            })),

            // Vaciar todo
            clearCart: () => set({ cart: [] }),

            // Calcular el precio total
            getTotal: () => {
                const { cart } = get();
                return cart.reduce((total, item) => total + item.price, 0);
            },

            // Abrir/Cerrar cajón lateral
            openCart: () => set({ isOpen: true }),
            closeCart: () => set({ isOpen: false }),
        }),
        {
            name: 'clubcafe-storage', // Para que no se borre al recargar
        }
    )
);
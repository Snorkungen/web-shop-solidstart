import { createSignal } from "solid-js";
import { Product } from "~/products";
import Store from "./store";

export type CartStoreData = Record<Product["id"], number>;

const CART_STORAGE_KEY = "CART_STORAGE_KEY:1";
export const cartStore = Store.create<CartStoreData>({}, CART_STORAGE_KEY);

export const addProductToCart = (productId: Product["id"], amount = 1) => {
    let cartedProducts = cartStore.data;

    if (cartedProducts[productId]) cartedProducts[productId] += amount;
    else cartedProducts[productId] = amount;

    cartStore.data = cartedProducts;
}

export const removeProductFromCart = (productId: Product["id"], amount = 1) => {
    let cartedProducts = cartStore.data;

    if (!cartedProducts[productId]) return; // Ignore if no products in cart
    cartedProducts[productId] -= amount;

    if (cartedProducts[productId] <= 0) delete cartedProducts[productId];

    cartStore.data = cartedProducts;
}

export function useCartedProducts() {
    const [cartedProducts, setCartedProducts] = createSignal(cartStore.data,{
        "equals" : false
    });
    cartStore.subscribe(setCartedProducts);
    return { cartedProducts }
}
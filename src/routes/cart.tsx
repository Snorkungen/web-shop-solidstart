import { Icon } from "solid-heroicons";
import { createEffect, createSignal, For } from "solid-js";
import { A } from "solid-start";
import { chevronDown, chevronUp, xMark } from "solid-heroicons/solid";
import PageContainer from "~/components/page-container";
import { addProductToCart, cartStore, removeProductFromCart, useCartedProducts } from "~/lib/cart";
import { getProduct } from "./products/[id]";

function createCartedProductsList() {
    let data = cartStore.data;
    return Object.keys(data).map((productId) => {
        let product = getProduct(Number(productId))!;
        return {
            ...product,
            amount: data[product.id]
        }
    });
}

export default function Cart() {
    const [cartedProducts, setCartedProducts] = createSignal(createCartedProductsList(), { equals: false })

    createEffect(() => {
        setCartedProducts(createCartedProductsList());
    })

    return <PageContainer>
        <header class="my-4 border-b-foreground border-b-2">
            <div class="flex justify-between py-1">
                <h1 class="text-3xl">Your Cart</h1>
                <div class="flex gap-3 items-center">
                    <h3
                    class="font-semibold"
                    >{cartedProducts().reduce((acc, { amount ,price}) => acc + (price * amount), 0)}$</h3>
                    <button class="p-1 rounded-md border-2 border-foreground hover:border-foreground-3 transition-colors">Checkout</button>
                </div>
            </div>
        </header>
        <main>
            <div class="flex flex-col gap-4 items-center">
                <For each={cartedProducts()}>{(product) => (
                    <div class="max-w-3xl w-full bg-foreground-1 text-background rounded-md p-3 flex justify-between items-center">
                        <A href={`/products/${product.id}`}>
                            <img src={product.thumbnail} width={120} />
                        </A>
                        <A href={`/products/${product.id}`} class="flex gap-2 items-center">
                            <h1 class="text-2xl font-semibold">{product.title}</h1>
                            <span>{product.price * product.amount}$</span>
                        </A>
                        <div class="grid grid-cols-2 place-items-center gap-2">
                            <div>
                                <h3>{product.amount}</h3>
                            </div>
                            <div class="grid grid-rows-3">
                                <button
                                    class="hover:text-background-3 transition-colors"
                                    onClick={() => {
                                        // Add product to cart
                                        addProductToCart(product.id)
                                        setCartedProducts(createCartedProductsList());
                                    }}
                                >
                                    <Icon path={chevronUp} width={26} />
                                </button>
                                <button
                                    class="text-red-600 hover:text-red-300 transition-all"
                                    onClick={() => {
                                        // remove all products of type from cart
                                        removeProductFromCart(product.id, product.amount)
                                        setCartedProducts(createCartedProductsList());
                                    }}
                                >
                                    <Icon path={xMark} width={26} />
                                </button>
                                <button
                                    class="hover:text-background-3 transition-colors"
                                    onClick={() => {
                                        // remove 1 product from cart
                                        removeProductFromCart(product.id)
                                        setCartedProducts(createCartedProductsList());
                                    }}
                                >
                                    <Icon path={chevronDown} width={26} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}</For>
            </div>
        </main>
    </PageContainer>
}
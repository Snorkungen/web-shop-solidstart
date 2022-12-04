import { createEffect, createSignal } from "solid-js";
import { useParams } from "solid-start";
import toast from "solid-toast";
import PageContainer from "~/components/page-container";
import { addProductToCart, removeProductFromCart, useCartedProducts } from "~/lib/cart";
import classnames from "~/lib/classnames";
import { Product, products } from "~/products";

export function getProduct(productId: Product["id"]) {
    return products.find(({ id }) => id == productId) as Product | undefined;
}

export default function ProductPage() {
    const params = useParams<{ id: string }>();
    const product = getProduct(Number(params.id));

    if (!product) return null;

    const { cartedProducts } = useCartedProducts();

    const [productsInCart, setProductsInCart] = createSignal(cartedProducts()[product.id] || 0, { equals: false });

    const handleRemoveProductFromCart = () => {
        removeProductFromCart(product.id)
        toast(`${product.title} Removed from cart`)
    }
    const handleAddProductToCart = () => {
        addProductToCart(product.id);
        toast.success(`${product.title} Added to cart!`)
    }

    createEffect(() => {
        setProductsInCart(cartedProducts()[product.id] || 0);
    })

    return <PageContainer>
        <main class="grid grid-cols-1 sm:grid-cols-2 px-3">
            <div>
                <img src={product.images[0]} />
            </div>
            <div class="grid place-items-center px-4 capitalize">
                <div >
                    <div class="flex justify-between my-4">
                        <h1 class="text-2xl">{product.title}</h1>
                        <h2>{product.price}$</h2>
                    </div>
                    <div>
                        <p>{product.description}</p>
                    </div>
                    <div class="mt-6 flex flex-row-reverse justify-between">
                        <button
                            class="p-2 border-2 rounded-md border-foreground bg-background-2 font-semibold hover:bg-background-4 transition-colors"
                            onClick={handleAddProductToCart}
                        >Add To cart</button>
                        <button class={classnames(
                            ["hidden", !productsInCart()],
                            "p-2 border-2 rounded-md border-foreground bg-background-2 font-semibold hover:bg-background-4 transition-colors"
                        )}
                            onClick={handleRemoveProductFromCart}
                        >Remove from cart</button>
                    </div>
                    <div class={classnames(
                        ["hidden", !productsInCart()]
                    )}>
                        <h1>{productsInCart()} currently in your cart.</h1>
                    </div>
                </div>
            </div>
        </main>
    </PageContainer>
}
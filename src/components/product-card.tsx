import { A } from "solid-start";
import { Product } from "~/products"

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {

    const handleAddToCart = () => { }

    const href = `/products/${product.id}`

    return (
        <div class="w-full bg-background rounded-md flex flex-col max-h-96">
            <A class="h-1/2 w-full" href={href} >
                <img src={product.thumbnail} alt="" loading="lazy" class="w-full h-full rounded-md object-cover" />
            </A>
            <A class="p-3 grow" href={href}>
                <h1 class="mt-3 text-2xl capitalize font-semibold">{product.title}</h1>
            </A>
            <div class="p-3 flex justify-between items-center">
                <button
                    onClick={handleAddToCart}
                    class="p-1 font-semibold border-2 border-foreground bg-background-1 rounded-md hover:bg-background-3 transition-colors"
                >Add to cart.</button>
                <h2>{product.price}$</h2>
            </div>
        </div>
    )
}
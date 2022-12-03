import { Icon } from "solid-heroicons";
import { bars_4, shoppingCart, xMark } from "solid-heroicons/solid";
import { createEffect, createMemo, createSignal } from "solid-js";
import { A } from "solid-start";
import { useCartedProducts } from "~/lib/cart";
import classnames from "~/lib/classnames";

const ICON_WIDTH = 34;

const navItems = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/about",
        title: "About"
    },
    {
        to: "/contact",
        title: "Contact"
    }
]


export default function Navbar() {
    const { cartedProducts } = useCartedProducts();
    const [totalAmountInCart, setTotalAmountInCart] = createSignal(Object.values(cartedProducts()).reduce((acc, amount) => acc + amount, 0), { equals: false });
    const [isOpen, setIsOpen] = createSignal(false);

    createEffect(() => {
        // This is not the best solution but it works for now
        setTotalAmountInCart(Object.values(cartedProducts()).reduce((acc, amount) => acc + amount, 0))
    })

    return (
        <nav class="w-ful bg-primary text-foreground ">
            <div class="flex justify-between px-3 py-2">
                <div class="flex items-center gap-4">
                    {/* Icon on mobile show more */}
                    <div class="hover:cursor-pointer hover:text-foreground-3 transition-colors sm:hidden" onClick={() => setIsOpen((prev) => !prev)}>
                        <Icon path={isOpen() ? xMark :bars_4} width={ICON_WIDTH} />
                    </div>
                    <div class="flex items-center gap-5">
                        <A href="/">
                            <h1 class="text-4xl font-semibold">Moyer<span class="text-foreground-2">-</span>Gar</h1>
                        </A>
                        <div class="hidden sm:flex gap-3">
                            {navItems.map(({ to, title }) => <A
                                href={to}
                                class="hover:text-foreground-4 text-foreground-1 transition-colors font-semibold text-xl"
                            > {title}</A>)}
                        </div>
                    </div>
                </div>

                {/* In future make shopping cart a menu pop down */}
                <A href="/cart" class="relative m-2">
                    <Icon path={shoppingCart} width={ICON_WIDTH} />
                    <div
                        class={classnames(
                            "absolute -top-3 -right-3 text-center bg-secondary rounded-full w-6 h-6 font-bold align-middle font-mono grid place-items-center",
                            ["hidden", !totalAmountInCart()]
                        )}
                    >{totalAmountInCart()}</div>
                </A>
            </div>
            <div class={classnames(
                "w-full bg-primary-1 flex flex-col gap-2 p-4",
                ["hidden", !isOpen()]
            )}>
                {navItems.map(({ to, title }) => <A
                    href={to}
                    class="hover:text-foreground-4 text-foreground-1 transition-colors font-semibold text-xl"
                > {title}</A>)}
            </div>
        </nav>
    )
}
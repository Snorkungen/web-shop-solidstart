import { Icon } from "solid-heroicons";
import { bars_4, xCircle, shoppingCart } from "solid-heroicons/solid";
import { createSignal } from "solid-js";
import { A } from "solid-start";
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
    }
]


export default function Navbar() {
    const [isOpen, setIsOpen] = createSignal(false)

    return (
        <nav class="w-ful bg-primary text-foreground ">
            <div class="flex justify-between px-3 py-2">
                <div class="flex items-center gap-4">
                    {/* Icon on mobile show more */}
                    <div class="hover:cursor-pointer hover:text-foreground-3 transition-colors sm:hidden" onClick={() => setIsOpen((prev) => !prev)}>
                        <Icon path={bars_4} width={ICON_WIDTH} />
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
                <A href="/cart">
                    <Icon path={shoppingCart} width={ICON_WIDTH} />
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
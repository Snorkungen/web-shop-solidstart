import { ParentProps } from "solid-js";

export default function PageWrapper({ children }: ParentProps) {
    return <div
        class="bg-background text-foreground w-full h-full from-background to-background-2 bg-gradient-to-b overflow-auto"
    >   
        {children}
    </div>
}
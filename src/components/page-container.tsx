import { ParentProps } from "solid-js";

export default function PageContainer({ children }: ParentProps) {
    return <div
        class="max-w-7xl mx-auto"
    >
        {children}
    </div>
}
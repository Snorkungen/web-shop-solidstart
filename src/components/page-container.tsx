import { ParentProps } from "solid-js";

export default function PageContainer({ children }: ParentProps) {
    return <div
        class="max-w-5xl mx-auto"
    >
        {children}
    </div>
}
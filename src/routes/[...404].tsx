import { A } from "solid-start";
import PageContainer from "~/components/page-container";

export default function NotFound() {
  return (
    <PageContainer>
      <h1 class="max-6-xs text-6xl text-center font-thin uppercase my-16">
        Not Found
      </h1>

      <p class="my-4">
        <A href="/" class=" hover:underline">
          Home
        </A>
      </p>
    </PageContainer>
  );
}

import { For } from "solid-js";
import PageContainer from "~/components/page-container";
import ProductCard from "~/components/product-card";
import { products } from "~/products";

export default function Home() {

  return (<PageContainer>
    <header class="mt-10 border-b-2 border-b-foreground">
      <h1 class="text-4xl">Hello World</h1>
      <p class="my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque error, nemo autem consequatur tempore beatae quae vero sapiente fuga esse in harum laboriosam, modi, aspernatur quibusdam facilis! Soluta possimus, tempora repellendus animi facere dignissimos!</p>
      <p class="my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque error, nemo autem consequatur tempore beatae quae vero sapiente fuga esse in harum laboriosam, modi, aspernatur quibusdam facilis! Soluta possimus, tempora repellendus animi facere dignissimos!</p>
    </header>
    <main>
      <div
        class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 justify-items-center p-4 gap-1 auto-rows-fr"
      >
        <For each={products.slice(0, 24)} >
          {(product) => <ProductCard product={product} />}
        </For>
      </div>
    </main>
  </PageContainer>);
}

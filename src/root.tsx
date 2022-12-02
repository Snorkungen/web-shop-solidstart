// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import Navbar from "./components/navbar";
import PageWrapper from "./components/page-wrapper";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en" class="h-full">
      <Head>
        <Title>Moyer-Gar - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="h-full">
        <Suspense>
          <ErrorBoundary>
            <PageWrapper >
            <Navbar />
            <Routes>
              <FileRoutes />
            </Routes>
            </PageWrapper>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}

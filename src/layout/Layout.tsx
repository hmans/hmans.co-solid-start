import { JSX, Suspense } from "solid-js";
import ErrorBoundary, {
  A,
  Body,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import Footer from "~/components/Footer";

export default function Layout({ children }: { children?: JSX.Element }) {
  return (
    <Html lang="en">
      <Head>
        <Title>hmans.co</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Body>
        <header role="banner">
          <A href="/">Index</A>
          <A href="/about">About</A>
        </header>

        <h1>hmans.co</h1>
        <h2>Turning the Browser into a Game Engine, One Package at a Time</h2>

        <main>
          <ErrorBoundary>
            <Suspense>
              <main>{children}</main>
            </Suspense>
          </ErrorBoundary>
        </main>

        <Footer />

        <Scripts />
      </Body>
    </Html>
  );
}

import { JSX, Suspense } from "solid-js";
import ErrorBoundary, {
  A,
  Body,
  Head,
  Html,
  Meta,
  Scripts,
  Title,
} from "solid-start";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children?: JSX.Element }) {
  return (
    <Html lang="en">
      <Head>
        <Title>hmans.co</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Body>
        <Header />

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

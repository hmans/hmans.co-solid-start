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
import "./root.scss";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>hmans.co</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Body>
        <div class="container">
          <A href="/">Index</A>
          <A href="/about">About</A>

          <h1>hmans.co</h1>
          <h2>Turning the Browser into a Game Engine, One Package at a Time</h2>

          <main>
            <ErrorBoundary>
              <Suspense>
                <main>
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </main>
              </Suspense>
            </ErrorBoundary>
          </main>
        </div>

        <Scripts />
      </Body>
    </Html>
  );
}

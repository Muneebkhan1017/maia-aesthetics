import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-display text-primary">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-sm bg-gradient-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-cream">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-primary">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 inline-flex items-center justify-center rounded-sm bg-gradient-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-cream"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Maia Aesthetics & Wellness Clinic — Refined Beauty, Clinical Care" },
      { name: "description", content: "A house of bespoke aesthetic medicine. Injectables, skin, laser and wellness therapies in a serene clinical setting." },
      { property: "og:title", content: "Maia Aesthetics & Wellness Clinic — Refined Beauty, Clinical Care" },
      { property: "og:description", content: "A house of bespoke aesthetic medicine. Injectables, skin, laser and wellness therapies in a serene clinical setting." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Maia Aesthetics & Wellness Clinic — Refined Beauty, Clinical Care" },
      { name: "twitter:description", content: "A house of bespoke aesthetic medicine. Injectables, skin, laser and wellness therapies in a serene clinical setting." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8b26d26d-3b3a-4e39-b7d5-441dac635ea7/id-preview-50f138a7--78a20c3d-978e-4cfe-ac72-b823abe7aea1.lovable.app-1778435688829.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8b26d26d-3b3a-4e39-b7d5-441dac635ea7/id-preview-50f138a7--78a20c3d-978e-4cfe-ac72-b823abe7aea1.lovable.app-1778435688829.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1"><Outlet /></main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

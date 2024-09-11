import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { Scissors } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="max-w-sm mx-auto py-8">
          <header className="mb-8 text-stone-600">
            <h1 className="text-lg flex gap-2"><Scissors /><span>Cale Salon</span></h1>
            <small>Cale TypeScript SDK example</small>
          </header>
          {children}
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

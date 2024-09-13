import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { Moon, Scissors, Sun } from "lucide-react";
import { useDarkMode } from "usehooks-ts";
import { Button } from "./components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const { isDarkMode, toggle } = useDarkMode({ defaultValue: true });
  return (
    <html lang="en" className={isDarkMode ? "dark" : undefined}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="max-w-sm mx-auto py-8">
          <header className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-lg flex gap-2">
                <Scissors />
                <span>Cale Salon</span>
              </h1>
              <small>Cale TypeScript SDK example</small>
            </div>
            <Button variant="outline" size="icon" onClick={toggle}>
              {isDarkMode ? <Sun /> : <Moon />}
            </Button>
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

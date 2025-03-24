import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Providers } from "../providers";
import { AuthContext } from "../hooks/useAuth";
import Header from "../components/header";


export type MyRouterContext = {
  auth: AuthContext,
}
export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <main className="antialiased flex flex-col space-y-4 min-h-screen">
      <Providers>
        <Header/>
          <div className="flex-1 flex flex-col px-4">
            <Outlet />
          </div>
      </Providers>
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </main>
  ),
});

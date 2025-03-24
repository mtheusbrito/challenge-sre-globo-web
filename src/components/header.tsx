import { Link, useRouteContext, useNavigate, useRouterState } from "@tanstack/react-router";
import Button from "./ui/button";

export default function Header() {
    const navigate = useNavigate();
    const { auth } = useRouteContext({ from: '__root__' })
    const router = useRouterState();

    const handlerSignOut = () => {
        auth.signOut()
        navigate({ to: router.location.href, replace: true })
    }

    const excludedRoutes = ['/auth/sign-in', '/auth/sign-up'];

    return <header className="w-full bg-blue-500 py-5 px-4 h-[80px] flex items-center">
        <div className="w-full flex justify-between flex-row items-center">
          <Link to={'/'}>  <span className="font-bold text-white">Challenge SRE globo</span></Link>
            {!excludedRoutes.includes(router.location.pathname) && (
                auth.isAuthenticated() ? (
                    <Button onClick={handlerSignOut} className="font-bold">Sair</Button>
                ) : (
                    <Button className="font-bold" ><Link to="/auth/sign-in">Entrar</Link></Button>
                )
            )}
        </div>
    </header>
}
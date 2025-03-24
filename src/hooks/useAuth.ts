import Cookies from "js-cookie"
const ACCESS_TOKEN = 'challenge-sre-globo-web-access-token';

export const useAuth = () => {
  const signIn = (accessToken: string): void => {
    Cookies.set(ACCESS_TOKEN, accessToken
      , {
        path: '/',
        expires: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000) //7days
      }
    )
  }

  const signOut = (): void => {
    Cookies.remove(ACCESS_TOKEN)
  }

  const isAuthenticated = () => !!Cookies.get(ACCESS_TOKEN)

  return { signIn, signOut, isAuthenticated }
}

export type AuthContext = ReturnType<typeof useAuth>;
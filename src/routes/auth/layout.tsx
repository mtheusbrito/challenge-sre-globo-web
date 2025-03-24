import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({

  component: () => {
    return (<div className='flex-1 flex flex-col items-center justify-center px-4'>
        <Outlet />
    </div>)
  },
})



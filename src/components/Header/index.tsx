import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

const Header = () => {
  return (
    <div className="fixed inset-x-0 top-2.5 z-5000 mx-auto mt-1.5 flex w-full max-w-7xl items-center justify-between px-6 py-1.5 pr-4 lg:top-4">
      <div>LOGO</div>
      <NavigationMenu className="absolute top-1/2 left-1/2 hidden w-fit -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-md md:flex">
        <NavigationMenuList className="relative hidden rounded-full border border-black/10 bg-black/5 px-1.5 py-1 md:flex dark:border-white/10 dark:bg-white/10">
          <NavigationMenuItem>
            <NavigationMenuLink href="/public" className="focus:text-accent-foreground data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground inline-block cursor-pointer gap-1 rounded-full p-2 px-4 py-1.5 text-sm font-light text-black transition-[text-shadow,color] duration-300 hover:bg-transparent hover:text-black/85 focus-visible:ring-4 focus-visible:outline-1 dark:text-white/70 dark:hover:text-white/90 [&_svg:not([class*='size-'])]:size-4">
              Home
            </NavigationMenuLink>
            <div className="bg-primary/5 absolute inset-0 -z-10 w-full rounded-full">
              <div className="bg-primary absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full">
                <div className="bg-primary/20 absolute -top-2 -left-2 h-6 w-12 rounded-full blur-md" />
                <div className="bg-primary/20 absolute -top-1 h-6 w-8 rounded-full blur-md" />
                <div className="bg-primary/20 absolute top-0 left-2 h-4 w-4 rounded-full blur-sm" />
              </div>
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href='/about' className="focus:text-accent-foreground data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground inline-block cursor-pointer gap-1 rounded-full p-2 px-4 py-1.5 text-sm font-light text-black transition-[text-shadow,color] duration-300 hover:bg-transparent hover:text-black/85 focus-visible:ring-4 focus-visible:outline-1 dark:text-white/70 dark:hover:text-white/90 [&_svg:not([class*='size-'])]:size-4">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/projects" className="focus:text-accent-foreground data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground inline-block cursor-pointer gap-1 rounded-full p-2 px-4 py-1.5 text-sm font-light text-black transition-[text-shadow,color] duration-300 hover:bg-transparent hover:text-black/85 focus-visible:ring-4 focus-visible:outline-1 dark:text-white/70 dark:hover:text-white/90 [&_svg:not([class*='size-'])]:size-4">
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Header
import { siteConfig } from "@/config/site";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useMenu from "@/hooks/use-menu";

interface NavbarProps {}

const { title } = siteConfig;

const Navbar = ({}: NavbarProps) => {
  const pathname = usePathname();
  const { blurOnOpen } = useMenu();
  const { lg } = useMediaQuery();
  const isHomePage = pathname === "/";

  const routes = [
    {
      href: `/categories/topwear`,
      label: "topwear",
    },
    {
      href: `/products/maison-margiela-tabi-ankle-boots`,
      label: "tabi ankle boots",
    },
    {
      href: `/categories/shop-all`,
      label: "shop all",
    },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 capitalize text-sm lg:text-base flex items-center w-full px-6 md:px-8 lg:px-12",
        isHomePage ? "text-white" : "text-black bg-white"
      )}
    >
      <div
        className={cn(
          "relative w-full h-full flex justify-between py-6",
          isHomePage ? "" : "border-b border-black"
        )}
      >
        <div className={cn("flex items-center gap-8")}>
          {lg ? (
            <div style={blurOnOpen} className={cn("flex items-center gap-8")}>
              {routes.map((route) => (
                <Link
                  key={route.label}
                  href={route.href}
                  className={cn("transition-colors", isHomePage ? "" : "")}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
        <Link
          href="/"
          className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            isHomePage ? "" : ""
          )}
        >
          {title}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

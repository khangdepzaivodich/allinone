import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function Sidebar() {
  const categories = [
    {
      name: "Electronics",
      link: "/electronics",
    },
    {
      name: "Home and Lifestyle",
      link: "/home-lifestyle",
    },
    {
      name: "Medicine",
      link: "/medicine",
    },
    {
      name: "Sports and Outdoor",
      link: "/sports-outdoor",
    },
    {
      name: "Baby's and Toys",
      link: "/babies-toys",
    },
    {
      name: "Groceries and Pets",
      link: "/groceries-pets",
    },
    {
      name: "Health and Beauty",
      link: "/health-beauty",
    },
  ];

  return (
    <NavigationMenu className=" flex flex-col items-start pl-24 pt-8 pr-28 space-y-2 border-r border-r-gray-400">
      <NavigationMenuList className="flex flex-col items-start space-y-2">
        {/* Women's Fashion */}
        <NavigationMenuItem className="hover:shadow-md hover:bg-gray-100">
          <NavigationMenuTrigger>Women's Fashion</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              <li className="hover:bg-gray-100 hover:shadow-md p-4">
                <NavigationMenuLink asChild>
                  <Link href="/women/dresses">Dresses</Link>
                </NavigationMenuLink>
              </li>
              <li className="hover:bg-gray-100 hover:shadow-md p-4">
                <NavigationMenuLink asChild>
                  <Link href="/women/tops">Tops & Blouses</Link>
                </NavigationMenuLink>
              </li>
              <li className="hover:bg-gray-100 hover:shadow-md p-4">
                <NavigationMenuLink asChild>
                  <Link href="/women/jeans">Jeans & Pants</Link>
                </NavigationMenuLink>
              </li>
              <li className="hover:bg-gray-100 hover:shadow-md p-4">
                <NavigationMenuLink asChild>
                  <Link href="/women/shoes">Shoes</Link>
                </NavigationMenuLink>
              </li>
              <li className="hover:bg-gray-100 hover:shadow-md p-4">
                <NavigationMenuLink asChild>
                  <Link href="/women/accessories">Accessories</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Men's Fashion */}
        <NavigationMenuItem className="hover:shadow-md hover:bg-gray-100">
          <NavigationMenuTrigger className="px-6">
            Men's Fashion
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              <li className="hover:bg-gray-100 hover:shadow-md p-4">
                <NavigationMenuLink asChild>
                  <Link href="/men/shirts">Shirts</Link>
                </NavigationMenuLink>
              </li>
              <li className="hover:bg-gray-100 hover:shadow-md p-4">
                <NavigationMenuLink asChild>
                  <Link href="/men/t-shirts">T-Shirts</Link>
                </NavigationMenuLink>
              </li>
              <li className="hover:bg-gray-100 hover:shadow-md p-4">
                <NavigationMenuLink asChild>
                  <Link href="/men/jeans">Jeans & Trousers</Link>
                </NavigationMenuLink>
              </li>
              <li className="hover:bg-gray-100 hover:shadow-md p-4">
                <NavigationMenuLink asChild>
                  <Link href="/men/shoes">Shoes</Link>
                </NavigationMenuLink>
              </li>
              <li className="hover:bg-gray-100 hover:shadow-md p-4">
                <NavigationMenuLink asChild>
                  <Link href="/men/accessories">Accessories</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      {categories.map((cat, indx) => (
        <NavigationMenuItem key={indx} asChild>
          <Link href={cat.link} legacyBehavior passHref>
            <NavigationMenuLink className="hover:shadow-md hover:bg-gray-100 px-4 py-2">
              {cat.name}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
    </NavigationMenu>
  );
}

export default Sidebar;

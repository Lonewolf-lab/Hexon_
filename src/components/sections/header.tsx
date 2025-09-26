"use client";

import Link from "next/link";
import { Star, ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useState } from "react";
import { usePathname } from "next/navigation";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { category: "About", name: "About Us", href: "/" },
  { category: "Creating", name: "Projects", href: "/progetti" },
  { category: "Sharing", name: "Events", href: "/eventi" },
  { category: "Innovation", name: "Research", href: "/ricerca" },
];

const NavLink = ({
  item,
  activePath,
  isMobile = false,
  onClick,
}: {
  item: typeof navItems[0];
  activePath: string;
  isMobile?: boolean;
  onClick?: () => void;
}) => {
  const isActive = activePath === item.href;

  if (isMobile) {
    return (
      <Link
        href={item.href}
        onClick={onClick}
        className={cn(
          "group w-full text-left no-underline",
          isActive ? "text-white" : "text-gray-400"
        )}
      >
        <div className="text-sm text-secondary-text">{item.category}</div>
        <div className="text-lg text-primary-text">{item.name}</div>
      </Link>
    );
  }

  return (
    <Link
      href={item.href}
      className="group relative py-2 text-base text-white no-underline"
    >
      <div className="overflow-hidden">
        <div className="text-secondary-text text-sm">{item.category}</div>
      </div>
      <div className="overflow-hidden">
        <div className="text-white text-base">{item.name}</div>
      </div>
      <span
        className={cn(
          "absolute bottom-[-8px] left-0 block h-[1px] w-full origin-left bg-white transition-transform duration-300",
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        )}
      />
    </Link>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[85px] bg-[rgba(0,0,0,0.28)] backdrop-blur-sm text-primary-text font-body">
      <div className="w-full flex h-full items-center justify-between px-6">
        <div className="flex flex-1 items-center justify-start">
          <Link
            href="/"
            className="flex h-full items-center text-white no-underline"
          >
            <div className="flex h-[85px] w-[85px] items-center justify-center bg-accent-purple">
              <Star className="h-10 w-10 text-white fill-white" />
            </div>
            <span className="ml-4 hidden text-lg leading-tight sm:block">
              Lugano
              <br />
              Living Lab
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-x-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink item={item} activePath={pathname} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-x-4">
          <div className="hidden lg:flex items-center gap-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-x-1 py-1 px-2 text-base text-white hover:bg-secondary-background hover:text-white"
                >
                  IT
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[60px] rounded-none bg-secondary-background border-border-gray text-white">
                <DropdownMenuItem asChild>
                  <a href="/" className="cursor-pointer">IT</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#" aria-disabled className="opacity-50 pointer-events-none cursor-not-allowed">EN</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="mailto:info@luganolivinglab.ch"
              className="group relative flex items-center justify-center gap-x-2 overflow-hidden bg-secondary px-4 py-2 text-sm text-white no-underline transition-colors hover:bg-opacity-80"
            >
              <span>Contatto</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-secondary-background">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] max-w-sm rounded-none bg-black border-l border-border-gray text-white p-6 flex flex-col">
                <div className="flex justify-end items-center mb-8">
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-secondary-background">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav>
                  <ul className="flex flex-col gap-y-6">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <NavLink
                          item={item}
                          activePath={pathname}
                          isMobile
                          onClick={() => setIsMobileMenuOpen(false)}
                        />
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-auto text-sm text-secondary-text space-y-4">
                  <div>
                    Città di Lugano<br />
                    Comunicazione e innovazione digitale<br />
                    Lugano Living Lab<br />
                    Piazza della Riforma 1<br />
                    CH-6900 Locarno
                  </div>
                   <a
                    href="mailto:info@luganolivinglab.ch"
                    className="flex w-full items-center justify-center gap-x-2 bg-secondary px-4 py-3 text-base text-white no-underline"
                  >
                    <span>Contatto</span>
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
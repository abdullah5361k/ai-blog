"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, PenSquare } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navBarRoutes } from "@/lib/routes";
import SignInModal from "./auth/sign-in-modal";
import SignUpModal from "./auth/sign-up-modal";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="font-serif font-bold text-2xl tracking-tight">
          Teche
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navBarRoutes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* {isSearchOpen ? (
            <div className="flex items-center">
              <SearchBar />
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex"
            >
              <Search className="h-5 w-5" />
            </Button>
          )} */}

          <ThemeToggle />

          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <PenSquare className="h-4 w-4" />
              Write Blog
            </Button>
            <Button variant="ghost" onClick={() => setIsSignInOpen(true)}>
              Sign in
            </Button>
            <Button onClick={() => setIsSignUpOpen(true)}>Sign up</Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navBarRoutes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === route.path
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {route.name}
                  </Link>
                ))}
                {/* <div className="mt-4">
                  <SearchBar />
                </div> */}
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" className="gap-2">
                    <PenSquare className="h-4 w-4" />
                    Write Blog
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsSignInOpen(true)}
                  >
                    Sign in
                  </Button>
                  <Button onClick={() => setIsSignUpOpen(true)}>Sign up</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onOpenSignUp={() => setIsSignUpOpen(true)}
      />

      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        onOpenSignIn={() => setIsSignInOpen(true)}
      />
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  List,
  Sun,
  Moon,
  Phone,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Le Club", href: "/le-club" },
  { name: "Equipes", href: "/equipes" },
  { name: "Calendrier", href: "/calendrier" },
  { name: "Entrainements", href: "/entrainements" },
  { name: "Inscriptions", href: "/inscriptions" },
  { name: "Galerie", href: "/galerie" },
  { name: "Actus", href: "/actualites" },
  { name: "Partenaires", href: "/partenaires" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  /* Pages with dark hero backgrounds where header text needs to be white */
  const hasDarkHero = true;
  const isTransparentOnDark = !scrolled && hasDarkHero;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className={`hidden lg:block border-b ${isTransparentOnDark ? "border-white/10" : "border-border/50"}`}>
        <div className={`max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between text-xs ${isTransparentOnDark ? "text-white/70" : "text-muted-foreground"}`}>
          <div className="flex items-center gap-4">
            <a
              href="tel:+33689983661"
              className="flex items-center gap-1.5 hover:text-usbiot-gold transition-colors"
            >
              <Phone className="w-3 h-3" weight="regular" />
              06 89 98 36 61
            </a>
            <span className="text-border">|</span>
            <a
              href="mailto:usbiot.secretariat@gmail.com"
              className="hover:text-usbiot-gold transition-colors"
            >
              usbiot.secretariat@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <Image
              src="/images/logo-usbiot.png"
              alt="US Biot Football"
              width={44}
              height={52}
              className="transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="hidden sm:block">
              <span className={`font-heading text-lg font-bold tracking-tight ${isTransparentOnDark ? "text-white" : "text-foreground"}`}>
                US Biot
              </span>
              <span className={`block text-[10px] uppercase tracking-[0.2em] font-medium ${isTransparentOnDark ? "text-white/50" : "text-muted-foreground"}`}>
                Football
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg flex items-center gap-1 ${isTransparentOnDark ? "hover:bg-white/10" : "hover:bg-usbiot-gold/10"} ${isActive ? "text-usbiot-gold font-semibold" : (isTransparentOnDark ? "text-white/80 hover:text-usbiot-gold" : "text-foreground/80 hover:text-usbiot-gold")}`}
              >
                {item.name}
              </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={isTransparentOnDark ? "text-white hover:bg-white/10 hover:text-white" : ""}
                aria-label="Changer de theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" weight="bold" />
                ) : (
                  <Moon className="w-4 h-4" weight="bold" />
                )}
              </Button>
            )}

            <Link href="/inscriptions" className="hidden md:block">
              <Button className="bg-primary text-primary-foreground hover:bg-usbiot-red-dark font-semibold">
                Inscription
              </Button>
            </Link>

            {/* Mobile burger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className={`lg:hidden inline-flex items-center justify-center rounded-md w-9 h-9 ${isTransparentOnDark ? "text-white hover:bg-white/10" : "hover:bg-accent hover:text-accent-foreground"}`}
                aria-label="Menu"
              >
                <List className="w-5 h-5" weight="bold" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/images/logo-usbiot.png"
                        alt="US Biot"
                        width={36}
                        height={42}
                      />
                      <span className="font-heading text-lg font-bold">
                        US Biot
                      </span>
                    </div>
                  </div>
                  <nav className="flex-1 overflow-y-auto py-4">
                    {navigation.map((item) => {
                      const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                      return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={`block px-6 py-3 text-base font-medium hover:bg-usbiot-gold/10 transition-colors ${isActive ? "text-usbiot-gold font-semibold" : "text-foreground/80 hover:text-usbiot-gold"}`}
                      >
                        {item.name}
                      </Link>
                      );
                    })}
                  </nav>
                  <div className="p-6 border-t border-border space-y-3">
                    <Link href="/inscriptions" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-primary text-primary-foreground font-semibold">
                        Inscription
                      </Button>
                    </Link>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <a
                        href="tel:+33689983661"
                        className="hover:text-usbiot-gold transition-colors"
                      >
                        06 89 98 36 61
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Envelope, MapPin } from "@phosphor-icons/react";
import { FacebookIcon, InstagramIcon } from "@/components/shared/social-icons";

const footerLinks = {
  club: [
    { name: "Presentation", href: "/le-club" },
    { name: "Staff & Dirigeants", href: "/le-club#staff" },
    { name: "Histoire", href: "/le-club#histoire" },
    { name: "Partenaires", href: "/partenaires" },
  ],
  football: [
    { name: "Equipes", href: "/equipes" },
    { name: "Calendrier", href: "/calendrier" },
    { name: "Entrainements", href: "/entrainements" },
    { name: "Galerie", href: "/galerie" },
  ],
  infos: [
    { name: "Inscriptions", href: "/inscriptions" },
    { name: "Actualites", href: "/actualites" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-usbiot-red-dark to-usbiot-ink text-white noise-overlay">
      <div className="relative z-10">
        {/* CTA Band */}
        <div className="border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_50%,_rgba(216,38,28,0.2),_transparent)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight">
                Rejoignez l&apos;aventure{" "}
                <span className="text-usbiot-red-light">US Biot</span>
              </h3>
              <p className="mt-3 text-white/40 text-lg">
                Inscriptions ouvertes pour la saison 2025-2026
              </p>
            </div>
            <Link
              href="/inscriptions"
              className="inline-flex items-center gap-2 bg-usbiot-gold hover:bg-usbiot-gold-dark text-usbiot-ink px-10 py-4 font-bold text-lg transition-all duration-300 hover:translate-x-1 shrink-0"
            >
              S&apos;inscrire maintenant
            </Link>
          </div>
        </div>

        {/* Links grid */}
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logo-usbiot.png"
                  alt="US Biot Football"
                  width={48}
                  height={56}
                  className="brightness-0 invert"
                />
                <div>
                  <span className="font-heading text-xl font-bold">US Biot</span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">
                    Football
                  </span>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed max-w-sm mb-6">
                Club familial de football a Biot, Cote d&apos;Azur. Ecole de foot,
                competition et convivialite depuis des decennies.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/usbiot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-usbiot-red flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/usbiotfootball/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-usbiot-red flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Le Club */}
            <div>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-usbiot-gold">
                Le Club
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.club.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Football */}
            <div>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-usbiot-gold">
                Football
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.football.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Infos */}
            <div>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-usbiot-gold">
                Informations
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.infos.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-2 text-sm text-white/60">
                <a
                  href="tel:+33689983661"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" weight="regular" />
                  06 89 98 36 61
                </a>
                <a
                  href="mailto:usbiot.secretariat@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Envelope className="w-3.5 h-3.5" weight="regular" />
                  usbiot.secretariat@gmail.com
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" weight="regular" />
                  <span>Stade Rene Cuicala, Biot 06410</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} US Biot Football. Tous droits reserves.</p>
            <p>
              Fait avec passion pour le football
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

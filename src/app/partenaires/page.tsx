"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake, ArrowRight, Star, Buildings, UsersThree } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "R2C Concept", logo: "/images/partenaires/r2c-concept.avif" },
  { name: "SAP", logo: "/images/partenaires/sap.avif" },
  { name: "Trophées Sport", logo: "/images/partenaires/trophees-sport.avif" },
  { name: "Boucherie du Migranier", logo: "/images/partenaires/boucherie-du-migranier.avif" },
  { name: "Caraglio Expert Comptable", logo: "/images/partenaires/caraglio-expert-comptable.avif" },
  { name: "CSF", logo: "/images/partenaires/csf.avif" },
  { name: "GAN", logo: "/images/partenaires/gan.avif" },
  { name: "Inkcut Barber Tattoo", logo: "/images/partenaires/inkcut-barber-tatoo.avif" },
  { name: "L'Ovive", logo: "/images/partenaires/l-ovive-logo.avif" },
  { name: "JSP", logo: "/images/partenaires/logo-jsp.avif" },
  { name: "Marco Déco", logo: "/images/partenaires/marco-deco.avif" },
  { name: "Marra Construction", logo: "/images/partenaires/marra-construction.avif" },
  { name: "Multi Tech", logo: "/images/partenaires/multi-tech.avif" },
  { name: "Opticien du Cap", logo: "/images/partenaires/opticien-du-cap.avif" },
  { name: "Provence Travaux", logo: "/images/partenaires/provence-travaux.avif" },
  { name: "R&D Construction", logo: "/images/partenaires/r-d-construction.avif" },
  { name: "Ruvalor", logo: "/images/partenaires/ruvalor.avif" },
  { name: "Sacla Italia", logo: "/images/partenaires/sacla-italia.avif" },
  { name: "Stamp Publicité", logo: "/images/partenaires/stamp-publicite.avif" },
];

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-border/50 bg-white dark:bg-card">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative w-[160px] h-[80px] flex items-center justify-center">
          <Image
            src={partner.logo}
            alt={`Logo ${partner.name}`}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            sizes="160px"
          />
        </div>
        <h3 className="font-heading font-bold text-sm leading-tight">
          {partner.name}
        </h3>
      </div>
    </Card>
  );
}

export default function PartenairesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-usbiot-red via-usbiot-red-dark to-usbiot-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(205,183,40,0.15),_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-40 pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <Badge className="mb-6 bg-usbiot-gold/20 text-usbiot-gold border-usbiot-gold/30 font-semibold uppercase tracking-wider text-xs">
              Ils nous soutiennent
            </Badge>
            <h1 className="text-white font-heading leading-[1.05]">
              Nos <span className="text-usbiot-gold">Partenaires</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Le succès de l&apos;US Biot repose sur le soutien précieux de nos
              partenaires locaux et régionaux. Ensemble, nous faisons grandir le
              football à Biot.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center gap-8 mb-10">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl bg-usbiot-red/10 flex items-center justify-center mb-3">
                    <Handshake className="w-7 h-7 text-usbiot-red" weight="duotone" />
                  </div>
                  <span className="font-heading font-bold text-2xl">19</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Partenaires
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl bg-usbiot-gold/10 flex items-center justify-center mb-3">
                    <Buildings className="w-7 h-7 text-usbiot-gold-dark" weight="duotone" />
                  </div>
                  <span className="font-heading font-bold text-2xl">100%</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Locaux
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl bg-usbiot-gold/10 flex items-center justify-center mb-3">
                    <UsersThree className="w-7 h-7 text-usbiot-gold-dark" weight="duotone" />
                  </div>
                  <span className="font-heading font-bold text-2xl">300+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Licenciés soutenus
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nos partenaires jouent un rôle essentiel dans la vie du club.
                Grâce à leur soutien, nous pouvons offrir les meilleures
                conditions d&apos;entraînement, organiser des événements de qualité
                et accompagner nos 300 licenciés tout au long de la saison.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ALL PARTNERS GRID */}
      <section className="py-24 md:py-36 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-usbiot-red/10 text-usbiot-red border-usbiot-red/20 font-semibold uppercase tracking-wider text-xs">
              Saison 2025-2026
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Nos Partenaires
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Merci à toutes les entreprises qui soutiennent le club et
              contribuent au développement du football à Biot.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
          >
            {partners.map((partner) => (
              <motion.div key={partner.name} variants={staggerItem}>
                <PartnerCard partner={partner} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA - DEVENIR PARTENAIRE */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <Card className="relative overflow-hidden border-2 border-usbiot-gold/20">
              <div className="absolute inset-0 bg-gradient-to-br from-usbiot-gold/10 via-usbiot-gold/5 to-transparent" />
              <div className="relative p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-usbiot-gold-dark" weight="duotone" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-usbiot-gold-dark">
                        Rejoignez l&apos;aventure
                      </span>
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                      Devenir{" "}
                      <span className="text-usbiot-red">Partenaire</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      Associez votre image à un club familial et dynamique de la
                      Côte d&apos;Azur. Plusieurs formules de partenariat sont
                      disponibles selon vos objectifs de visibilité.
                    </p>
                    <ul className="space-y-3 text-muted-foreground mb-8">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-usbiot-gold rounded-full shrink-0" />
                        Visibilité sur les maillots, bannières et supports de
                        communication
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-usbiot-gold rounded-full shrink-0" />
                        Présence sur le site internet et les réseaux sociaux du club
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-usbiot-gold rounded-full shrink-0" />
                        Invitations VIP aux événements et matchs du club
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-usbiot-gold rounded-full shrink-0" />
                        Avantage fiscal : déduction d&apos;impôt sur le
                        sponsoring sportif
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center lg:items-end gap-4">
                    <div className="w-full max-w-sm bg-gradient-to-br from-usbiot-red via-usbiot-red-dark to-usbiot-ink rounded-2xl p-8 text-center">
                      <Handshake className="w-12 h-12 text-usbiot-gold mx-auto mb-4" weight="duotone" />
                      <div className="text-white font-heading text-xl font-bold mb-2">
                        Contactez-nous
                      </div>
                      <p className="text-white/60 text-sm mb-2">
                        Damien Escoffier
                      </p>
                      <p className="text-white/50 text-xs mb-6">
                        Commission Partenaires
                      </p>
                      <Link href="/contact">
                        <Button
                          size="lg"
                          className="w-full bg-usbiot-gold hover:bg-usbiot-gold-dark text-usbiot-ink font-bold"
                        >
                          Devenir partenaire
                          <ArrowRight className="w-4 h-4 ml-2" weight="bold" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

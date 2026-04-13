"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Handshake, ArrowRight, Star, Buildings, UsersThree } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface Partner {
  name: string;
  description: string;
  gradient: string;
  initials: string;
}

const mainPartners: Partner[] = [
  {
    name: "Mairie de Biot",
    description:
      "Partenaire historique du club, la commune de Biot soutient le developpement du football sur son territoire et finance les infrastructures sportives.",
    gradient: "from-blue-600 to-blue-800",
    initials: "MB",
  },
  {
    name: "Sport 2000 Antibes",
    description:
      "Equipementier officiel du club, Sport 2000 fournit les tenues de match et d'entrainement pour toutes les equipes de l'US Biot.",
    gradient: "from-usbiot-red to-usbiot-red-dark",
    initials: "S2",
  },
  {
    name: "Azur Credit Immobilier",
    description:
      "Courtier en prets immobiliers sur la Cote d'Azur, partenaire principal maillot de l'equipe Seniors depuis 2022.",
    gradient: "from-usbiot-gold to-amber-700",
    initials: "AC",
  },
];

const officialPartners: Partner[] = [
  {
    name: "Boulangerie du Village",
    description:
      "Fournisseur officiel des gouters d'apres-match pour les jeunes categories.",
    gradient: "from-amber-500 to-amber-700",
    initials: "BV",
  },
  {
    name: "Pharmacie de Biot",
    description:
      "Partenaire sante du club, accompagne les equipes dans la prevention et le soin.",
    gradient: "from-emerald-500 to-emerald-700",
    initials: "PB",
  },
  {
    name: "Auto-Ecole Biotoise",
    description:
      "Partenaire mobilite, offre des tarifs preferentiels aux licencies du club.",
    gradient: "from-sky-500 to-sky-700",
    initials: "AE",
  },
  {
    name: "Restaurant Le Provencal",
    description:
      "Accueille les repas d'equipe et les evenements du club tout au long de la saison.",
    gradient: "from-rose-500 to-rose-700",
    initials: "LP",
  },
  {
    name: "Garage Meca-Biot",
    description:
      "Entretien du parc automobile du club et sponsor des deplacements en exterieur.",
    gradient: "from-slate-500 to-slate-700",
    initials: "GM",
  },
];

const regularPartners: Partner[] = [
  {
    name: "Pizza Nico",
    description: "Sponsor des tournois et soirees du club.",
    gradient: "from-orange-500 to-orange-700",
    initials: "PN",
  },
  {
    name: "Optique Riviera",
    description: "Soutien financier et dotations pour les equipes jeunes.",
    gradient: "from-violet-500 to-violet-700",
    initials: "OR",
  },
  {
    name: "Plomberie Azureenne",
    description: "Partenaire technique pour l'entretien des installations.",
    gradient: "from-cyan-500 to-cyan-700",
    initials: "PA",
  },
  {
    name: "Cabinet Martin Avocats",
    description: "Conseil juridique et partenaire fidele du club.",
    gradient: "from-indigo-500 to-indigo-700",
    initials: "CM",
  },
  {
    name: "Fleurs de Biot",
    description: "Decorations pour les evenements et ceremonies du club.",
    gradient: "from-pink-500 to-pink-700",
    initials: "FB",
  },
  {
    name: "Imprimerie Sophia",
    description: "Impression des programmes de match et supports de communication.",
    gradient: "from-teal-500 to-teal-700",
    initials: "IS",
  },
  {
    name: "Assurance Dubois",
    description: "Couverture des licencies et des evenements du club.",
    gradient: "from-red-500 to-red-700",
    initials: "AD",
  },
  {
    name: "Informatique Cote d'Azur",
    description: "Support informatique et gestion du site web du club.",
    gradient: "from-gray-500 to-gray-700",
    initials: "IC",
  },
];

function PartnerCard({
  partner,
  size = "regular",
}: {
  partner: Partner;
  size?: "large" | "medium" | "regular";
}) {
  const logoSize =
    size === "large"
      ? "w-24 h-24 text-3xl"
      : size === "medium"
        ? "w-16 h-16 text-xl"
        : "w-12 h-12 text-base";

  return (
    <Card
      className={`p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-border/50 ${
        size === "large" ? "md:p-8" : ""
      }`}
    >
      <div className="flex flex-col items-center text-center">
        <div
          className={`${logoSize} bg-gradient-to-br ${partner.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform font-heading font-bold text-white`}
        >
          {partner.initials}
        </div>
        <h3
          className={`font-heading font-bold mb-2 ${
            size === "large" ? "text-xl" : size === "medium" ? "text-lg" : "text-base"
          }`}
        >
          {partner.name}
        </h3>
        <p
          className={`text-muted-foreground leading-relaxed ${
            size === "large" ? "text-base" : "text-sm"
          }`}
        >
          {partner.description}
        </p>
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
              Le succes de l&apos;US Biot repose sur le soutien precieux de nos
              partenaires locaux et regionaux. Ensemble, nous faisons grandir le
              football a Biot.
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
                  <span className="font-heading font-bold text-2xl">16+</span>
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
                    Licencies soutenus
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nos partenaires jouent un role essentiel dans la vie du club.
                Grace a leur soutien, nous pouvons offrir les meilleures
                conditions d&apos;entrainement, organiser des evenements de qualite
                et accompagner nos 300 licencies tout au long de la saison.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MAIN PARTNERS */}
      <section className="py-24 md:py-36 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Premium"
            title="Partenaires Principaux"
            description="Nos partenaires majeurs qui soutiennent le club au plus haut niveau."
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {mainPartners.map((partner) => (
              <motion.div key={partner.name} variants={staggerItem}>
                <PartnerCard partner={partner} size="large" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OFFICIAL PARTNERS */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Officiels"
            title="Partenaires Officiels"
            description="Des partenaires engages qui contribuent activement a la vie du club."
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {officialPartners.map((partner) => (
              <motion.div key={partner.name} variants={staggerItem}>
                <PartnerCard partner={partner} size="medium" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* REGULAR PARTNERS */}
      <section className="py-24 md:py-36 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Soutiens"
            title="Partenaires"
            description="Tous les partenaires qui participent au rayonnement du club."
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {regularPartners.map((partner) => (
              <motion.div key={partner.name} variants={staggerItem}>
                <PartnerCard partner={partner} size="regular" />
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
                      Associez votre image a un club familial et dynamique de la
                      Cote d&apos;Azur. Plusieurs formules de partenariat sont
                      disponibles selon vos objectifs de visibilite.
                    </p>
                    <ul className="space-y-3 text-muted-foreground mb-8">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-usbiot-gold rounded-full shrink-0" />
                        Visibilite sur les maillots, bannieres et supports de
                        communication
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-usbiot-gold rounded-full shrink-0" />
                        Presence sur le site internet et les reseaux sociaux du club
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-usbiot-gold rounded-full shrink-0" />
                        Invitations VIP aux evenements et matchs du club
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-usbiot-gold rounded-full shrink-0" />
                        Avantage fiscal : deduction d&apos;impot sur le
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
                      <p className="text-white/60 text-sm mb-6">
                        Echangeons sur un partenariat sur mesure pour votre
                        entreprise.
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

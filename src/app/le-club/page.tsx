"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  UsersThree,
  Trophy,
  Heart,
  Target,
  Shield,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Handshake,
  GraduationCap,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/motion";

const timeline = [
  {
    year: "1982",
    title: "Fondation du club",
    description:
      "Création de l'Union Sportive de Biot par une poignée de passionnés du village, avec une seule équipe senior.",
  },
  {
    year: "1995",
    title: "Ouverture de l'école de foot",
    description:
      "Lancement des catégories jeunes pour accueillir les enfants de Biot et des communes voisines dès l'âge de 5 ans.",
  },
  {
    year: "2005",
    title: "Montée en district",
    description:
      "L'équipe senior accède au championnat de district, récompensant des années de travail et de progression.",
  },
  {
    year: "2015",
    title: "Label FFF Espoirs",
    description:
      "La Fédération Française de Football décerne le label Espoirs à l'école de football pour la qualité de sa formation.",
  },
  {
    year: "2020",
    title: "Rénovation du stade",
    description:
      "Installation d'un terrain synthétique dernière génération et rénovation complète des vestiaires au Stade René Cuicala.",
  },
  {
    year: "2025",
    title: "Plus de 300 licenciés",
    description:
      "Le club atteint un record historique avec plus de 300 licenciés répartis dans 15 équipes, de U7 à Seniors.",
  },
];

const staff = [
  {
    name: "Jean-Pierre Moretti",
    role: "Président",
    description:
      "À la tête du club depuis 2018, il porte la vision d'un club familial et ambitieux.",
    icon: Star,
  },
  {
    name: "Sophie Laurent",
    role: "Vice-Présidente",
    description:
      "En charge des partenariats et de la vie associative, elle développe le rayonnement du club.",
    icon: Handshake,
  },
  {
    name: "Marc Dupont",
    role: "Secrétaire Général",
    description:
      "Garant de l'organisation administrative et de la coordination entre les équipes dirigeantes.",
    icon: Shield,
  },
  {
    name: "Catherine Rossi",
    role: "Trésorière",
    description:
      "Elle veille à la bonne gestion financière et à la pérennité des projets du club.",
    icon: Target,
  },
  {
    name: "Philippe Amar",
    role: "Directeur Sportif",
    description:
      "Ancien joueur professionnel, il supervise la politique sportive et la formation des éducateurs.",
    icon: Trophy,
  },
  {
    name: "L'équipe éducative",
    role: "Éducateurs & Entraîneurs",
    description:
      "12 éducateurs diplômés d'État encadrent les 15 équipes du club avec passion et compétence.",
    icon: GraduationCap,
  },
];

const values = [
  {
    icon: Heart,
    title: "Esprit Familial",
    description:
      "Le club est avant tout une grande famille. Parents, joueurs et bénévoles partagent des moments forts tout au long de la saison.",
  },
  {
    icon: Handshake,
    title: "Respect & Fair-Play",
    description:
      "Le respect de l'adversaire, de l'arbitre et des coéquipiers est au cœur de notre projet éducatif et sportif.",
  },
  {
    icon: GraduationCap,
    title: "Formation & Progression",
    description:
      "Chaque joueur bénéficie d'un encadrement adapté à son âge et son niveau pour progresser à son rythme.",
  },
  {
    icon: UsersThree,
    title: "Engagement Bénévole",
    description:
      "Le club vit grâce à l'investissement de dizaines de bénévoles qui donnent de leur temps chaque semaine.",
  },
  {
    icon: Trophy,
    title: "Ambition Sportive",
    description:
      "Nous visons l'excellence sportive à chaque catégorie tout en préservant le plaisir du jeu et la convivialité.",
  },
  {
    icon: Target,
    title: "Ancrage Local",
    description:
      "Profondément ancré dans la vie biotoise, le club participe activement aux événements de la commune.",
  },
];

const stadiumFeatures = [
  "Terrain synthétique dernière génération",
  "Éclairage LED haute performance",
  "Vestiaires rénovés en 2020",
  "Tribunes couvertes de 200 places",
  "Buvette et club house",
  "Parking gratuit",
];

export default function LeClubPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[40dvh] flex items-center overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-usbiot-red via-usbiot-red-dark to-usbiot-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(205,183,40,0.15),_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-40 pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-usbiot-gold/20 text-usbiot-gold border-usbiot-gold/30 font-semibold uppercase tracking-wider text-xs">
              Depuis 1982
            </Badge>
            <h1 className="text-white font-heading leading-[1.05]">
              Découvrez
              <br />
              <span className="text-usbiot-gold">l&apos;US Biot</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-xl">
              Plus de 40 ans de passion, de formation et de convivialité au cœur
              du village de Biot, sur la Côte d&apos;Azur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Notre Histoire"
            title="40 ans de passion biotoise"
            description="De la fondation en 1982 à aujourd'hui, retour sur les moments clés qui ont forgé l'identité de l'US Biot."
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, i) => (
              <ScrollReveal
                key={item.year}
                delay={i * 0.08}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                    i % 2 === 0
                      ? "md:flex-row md:text-right"
                      : "md:flex-row-reverse md:text-left"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2 ring-4 ring-background z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <span className="text-sm font-bold text-primary font-heading">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-lg font-bold mt-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NOTRE STAFF */}
      <section className="py-24 md:py-36 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Notre Staff"
            title="L'équipe dirigeante"
            description="Des bénévoles passionnés et investis qui font vivre le club au quotidien."
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {staff.map((member) => (
              <motion.div key={member.name} variants={staggerItem}>
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <member.icon className="w-6 h-6 text-primary" weight="duotone" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {member.role}
                      </span>
                      <h3 className="font-heading text-lg font-bold mt-0.5">
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NOS VALEURS */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Nos Valeurs"
            title="Ce qui nous anime"
            description="Six piliers fondateurs qui guident chaque action du club depuis sa création."
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={staggerItem}>
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-border/50">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" weight="duotone" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STADE */}
      <section className="py-24 md:py-36 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Notre Stade"
            title="Stade René Cuicala"
            description="Des installations modernes au cœur du village de Biot pour la pratique du football dans les meilleures conditions."
          />
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="left">
              <Card className="overflow-hidden border-border/50">
                <div className="aspect-video bg-gradient-to-br from-primary/10 via-muted to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary/40 mx-auto mb-3" weight="duotone" />
                    <p className="text-sm text-muted-foreground">
                      Photo du stade
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-2">
                  Un écrin au cœur de Biot
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Entièrement rénové en 2020, le Stade René Cuicala offre des
                  conditions optimales pour l&apos;entraînement et la compétition.
                  Le terrain synthétique dernière génération permet une pratique
                  toute l&apos;année, quelles que soient les conditions
                  météorologiques.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {stadiumFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" weight="regular" />
                  <span>Chemin de Biot, 06410 Biot, France</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <Clock className="w-4 h-4" weight="regular" />
                  <span>
                    Entraînements du lundi au samedi, matchs le dimanche
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA INSCRIPTIONS */}
      <section className="py-24 md:py-36">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-usbiot-gold/10 to-usbiot-gold/5 border-2 border-usbiot-gold/20">
              <Star className="w-8 h-8 text-usbiot-gold-dark mx-auto mb-4" weight="duotone" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Rejoignez l&apos;aventure US Biot
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
                Que vous soyez débutant ou confirmé, enfant ou adulte, il y a une
                place pour vous à l&apos;US Biot. Inscrivez-vous pour la saison
                2025-2026.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/inscriptions">
                  <Button
                    size="lg"
                    className="bg-usbiot-gold hover:bg-usbiot-gold-dark text-usbiot-ink font-bold text-base px-8"
                  >
                    S&apos;inscrire maintenant
                    <ArrowRight className="w-4 h-4 ml-2" weight="bold" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold text-base px-8"
                  >
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

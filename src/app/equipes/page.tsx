"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SoccerBall,
  UsersThree,
  CalendarBlank,
  Trophy,
  Clock,
  MapPin,
  ArrowRight,
  Star,
  GraduationCap,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface TeamCategory {
  id: string;
  name: string;
  age: string;
  color: string;
  badgeBg: string;
  coaches: string[];
  trainings: { jour: string; horaire: string }[];
  competition: string;
  level: string;
  description: string;
}

const categories: TeamCategory[] = [
  {
    id: "u5u6",
    name: "U5/U6",
    age: "Nés en 2021/2020",
    color: "bg-usbiot-gold",
    badgeBg: "bg-usbiot-gold/10 text-usbiot-gold-dark border-usbiot-gold/20",
    coaches: ["Bacha Nolan", "Deharbe Adriano"],
    trainings: [{ jour: "Mercredi", horaire: "13h45 - 15h15" }],
    competition: "Ateliers découverte",
    level: "Découverte",
    description:
      "L'éveil au football par le jeu. Les tout-petits Biotois découvrent le ballon rond dans un cadre ludique et bienveillant.",
  },
  {
    id: "u7",
    name: "U7",
    age: "Nés en 2019",
    color: "bg-usbiot-red",
    badgeBg: "bg-usbiot-red/10 text-usbiot-red border-usbiot-red/20",
    coaches: ["Drai Rémi", "Roch Mattéo"],
    trainings: [{ jour: "Mercredi", horaire: "13h45 - 15h15" }],
    competition: "Plateaux découverte",
    level: "Découverte",
    description:
      "L'école de foot pour les plus jeunes. Motricité, coordination et premiers contacts avec le ballon dans la bonne humeur.",
  },
  {
    id: "u8",
    name: "U8",
    age: "Nés en 2018",
    color: "bg-usbiot-gold/80",
    badgeBg: "bg-usbiot-gold/10 text-usbiot-gold-dark border-usbiot-gold/20",
    coaches: ["Zid Rayane", "Claude Itibarian"],
    trainings: [{ jour: "Mercredi", horaire: "13h45 - 15h15" }],
    competition: "Plateaux U8 district",
    level: "Initiation",
    description:
      "L'apprentissage des fondamentaux : conduite de balle, passe courte, tir. Premiers matchs en équipe réduite.",
  },
  {
    id: "u9",
    name: "U9",
    age: "Nés en 2017",
    color: "bg-usbiot-red-dark",
    badgeBg: "bg-usbiot-red/10 text-usbiot-red border-usbiot-red/20",
    coaches: ["Escoffier Damien", "Righi Gilles"],
    trainings: [
      { jour: "Mercredi", horaire: "13h45 - 15h15" },
      { jour: "Vendredi", horaire: "18h15 - 19h45" },
    ],
    competition: "Plateaux U9 district",
    level: "Initiation",
    description:
      "Renforcement technique et premiers schémas de jeu collectif. Deux séances par semaine pour progresser.",
  },
  {
    id: "u10",
    name: "U10",
    age: "Nés en 2016",
    color: "bg-usbiot-red",
    badgeBg: "bg-usbiot-red/10 text-usbiot-red border-usbiot-red/20",
    coaches: ["Bacha Yann", "Van de Voorde Christophe"],
    trainings: [
      { jour: "Lundi", horaire: "17h30 - 19h00" },
      { jour: "Mercredi", horaire: "15h30 - 17h00" },
    ],
    competition: "Championnat district U10",
    level: "Apprentissage",
    description:
      "Le début de la compétition en championnat. Travail sur la technique individuelle et les premiers schémas tactiques.",
  },
  {
    id: "u11g",
    name: "U11G",
    age: "Nés en 2015",
    color: "bg-usbiot-gold",
    badgeBg: "bg-usbiot-gold/10 text-usbiot-gold-dark border-usbiot-gold/20",
    coaches: ["Roch Mattéo"],
    trainings: [
      { jour: "Mercredi", horaire: "15h30 - 17h00" },
      { jour: "Vendredi", horaire: "17h30 - 19h00" },
    ],
    competition: "Championnat district U11",
    level: "Apprentissage",
    description:
      "Consolidation des acquis techniques. Les joueurs développent leur jeu collectif et leur compréhension tactique.",
  },
  {
    id: "u12g",
    name: "U12G",
    age: "Nés en 2014",
    color: "bg-usbiot-red/80",
    badgeBg: "bg-usbiot-red/10 text-usbiot-red border-usbiot-red/20",
    coaches: ["Verucchi Jérôme", "Millien Julien"],
    trainings: [
      { jour: "Mercredi", horaire: "18h30 - 20h00" },
      { jour: "Vendredi", horaire: "18h45 - 19h45" },
    ],
    competition: "Championnat district U12",
    level: "Pré-formation",
    description:
      "Approfondissement tactique et technique. Les joueurs découvrent le football à 11 et les notions de poste.",
  },
  {
    id: "u13",
    name: "U13G / U13F",
    age: "Nés en 2013/2014",
    color: "bg-usbiot-gold-dark",
    badgeBg: "bg-usbiot-gold/10 text-usbiot-gold-dark border-usbiot-gold/20",
    coaches: ["Franzetti Thomas", "Beaudequin Quentin", "Macario Amélie"],
    trainings: [
      { jour: "Lundi", horaire: "18h30 - 20h00" },
      { jour: "Mercredi", horaire: "15h30 - 18h30" },
    ],
    competition: "Championnat district U13",
    level: "Pré-formation",
    description:
      "Garçons et filles évoluent au club. Travail intensifié sur la technique, le jeu de tête et la construction du jeu.",
  },
  {
    id: "u15g",
    name: "U15G",
    age: "Nés en 2012/2011",
    color: "bg-usbiot-red",
    badgeBg: "bg-usbiot-red/10 text-usbiot-red border-usbiot-red/20",
    coaches: ["Lakrout Djemelle", "Deville Éric"],
    trainings: [
      { jour: "Mardi", horaire: "18h00 - 19h30" },
      { jour: "Jeudi", horaire: "18h00 - 19h30" },
    ],
    competition: "Championnat départemental U15",
    level: "Formation",
    description:
      "La formation s'intensifie avec un travail physique adapté, des exercices tactiques avancés et la préparation mentale.",
  },
  {
    id: "u17g",
    name: "U17G",
    age: "Nés en 2010/2009",
    color: "bg-usbiot-red-dark",
    badgeBg: "bg-usbiot-red/10 text-usbiot-red border-usbiot-red/20",
    coaches: ["Loiacono Patrice"],
    trainings: [
      { jour: "Lundi", horaire: "19h15 - 21h30" },
      { jour: "Jeudi", horaire: "19h15 - 21h30" },
    ],
    competition: "Championnat départemental U17",
    level: "Perfectionnement",
    description:
      "Les joueurs se préparent pour le football adulte. Travail physique, tactique avancée et préparation mentale.",
  },
  {
    id: "u19g",
    name: "U19G",
    age: "Nés en 2008/2007",
    color: "bg-usbiot-gold",
    badgeBg: "bg-usbiot-gold/10 text-usbiot-gold-dark border-usbiot-gold/20",
    coaches: ["Valentin Willy"],
    trainings: [
      { jour: "Mardi", horaire: "19h45 - 22h00" },
      { jour: "Jeudi", horaire: "19h45 - 22h00" },
    ],
    competition: "Championnat départemental U19",
    level: "Perfectionnement",
    description:
      "La passerelle vers le football adulte. Préparation physique poussée et intégration progressive à l'équipe senior.",
  },
  {
    id: "seniors",
    name: "Seniors D3",
    age: "Nés en 2006 et avant",
    color: "bg-usbiot-red",
    badgeBg: "bg-usbiot-red/10 text-usbiot-red border-usbiot-red/20",
    coaches: ["Durand Malik"],
    trainings: [
      { jour: "Mercredi", horaire: "20h00 - 22h00" },
      { jour: "Vendredi", horaire: "20h00 - 22h00" },
    ],
    competition: "Championnat district D3",
    level: "Compétition",
    description:
      "L'équipe fanion de l'US Biot. Un groupe soudé qui représente fièrement le club chaque week-end en championnat.",
  },
  {
    id: "gardiens",
    name: "Gardiens",
    age: "Toutes catégories",
    color: "bg-usbiot-gold-dark",
    badgeBg: "bg-usbiot-gold/10 text-usbiot-gold-dark border-usbiot-gold/20",
    coaches: ["Di Fante Jacques"],
    trainings: [
      { jour: "Mardi", horaire: "18h00 - 19h30" },
      { jour: "Mercredi", horaire: "18h30 - 22h00" },
    ],
    competition: "Entraînement spécifique",
    level: "Spécialisation",
    description:
      "Entraînement dédié aux gardiens de but de toutes catégories. Travail spécifique de plongeons, relances et placement.",
  },
  {
    id: "foot7",
    name: "Foot à 7",
    age: "Adultes (loisir)",
    color: "bg-usbiot-gold",
    badgeBg: "bg-usbiot-gold/10 text-usbiot-gold-dark border-usbiot-gold/20",
    coaches: ["Morali Ariel"],
    trainings: [
      { jour: "Lundi", horaire: "20h00 - 22h00" },
      { jour: "Dimanche", horaire: "09h00 - 11h00" },
    ],
    competition: "Loisir / Tournois",
    level: "Loisir",
    description:
      "Le football plaisir pour les adultes. Matchs en équipes réduites dans une ambiance conviviale, sans pression du résultat.",
  },
];

export default function EquipesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[40dvh] flex items-center overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-usbiot-red via-usbiot-red-dark to-usbiot-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(205,183,40,0.15),_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-40 pb-24 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-usbiot-gold/20 text-usbiot-gold border-usbiot-gold/30 font-semibold uppercase tracking-wider text-xs">
              Saison 2025-2026
            </Badge>
            <h1 className="text-white font-heading leading-[1.05]">
              Nos{" "}
              <span className="text-usbiot-gold">équipes</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-xl">
              15 catégories, plus de 300 licenciés, 22 éducateurs. De U5 à Seniors en passant par le Foot à 7, trouvez votre place à l&apos;US Biot.
            </p>
          </motion.div>
        </div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-0 left-0 right-0 z-10 translate-y-1/2"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "15", label: "Catégories", icon: SoccerBall },
                { value: "300+", label: "Licenciés", icon: UsersThree },
                { value: "22", label: "Éducateurs", icon: GraduationCap },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-r from-usbiot-red to-usbiot-red-dark p-4 text-center border border-white/[0.06]"
                >
                  <stat.icon className="w-5 h-5 text-usbiot-gold mx-auto mb-2" weight="duotone" />
                  <div className="text-2xl font-heading font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Spacer for overlapping stats */}
      <div className="h-20 md:h-24" />

      {/* TABS SECTION */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Catégories"
            title="Explorez nos équipes"
            description="Sélectionnez une catégorie pour découvrir l'encadrement et les horaires d'entraînement."
          />

          <Tabs defaultValue="u5u6">
            <ScrollReveal>
              <div className="flex justify-center mb-12">
                <TabsList className="flex-wrap h-auto gap-1 p-1.5">
                  {categories.map((cat) => (
                    <TabsTrigger
                      key={cat.id}
                      value={cat.id}
                      className="px-3 py-2 text-xs font-semibold"
                    >
                      {cat.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </ScrollReveal>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Team badge placeholder with club logo */}
                    <Card className="overflow-hidden border-border/50">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 via-muted to-primary/5 flex items-center justify-center">
                        <div className="text-center">
                          <Image
                            src="/images/logo-usbiot.png"
                            alt={`Équipe ${cat.name}`}
                            width={80}
                            height={94}
                            className="mx-auto mb-4 opacity-60"
                          />
                          <p className="font-heading font-bold text-lg">
                            {cat.name}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Photo d&apos;équipe {cat.name} — Saison 2025-2026
                          </p>
                        </div>
                      </div>
                    </Card>

                    {/* Team info */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className={cat.badgeBg}>
                          {cat.name} — {cat.age}
                        </Badge>
                        <Badge variant="outline">{cat.level}</Badge>
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-3">
                        Équipe {cat.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {cat.description}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <GraduationCap className="w-5 h-5 text-usbiot-red mt-0.5 shrink-0" weight="duotone" />
                          <div>
                            <p className="font-semibold text-sm">
                              Encadrement
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {cat.coaches.length > 0
                                ? cat.coaches.join(", ")
                                : "Encadrement collectif"}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-usbiot-red mt-0.5 shrink-0" weight="duotone" />
                          <div>
                            <p className="font-semibold text-sm">
                              Entraînements
                            </p>
                            {cat.trainings.map((t) => (
                              <p
                                key={`${t.jour}-${t.horaire}`}
                                className="text-sm text-muted-foreground"
                              >
                                {t.jour} : {t.horaire}
                              </p>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Trophy className="w-5 h-5 text-usbiot-red mt-0.5 shrink-0" weight="duotone" />
                          <div>
                            <p className="font-semibold text-sm">Compétition</p>
                            <p className="text-sm text-muted-foreground">
                              {cat.competition}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-usbiot-red mt-0.5 shrink-0" weight="duotone" />
                          <div>
                            <p className="font-semibold text-sm">Lieu</p>
                            <p className="text-sm text-muted-foreground">
                              Complexe Pierre Operto, Biot
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* GRID OVERVIEW */}
      <section className="py-24 md:py-36 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Vue d'ensemble"
            title="Toutes nos catégories"
            description="Un aperçu rapide de chaque catégorie d'âge avec les informations essentielles."
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {categories.map((cat) => (
              <motion.div key={cat.id} variants={staggerItem}>
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 ${cat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Image
                        src="/images/logo-usbiot.png"
                        alt=""
                        width={24}
                        height={28}
                        className="brightness-0 invert"
                        aria-hidden
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold">{cat.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {cat.age}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Éducateur(s)</span>
                      <span className="font-medium text-right text-xs max-w-[55%] truncate">
                        {cat.coaches.length > 0 ? cat.coaches[0] : "—"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Niveau</span>
                      <Badge variant="outline" className="text-xs">
                        {cat.level}
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarBlank className="w-3.5 h-3.5" weight="regular" />
                      <span>{cat.trainings[0].jour} {cat.trainings[0].horaire}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA INSCRIPTIONS */}
      <section className="py-24 md:py-36">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-usbiot-gold/10 to-usbiot-gold/5 border-2 border-usbiot-gold/20">
              <Star className="w-8 h-8 text-usbiot-gold-dark mx-auto mb-4" weight="duotone" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Trouvez votre équipe
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
                Vous souhaitez rejoindre l&apos;US Biot ? Les inscriptions pour la
                saison 2025-2026 sont ouvertes. Un essai gratuit est possible
                pour toutes les catégories.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/inscriptions">
                  <Button
                    size="lg"
                    className="bg-usbiot-gold hover:bg-usbiot-gold-dark text-usbiot-ink font-bold text-base px-8 rounded-none"
                  >
                    S&apos;inscrire
                    <ArrowRight className="w-4 h-4 ml-2" weight="bold" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold text-base px-8 rounded-none"
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

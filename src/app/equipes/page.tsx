"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  UsersThree,
  CalendarBlank,
  Trophy,
  Clock,
  MapPin,
  ArrowRight,
  Star,
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
  coach: string;
  assistants: string[];
  trainings: string[];
  competition: string;
  level: string;
  players: number;
  description: string;
}

const categories: TeamCategory[] = [
  {
    id: "u7",
    name: "U7",
    age: "5-6 ans",
    color: "bg-emerald-500",
    badgeBg: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    coach: "Marie Fontaine",
    assistants: ["Lucas Perrin"],
    trainings: ["Mercredi 14h00 - 15h30", "Samedi 10h00 - 11h30"],
    competition: "Plateaux découverte",
    level: "Découverte",
    players: 18,
    description:
      "L'éveil au football par le jeu. Les petits Biotois découvrent le ballon rond dans un cadre ludique et bienveillant.",
  },
  {
    id: "u9",
    name: "U9",
    age: "7-8 ans",
    color: "bg-emerald-500",
    badgeBg: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    coach: "Thomas Garcia",
    assistants: ["Julien Blanc"],
    trainings: ["Mercredi 14h00 - 15h30", "Vendredi 17h30 - 19h00"],
    competition: "Plateaux U9 district",
    level: "Initiation",
    players: 24,
    description:
      "L'apprentissage des fondamentaux techniques : conduite de balle, passe, tir. Premiers matchs en équipe réduite.",
  },
  {
    id: "u11",
    name: "U11",
    age: "9-10 ans",
    color: "bg-blue-500",
    badgeBg: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    coach: "Nicolas Leroy",
    assistants: ["David Caron", "Pierre Morel"],
    trainings: ["Mardi 17h30 - 19h00", "Jeudi 17h30 - 19h00"],
    competition: "Championnat district U11",
    level: "Apprentissage",
    players: 28,
    description:
      "Le début de la compétition en championnat. Travail sur la technique individuelle, les premiers schémas tactiques et le jeu collectif.",
  },
  {
    id: "u13",
    name: "U13",
    age: "11-12 ans",
    color: "bg-amber-500",
    badgeBg: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    coach: "Sébastien Roux",
    assistants: ["Anthony Vidal"],
    trainings: ["Lundi 17h30 - 19h00", "Mercredi 14h00 - 16h00"],
    competition: "Championnat district U13",
    level: "Pré-formation",
    players: 22,
    description:
      "Approfondissement tactique et technique. Les joueurs découvrent le football à 11 et les notions de poste.",
  },
  {
    id: "u15",
    name: "U15",
    age: "13-14 ans",
    color: "bg-purple-500",
    badgeBg: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    coach: "Franck Bertrand",
    assistants: ["Yann Petit"],
    trainings: ["Mardi 18h00 - 19h30", "Jeudi 18h00 - 19h30"],
    competition: "Championnat départemental U15",
    level: "Formation",
    players: 20,
    description:
      "La formation s'intensifie avec un travail physique adapté, des exercices tactiques avancés et la préparation mentale.",
  },
  {
    id: "u18",
    name: "U18",
    age: "15-17 ans",
    color: "bg-usbiot-red",
    badgeBg: "bg-usbiot-red/10 text-usbiot-red border-usbiot-red/20",
    coach: "Laurent Marin",
    assistants: ["Kevin Dubois"],
    trainings: ["Lundi 18h30 - 20h00", "Mercredi 18h30 - 20h00"],
    competition: "Championnat départemental U18",
    level: "Perfectionnement",
    players: 18,
    description:
      "La passerelle vers le football adulte. Préparation physique, tactique et mentale pour intégrer l'équipe senior.",
  },
  {
    id: "seniors",
    name: "Seniors",
    age: "18+ ans",
    color: "bg-usbiot-ink dark:bg-white",
    badgeBg: "bg-usbiot-ink/10 text-usbiot-ink dark:bg-white/10 dark:text-white border-usbiot-ink/20 dark:border-white/20",
    coach: "Philippe Amar",
    assistants: ["Jérôme Costa", "Stéphane Levy"],
    trainings: ["Mardi 19h30 - 21h00", "Jeudi 19h30 - 21h00"],
    competition: "Championnat district Seniors",
    level: "Compétition",
    players: 24,
    description:
      "L'équipe fanion de l'US Biot. Un groupe soudé qui représente fièrement le club chaque week-end en championnat de district.",
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-40 pb-16 lg:pb-24">
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
              7 catégories, plus de 300 licenciés. De U7 à Seniors, trouvez
              l&apos;équipe qui correspond à votre âge et votre niveau.
            </p>
          </motion.div>
        </div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-0 left-0 right-0 z-10"
        >
          <div className="max-w-4xl mx-auto px-6 pb-8">
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "7", label: "Catégories", icon: Shield },
                { value: "300+", label: "Licenciés", icon: UsersThree },
                { value: "15+", label: "Équipes", icon: Trophy },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-md p-4 text-center border border-white/10"
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

      {/* TABS SECTION */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Catégories"
            title="Explorez nos équipes"
            description="Sélectionnez une catégorie pour découvrir l'équipe, l'encadrement et les horaires d'entraînement."
          />

          <Tabs defaultValue="u7">
            <ScrollReveal>
              <div className="flex justify-center mb-12">
                <TabsList className="flex-wrap h-auto gap-1 p-1.5">
                  {categories.map((cat) => (
                    <TabsTrigger
                      key={cat.id}
                      value={cat.id}
                      className="px-4 py-2 text-sm font-semibold"
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
                    {/* Team photo placeholder */}
                    <Card className="overflow-hidden border-border/50">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 via-muted to-primary/5 flex items-center justify-center">
                        <div className="text-center">
                          <div
                            className={`w-16 h-16 ${cat.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                          >
                            <Shield className="w-8 h-8 text-white" weight="duotone" />
                          </div>
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
                        Equipe {cat.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {cat.description}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <UsersThree className="w-5 h-5 text-primary mt-0.5 shrink-0" weight="regular" />
                          <div>
                            <p className="font-semibold text-sm">
                              Encadrement
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {cat.coach} (Responsable)
                              {cat.assistants.length > 0 && (
                                <>, {cat.assistants.join(", ")}</>
                              )}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" weight="regular" />
                          <div>
                            <p className="font-semibold text-sm">
                              Entrainements
                            </p>
                            {cat.trainings.map((t) => (
                              <p
                                key={t}
                                className="text-sm text-muted-foreground"
                              >
                                {t}
                              </p>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Trophy className="w-5 h-5 text-primary mt-0.5 shrink-0" weight="regular" />
                          <div>
                            <p className="font-semibold text-sm">Competition</p>
                            <p className="text-sm text-muted-foreground">
                              {cat.competition}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" weight="regular" />
                          <div>
                            <p className="font-semibold text-sm">Lieu</p>
                            <p className="text-sm text-muted-foreground">
                              Stade Rene Cuicala, Biot
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" weight="regular" />
                          <div>
                            <p className="font-semibold text-sm">Effectif</p>
                            <p className="text-sm text-muted-foreground">
                              {cat.players} joueurs
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
            title="Toutes nos categories"
            description="Un apercu rapide de chaque categorie d'age avec les informations essentielles."
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
                      className={`w-10 h-10 ${cat.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Shield className="w-5 h-5 text-white" weight="duotone" />
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
                      <span className="text-muted-foreground">Responsable</span>
                      <span className="font-medium text-right">
                        {cat.coach}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Joueurs</span>
                      <span className="font-medium">{cat.players}</span>
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
                      <span>{cat.trainings[0]}</span>
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
                Trouvez votre equipe
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
                Vous souhaitez rejoindre l&apos;US Biot ? Les inscriptions pour la
                saison 2025-2026 sont ouvertes. Un essai gratuit est possible
                pour toutes les categories.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/inscriptions">
                  <Button
                    size="lg"
                    className="bg-usbiot-gold hover:bg-usbiot-gold-dark text-usbiot-ink font-bold text-base px-8"
                  >
                    S&apos;inscrire
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

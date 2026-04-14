"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  UsersThree,
  ArrowRight,
  GraduationCap,
  Barbell,
  TShirt,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/motion";

/* ─── Training Schedule Data ─── */

interface Training {
  category: string;
  age: string;
  color: string;
  coaches: string[];
  sessions: { jour: string; horaire: string }[];
}

const trainings: Training[] = [
  {
    category: "U5/U6",
    age: "Nés en 2021/2020",
    color: "bg-usbiot-gold",
    coaches: ["Bacha Nolan", "Deharbe Adriano"],
    sessions: [
      { jour: "Mercredi", horaire: "13h45 - 15h15" },
    ],
  },
  {
    category: "U7",
    age: "Nés en 2019",
    color: "bg-usbiot-red",
    coaches: ["Drai Rémi", "Roch Mattéo"],
    sessions: [
      { jour: "Mercredi", horaire: "13h45 - 15h15" },
    ],
  },
  {
    category: "U8",
    age: "Nés en 2018",
    color: "bg-usbiot-gold/80",
    coaches: ["Zid Rayane", "Claude Itibarian"],
    sessions: [
      { jour: "Mercredi", horaire: "13h45 - 15h15" },
    ],
  },
  {
    category: "U9",
    age: "Nés en 2017",
    color: "bg-usbiot-red-dark",
    coaches: ["Escoffier Damien", "Righi Gilles"],
    sessions: [
      { jour: "Mercredi", horaire: "13h45 - 15h15" },
      { jour: "Vendredi", horaire: "18h15 - 19h45" },
    ],
  },
  {
    category: "U10",
    age: "Nés en 2016",
    color: "bg-usbiot-red",
    coaches: ["Bacha Yann", "Van de Voorde Christophe"],
    sessions: [
      { jour: "Lundi", horaire: "17h30 - 19h00" },
      { jour: "Mercredi", horaire: "15h30 - 17h00" },
    ],
  },
  {
    category: "U11G",
    age: "Nés en 2015",
    color: "bg-usbiot-gold",
    coaches: ["Roch Mattéo"],
    sessions: [
      { jour: "Mercredi", horaire: "15h30 - 17h00" },
      { jour: "Vendredi", horaire: "17h30 - 19h00" },
    ],
  },
  {
    category: "U12G",
    age: "Nés en 2014",
    color: "bg-usbiot-red/80",
    coaches: ["Verucchi Jérôme", "Millien Julien"],
    sessions: [
      { jour: "Mercredi", horaire: "18h30 - 20h00" },
      { jour: "Vendredi", horaire: "18h45 - 19h45" },
    ],
  },
  {
    category: "U13G",
    age: "Nés en 2013",
    color: "bg-usbiot-gold-dark",
    coaches: ["Franzetti Thomas", "Beaudequin Quentin"],
    sessions: [
      { jour: "Lundi", horaire: "18h30 - 20h00" },
      { jour: "Mercredi", horaire: "17h00 - 18h30" },
    ],
  },
  {
    category: "U13F",
    age: "Nées en 2013/2014",
    color: "bg-usbiot-red",
    coaches: ["Macario Amélie"],
    sessions: [
      { jour: "Lundi", horaire: "18h30 - 20h00" },
      { jour: "Mercredi", horaire: "15h30 - 17h00" },
    ],
  },
  {
    category: "U15G",
    age: "Nés en 2012/2011",
    color: "bg-usbiot-gold/80",
    coaches: ["Lakrout Djemelle", "Deville Éric"],
    sessions: [
      { jour: "Mardi", horaire: "18h00 - 19h30" },
      { jour: "Jeudi", horaire: "18h00 - 19h30" },
    ],
  },
  {
    category: "U17G",
    age: "Nés en 2010/2009",
    color: "bg-usbiot-red-dark",
    coaches: ["Loiacono Patrice"],
    sessions: [
      { jour: "Lundi", horaire: "19h15 - 21h30" },
      { jour: "Jeudi", horaire: "19h15 - 21h30" },
    ],
  },
  {
    category: "U19G",
    age: "Nés en 2008/2007",
    color: "bg-usbiot-red",
    coaches: ["Valentin Willy"],
    sessions: [
      { jour: "Mardi", horaire: "19h45 - 22h00" },
      { jour: "Jeudi", horaire: "19h45 - 22h00" },
    ],
  },
  {
    category: "Seniors D3",
    age: "Nés en 2006 et avant",
    color: "bg-usbiot-gold-dark",
    coaches: ["Durand Malik"],
    sessions: [
      { jour: "Mercredi", horaire: "20h00 - 22h00" },
      { jour: "Vendredi", horaire: "20h00 - 22h00" },
    ],
  },
  {
    category: "Gardiens",
    age: "Toutes catégories",
    color: "bg-usbiot-red/80",
    coaches: ["Di Fante Jacques"],
    sessions: [
      { jour: "Mardi", horaire: "18h00 - 19h30" },
      { jour: "Mercredi", horaire: "18h30 - 22h00" },
    ],
  },
  {
    category: "Foot à 7 (dimanche)",
    age: "Nés avant 2006",
    color: "bg-usbiot-gold",
    coaches: [],
    sessions: [
      { jour: "Dimanche", horaire: "09h00 - 11h00" },
    ],
  },
  {
    category: "Foot à 7 (lundi)",
    age: "Nés avant 2006",
    color: "bg-usbiot-gold",
    coaches: ["Morali Ariel"],
    sessions: [
      { jour: "Lundi", horaire: "20h00 - 22h00" },
    ],
  },
];

/* ─── Coaching Staff ─── */

const coaches = [
  { name: "Bacha Nolan", categories: "U5/U6" },
  { name: "Deharbe Adriano", categories: "U5/U6" },
  { name: "Drai Rémi", categories: "U7" },
  { name: "Roch Mattéo", categories: "U7, U11G" },
  { name: "Zid Rayane", categories: "U8" },
  { name: "Claude Itibarian", categories: "U8" },
  { name: "Escoffier Damien", categories: "U9" },
  { name: "Righi Gilles", categories: "U9" },
  { name: "Bacha Yann", categories: "U10" },
  { name: "Van de Voorde Christophe", categories: "U10" },
  { name: "Verucchi Jérôme", categories: "U12G" },
  { name: "Millien Julien", categories: "U12G" },
  { name: "Franzetti Thomas", categories: "U13G" },
  { name: "Beaudequin Quentin", categories: "U13G" },
  { name: "Macario Amélie", categories: "U13F" },
  { name: "Lakrout Djemelle", categories: "U15G" },
  { name: "Deville Éric", categories: "U15G" },
  { name: "Loiacono Patrice", categories: "U17G" },
  { name: "Valentin Willy", categories: "U19G" },
  { name: "Durand Malik", categories: "Seniors D3" },
  { name: "Di Fante Jacques", categories: "Gardiens" },
  { name: "Morali Ariel", categories: "Foot à 7" },
];

/* ─── Facilities ─── */

const facilities = [
  {
    icon: Barbell,
    title: "Complexe Pierre Operto",
    description:
      "Le complexe sportif Pierre Operto accueille tous les entraînements et matchs à domicile de l'US Biot Football.",
  },
  {
    icon: TShirt,
    title: "Terrains d'entraînement",
    description:
      "Terrains synthétiques et en herbe pour toutes les catégories, de l'école de foot aux Seniors, avec éclairage pour les séances en soirée.",
  },
  {
    icon: UsersThree,
    title: "Vestiaires & Club-house",
    description:
      "Vestiaires modernes, club-house avec buvette. Un espace convivial pour les familles et les joueurs après les matchs.",
  },
];

/* ─── Page ─── */

export default function EntrainementsPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
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
              Saison 2025-2026
            </Badge>
            <h1 className="text-white font-heading leading-[1.05]">
              Entra&icirc;ne<span className="text-usbiot-gold">ments</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Retrouvez les horaires d&apos;entraînement de toutes les catégories,
              de l&apos;école de foot aux Seniors. Tous les entraînements ont lieu
              au Complexe Pierre Operto à Biot.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ TRAINING SCHEDULE ═══ */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Planning"
            title="Horaires par categorie"
            description="Tous les entraînements ont lieu au Complexe Pierre Operto, Biot."
          />

          {/* Desktop table */}
          <ScrollReveal>
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Catégorie
                    </th>
                    <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Éducateur(s)
                    </th>
                    <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Jour
                    </th>
                    <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Horaire
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trainings.map((t) =>
                    t.sessions.map((s, si) => (
                      <tr
                        key={`${t.category}-${si}`}
                        className="border-b border-border/60 hover:bg-muted/40 transition-colors"
                      >
                        {si === 0 && (
                          <td
                            rowSpan={t.sessions.length}
                            className="py-3 px-4 align-top"
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className={`inline-block size-3 rounded-full ${t.color}`}
                              />
                              <span className="font-semibold">
                                {t.category}
                              </span>
                            </div>
                            <span className="text-xs text-muted-foreground ml-5">
                              {t.age}
                            </span>
                          </td>
                        )}
                        {si === 0 && (
                          <td
                            rowSpan={t.sessions.length}
                            className="py-3 px-4 align-top text-sm text-muted-foreground"
                          >
                            {t.coaches.length > 0
                              ? t.coaches.join(", ")
                              : "—"}
                          </td>
                        )}
                        <td className="py-3 px-4 text-sm">{s.jour}</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="font-mono text-xs">
                            {s.horaire}
                          </Badge>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Mobile cards */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="md:hidden space-y-4"
          >
            {trainings.map((t) => (
              <motion.div key={t.category} variants={staggerItem}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block size-3 rounded-full ${t.color}`}
                      />
                      <CardTitle className="text-base">
                        {t.category}
                      </CardTitle>
                      <div className="flex items-center gap-2 ml-auto">
                        <Image src="/images/logo-usbiot.png" alt="US Biot" width={20} height={20} className="object-contain" />
                        <span className="text-xs text-muted-foreground font-medium">{t.age}</span>
                      </div>
                    </div>
                    {t.coaches.length > 0 && (
                      <p className="text-xs text-muted-foreground mt-1">
                        <GraduationCap className="inline size-3 mr-1" weight="regular" />
                        {t.coaches.join(", ")}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="px-4 pb-4">
                    <div className="space-y-3">
                      {t.sessions.map((s, si) => (
                        <div
                          key={si}
                          className="flex items-start gap-3 text-sm"
                        >
                          <div className="shrink-0 w-24 font-medium">
                            {s.jour}
                          </div>
                          <div className="flex-1">
                            <div className="font-mono text-xs text-usbiot-red font-semibold">
                              {s.horaire}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ FACILITIES ═══ */}
      <section className="py-24 md:py-36 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Infrastructures"
            title="Nos installations"
            description="Le club dispose d'installations au Complexe Pierre Operto, au cœur de Biot."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {facilities.map((f) => (
              <motion.div key={f.title} variants={staggerItem}>
                <Card className="h-full hover:ring-2 hover:ring-usbiot-gold/30 transition-all">
                  <CardContent className="p-6">
                    <div className="size-12 rounded-xl bg-usbiot-red/10 flex items-center justify-center mb-4">
                      <f.icon className="size-6 text-usbiot-red" weight="duotone" />
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {f.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex items-center gap-2 justify-center text-sm text-muted-foreground">
              <MapPin className="size-4" weight="regular" />
              <span>
                Complexe Pierre Operto — Biot, 06410
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ COACHING STAFF ═══ */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Encadrement"
            title="Nos éducateurs"
            description="Une équipe d'éducateurs passionnés, au service de la formation de nos joueurs et joueuses."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {coaches.map((c) => (
              <motion.div key={c.name} variants={staggerItem}>
                <Card className="h-full">
                  <CardContent className="p-4">
                    <div className="size-10 rounded-full bg-gradient-to-br from-usbiot-red to-usbiot-red-dark flex items-center justify-center mb-3 text-white font-heading font-bold text-sm">
                      {c.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="font-heading font-bold text-sm">
                      {c.name}
                    </h3>
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <UsersThree className="size-3" weight="regular" />
                      {c.categories}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 md:py-36 bg-gradient-to-br from-usbiot-ink to-usbiot-red-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0ibiI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIuNzUiIHN0aXRjaFRpbGVzPSJzdGl0Y2giIHR5cGU9ImZyYWN0YWxOb2lzZSIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-lg mx-auto">
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">
                Rejoignez l&apos;aventure US Biot
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Inscriptions ouvertes pour la saison 2026-2027. De l&apos;ecole de
                foot aux Seniors, il y a une place pour chaque passion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/inscriptions">
                  <Button
                    size="lg"
                    className="bg-usbiot-gold hover:bg-usbiot-gold-dark text-usbiot-ink font-semibold gap-2"
                  >
                    S&apos;inscrire maintenant
                    <ArrowRight className="size-4" weight="bold" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="border border-white/30 text-white bg-transparent hover:bg-white/10 gap-2"
                  >
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

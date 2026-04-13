"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
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
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/motion";

/* ─── Training Schedule Data ─── */

interface Training {
  category: string;
  age: string;
  color: string;
  sessions: { jour: string; horaire: string; terrain: string }[];
}

const trainings: Training[] = [
  {
    category: "U7",
    age: "5-6 ans",
    color: "bg-emerald-500",
    sessions: [
      {
        jour: "Mercredi",
        horaire: "14h00 - 15h30",
        terrain: "Terrain synthetique A",
      },
    ],
  },
  {
    category: "U9",
    age: "7-8 ans",
    color: "bg-emerald-600",
    sessions: [
      {
        jour: "Mercredi",
        horaire: "14h00 - 15h30",
        terrain: "Terrain synthetique A",
      },
      {
        jour: "Samedi",
        horaire: "10h00 - 11h30",
        terrain: "Terrain synthetique B",
      },
    ],
  },
  {
    category: "U10-U11",
    age: "9-10 ans",
    color: "bg-blue-500",
    sessions: [
      {
        jour: "Mercredi",
        horaire: "14h00 - 15h30",
        terrain: "Terrain synthetique A",
      },
      {
        jour: "Vendredi",
        horaire: "17h30 - 19h00",
        terrain: "Terrain synthetique B",
      },
    ],
  },
  {
    category: "U12-U13",
    age: "11-12 ans",
    color: "bg-amber-500",
    sessions: [
      {
        jour: "Mardi",
        horaire: "17h30 - 19h00",
        terrain: "Terrain synthetique A",
      },
      {
        jour: "Jeudi",
        horaire: "17h30 - 19h00",
        terrain: "Terrain synthetique A",
      },
      {
        jour: "Samedi",
        horaire: "10h00 - 11h30",
        terrain: "Terrain synthetique A",
      },
    ],
  },
  {
    category: "U14-U15",
    age: "13-14 ans",
    color: "bg-purple-500",
    sessions: [
      {
        jour: "Mardi",
        horaire: "18h00 - 19h30",
        terrain: "Terrain synthetique B",
      },
      {
        jour: "Jeudi",
        horaire: "18h00 - 19h30",
        terrain: "Terrain synthetique B",
      },
      {
        jour: "Samedi",
        horaire: "14h00 - 15h30",
        terrain: "Terrain synthetique A",
      },
    ],
  },
  {
    category: "U16-U18",
    age: "15-17 ans",
    color: "bg-usbiot-red",
    sessions: [
      {
        jour: "Lundi",
        horaire: "18h30 - 20h00",
        terrain: "Terrain synthetique A",
      },
      {
        jour: "Mercredi",
        horaire: "18h30 - 20h00",
        terrain: "Terrain synthetique A",
      },
      {
        jour: "Vendredi",
        horaire: "18h30 - 20h00",
        terrain: "Terrain synthetique B",
      },
    ],
  },
  {
    category: "Seniors",
    age: "18+ ans",
    color: "bg-usbiot-ink dark:bg-white",
    sessions: [
      {
        jour: "Mardi",
        horaire: "19h30 - 21h00",
        terrain: "Terrain synthetique A",
      },
      {
        jour: "Jeudi",
        horaire: "19h30 - 21h00",
        terrain: "Terrain synthetique A",
      },
      {
        jour: "Vendredi",
        horaire: "19h30 - 21h00",
        terrain: "Terrain synthetique B",
      },
    ],
  },
];

/* ─── Coaching Staff ─── */

const coaches = [
  {
    name: "Laurent Dupont",
    role: "Directeur Technique",
    categories: "Toutes categories",
    diplome: "BEF — Brevet d'Entraineur de Football",
  },
  {
    name: "Sebastien Martin",
    role: "Entraineur Seniors",
    categories: "Seniors",
    diplome: "BMF — Brevet de Moniteur de Football",
  },
  {
    name: "Nicolas Rossi",
    role: "Responsable U16-U18",
    categories: "U16-U18",
    diplome: "BMF — Brevet de Moniteur de Football",
  },
  {
    name: "Karim Bensaid",
    role: "Responsable U12-U15",
    categories: "U12-U13, U14-U15",
    diplome: "CFF3 — Certificat Federal Football",
  },
  {
    name: "Amelie Girard",
    role: "Responsable Ecole de Foot",
    categories: "U7, U9, U10-U11",
    diplome: "CFF2 — Certificat Federal Football",
  },
  {
    name: "Thomas Leroy",
    role: "Entraineur Gardiens",
    categories: "Toutes categories",
    diplome: "CFF Gardien de But",
  },
];

/* ─── Facilities ─── */

const facilities = [
  {
    icon: Barbell,
    title: "Terrain Synthetique A",
    description:
      "Terrain principal derniere generation, eclairage LED, aux normes FFF. Surface 105x68m homologuee pour les matchs officiels.",
  },
  {
    icon: TShirt,
    title: "Terrain Synthetique B",
    description:
      "Terrain d'entrainement synthetique avec eclairage. Surface 90x45m ideale pour les seances techniques et les categories jeunes.",
  },
  {
    icon: UsersThree,
    title: "Vestiaires & Club-house",
    description:
      "6 vestiaires modernes, club-house avec buvette, salle de reunion, infirmerie. Espace convivial pour les familles apres les matchs.",
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
              Retrouvez les horaires d&apos;entrainement de toutes les categories,
              de l&apos;ecole de foot aux Seniors. Tout se passe au Stade de la
              Cheze a Biot.
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
            description="Les entrainements ont lieu au Stade Municipal de la Cheze, Chemin de la Cheze, 06410 Biot."
          />

          {/* Desktop table */}
          <ScrollReveal>
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Categorie
                    </th>
                    <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Jour
                    </th>
                    <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Horaire
                    </th>
                    <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Terrain
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
                              <span className="text-xs text-muted-foreground">
                                ({t.age})
                              </span>
                            </div>
                          </td>
                        )}
                        <td className="py-3 px-4 text-sm">{s.jour}</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="font-mono text-xs">
                            {s.horaire}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="size-3.5" weight="regular" />
                            {s.terrain}
                          </div>
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
                      <Badge variant="outline" className="text-xs ml-auto">
                        {t.age}
                      </Badge>
                    </div>
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
                            <div className="flex items-center gap-1 mt-0.5 text-xs text-muted-foreground">
                              <MapPin className="size-3" weight="regular" />
                              {s.terrain}
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
            description="Le club dispose d'installations modernes au coeur de Biot, sur la Cote d'Azur."
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
                Stade Municipal de la Cheze — Chemin de la Cheze, 06410 Biot
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
            title="Notre staff technique"
            description="Une equipe d'educateurs diplomes et passionnes, au service de la formation de nos joueurs."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coaches.map((c) => (
              <motion.div key={c.name} variants={staggerItem}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="size-12 rounded-full bg-gradient-to-br from-usbiot-red to-usbiot-red-dark flex items-center justify-center mb-4 text-white font-heading font-bold text-lg">
                      {c.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="font-heading font-bold text-base">
                      {c.name}
                    </h3>
                    <p className="text-sm text-usbiot-red font-medium mt-0.5">
                      {c.role}
                    </p>
                    <div className="mt-3 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <UsersThree className="size-3" weight="regular" />
                        {c.categories}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <GraduationCap className="size-3" weight="regular" />
                        {c.diplome}
                      </div>
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
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 gap-2"
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

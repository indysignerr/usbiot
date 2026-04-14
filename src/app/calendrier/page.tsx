"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarBlank,
  MapPin,
  Clock,
  Trophy,
  CaretLeft,
  CaretRight,
  ArrowRight,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/motion";

/* ─── Placeholder Data ─── */

const teams = [
  { value: "all", label: "Toutes les equipes" },
  { value: "u7", label: "U7" },
  { value: "u9", label: "U9" },
  { value: "u11", label: "U10-U11" },
  { value: "u13", label: "U12-U13" },
  { value: "u15", label: "U14-U15" },
  { value: "u18", label: "U16-U18" },
  { value: "seniors", label: "Seniors" },
];

const categoryColors: Record<string, string> = {
  U7: "bg-usbiot-red text-white",
  U9: "bg-usbiot-red-dark text-white",
  "U10-U11": "bg-usbiot-gold text-usbiot-ink",
  "U12-U13": "bg-usbiot-red/80 text-white",
  "U14-U15": "bg-usbiot-gold/80 text-usbiot-ink",
  "U16-U18": "bg-usbiot-red text-white",
  Seniors: "bg-usbiot-gold-dark text-white",
};

interface Match {
  id: number;
  date: string;
  time: string;
  home: string;
  away: string;
  location: string;
  category: string;
  isHome: boolean;
  score?: { home: number; away: number };
  played: boolean;
}

const matches: Match[] = [
  {
    id: 1,
    date: "2026-04-18",
    time: "15:00",
    home: "US Biot",
    away: "AS Mougins",
    location: "Stade de la Cheze, Biot",
    category: "Seniors",
    isHome: true,
    played: false,
  },
  {
    id: 2,
    date: "2026-04-19",
    time: "10:00",
    home: "US Biot",
    away: "OGC Nice B",
    location: "Stade de la Cheze, Biot",
    category: "U12-U13",
    isHome: true,
    played: false,
  },
  {
    id: 3,
    date: "2026-04-19",
    time: "14:00",
    home: "ES Valbonne",
    away: "US Biot",
    location: "Stade Leo Lagrange, Valbonne",
    category: "U14-U15",
    isHome: false,
    played: false,
  },
  {
    id: 4,
    date: "2026-04-25",
    time: "18:00",
    home: "US Biot",
    away: "FC Antibes",
    location: "Stade de la Cheze, Biot",
    category: "Seniors",
    isHome: true,
    played: false,
  },
  {
    id: 5,
    date: "2026-04-26",
    time: "09:30",
    home: "US Biot",
    away: "AS Cannes",
    location: "Stade de la Cheze, Biot",
    category: "U10-U11",
    isHome: true,
    played: false,
  },
  {
    id: 6,
    date: "2026-05-02",
    time: "15:00",
    home: "SC Grasse",
    away: "US Biot",
    location: "Stade Perdigon, Grasse",
    category: "Seniors",
    isHome: false,
    played: false,
  },
  {
    id: 7,
    date: "2026-05-03",
    time: "10:00",
    home: "US Biot",
    away: "Roquefort FC",
    location: "Stade de la Cheze, Biot",
    category: "U16-U18",
    isHome: true,
    played: false,
  },
  // Past results
  {
    id: 101,
    date: "2026-04-12",
    time: "15:00",
    home: "US Biot",
    away: "RC Grasse",
    location: "Stade de la Cheze, Biot",
    category: "Seniors",
    isHome: true,
    played: true,
    score: { home: 3, away: 1 },
  },
  {
    id: 102,
    date: "2026-04-11",
    time: "18:00",
    home: "FC Villeneuve-Loubet",
    away: "US Biot",
    location: "Stade des Plans, Villeneuve-Loubet",
    category: "U16-U18",
    isHome: false,
    played: true,
    score: { home: 1, away: 2 },
  },
  {
    id: 103,
    date: "2026-04-06",
    time: "10:00",
    home: "US Biot",
    away: "Sophia Antipolis FC",
    location: "Stade de la Cheze, Biot",
    category: "U12-U13",
    isHome: true,
    played: true,
    score: { home: 4, away: 0 },
  },
  {
    id: 104,
    date: "2026-04-05",
    time: "15:00",
    home: "AC Cagnes",
    away: "US Biot",
    location: "Stade du Cros de Cagnes",
    category: "Seniors",
    isHome: false,
    played: true,
    score: { home: 2, away: 2 },
  },
  {
    id: 105,
    date: "2026-03-29",
    time: "14:30",
    home: "US Biot",
    away: "Pegomas FC",
    location: "Stade de la Cheze, Biot",
    category: "U14-U15",
    isHome: true,
    played: true,
    score: { home: 5, away: 1 },
  },
  {
    id: 106,
    date: "2026-03-28",
    time: "15:00",
    home: "AS Menton",
    away: "US Biot",
    location: "Stade Rondelli, Menton",
    category: "Seniors",
    isHome: false,
    played: true,
    score: { home: 0, away: 1 },
  },
];

/* ─── Calendar helpers ─── */

const MONTH_NAMES = [
  "Janvier",
  "Fevrier",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];

const DAY_NAMES = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday = 0
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function isWin(match: Match): boolean {
  if (!match.score) return false;
  if (match.isHome) return match.score.home > match.score.away;
  return match.score.away > match.score.home;
}

function isDraw(match: Match): boolean {
  if (!match.score) return false;
  return match.score.home === match.score.away;
}

/* ─── Page ─── */

export default function CalendrierPage() {
  const [selectedTeam, setSelectedTeam] = useState("all");
  const [currentMonth, setCurrentMonth] = useState(3); // April (0-indexed)
  const [currentYear, setCurrentYear] = useState(2026);

  const filteredMatches = matches.filter((m) => {
    if (selectedTeam === "all") return true;
    const teamMap: Record<string, string> = {
      u7: "U7",
      u9: "U9",
      u11: "U10-U11",
      u13: "U12-U13",
      u15: "U14-U15",
      u18: "U16-U18",
      seniors: "Seniors",
    };
    return m.category === teamMap[selectedTeam];
  });

  const upcomingMatches = filteredMatches
    .filter((m) => !m.played)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const recentResults = filteredMatches
    .filter((m) => m.played)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Calendar data
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfWeek(currentYear, currentMonth);
  const calendarDays = Array.from({ length: 42 }, (_, i) => {
    const day = i - firstDay + 1;
    if (day < 1 || day > daysInMonth) return null;
    return day;
  });

  const matchesByDay = filteredMatches.reduce(
    (acc, m) => {
      const d = new Date(m.date);
      if (d.getMonth() === currentMonth && d.getFullYear() === currentYear) {
        const day = d.getDate();
        if (!acc[day]) acc[day] = [];
        acc[day].push(m);
      }
      return acc;
    },
    {} as Record<number, Match[]>
  );

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

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
              Calendrier <span className="text-usbiot-gold">&amp; Resultats</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Suivez tous les matchs de l&apos;US Biot. Calendrier des rencontres,
              resultats et classements de toutes nos equipes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ FILTER ═══ */}
      <section className="py-8 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                Filtrer par equipe :
              </span>
              <Select value={selectedTeam} onValueChange={(v) => v && setSelectedTeam(v)}>
                <SelectTrigger className="w-56">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {teams.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ TABS: Calendar / Upcoming / Results ═══ */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs defaultValue="upcoming">
            <ScrollReveal>
              <TabsList className="mb-8">
                <TabsTrigger value="calendar">
                  <CalendarBlank className="size-4" weight="regular" />
                  Calendrier
                </TabsTrigger>
                <TabsTrigger value="upcoming">
                  <Clock className="size-4" weight="regular" />
                  A venir
                </TabsTrigger>
                <TabsTrigger value="results">
                  <Trophy className="size-4" weight="regular" />
                  Resultats
                </TabsTrigger>
              </TabsList>
            </ScrollReveal>

            {/* ── Calendar View ── */}
            <TabsContent value="calendar">
              <ScrollReveal>
                <Card className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-6">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevMonth}
                      aria-label="Mois precedent"
                    >
                      <CaretLeft className="size-5" weight="bold" />
                    </Button>
                    <h3 className="font-heading text-xl font-bold">
                      {MONTH_NAMES[currentMonth]} {currentYear}
                    </h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextMonth}
                      aria-label="Mois suivant"
                    >
                      <CaretRight className="size-5" weight="bold" />
                    </Button>
                  </div>

                  {/* Day headers */}
                  <div className="grid grid-cols-7 gap-px mb-2">
                    {DAY_NAMES.map((d) => (
                      <div
                        key={d}
                        className="text-center text-xs font-semibold text-muted-foreground py-2"
                      >
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Calendar grid */}
                  <div className="grid grid-cols-7 gap-px">
                    {calendarDays.map((day, i) => {
                      const dayMatches = day ? matchesByDay[day] || [] : [];
                      const isToday =
                        day === 13 &&
                        currentMonth === 3 &&
                        currentYear === 2026;
                      return (
                        <div
                          key={i}
                          className={`min-h-[60px] md:min-h-[80px] p-1 md:p-2 rounded-md border border-transparent ${
                            day
                              ? "bg-muted/30 hover:bg-muted/60 transition-colors"
                              : ""
                          } ${isToday ? "ring-2 ring-usbiot-red bg-usbiot-red/5" : ""}`}
                        >
                          {day && (
                            <>
                              <span
                                className={`text-xs font-medium ${isToday ? "text-usbiot-red font-bold" : "text-muted-foreground"}`}
                              >
                                {day}
                              </span>
                              <div className="mt-1 space-y-0.5">
                                {dayMatches.map((m) => (
                                  <div
                                    key={m.id}
                                    className={`text-[10px] md:text-xs px-1 py-0.5 rounded truncate ${
                                      m.played
                                        ? "bg-muted text-muted-foreground"
                                        : "bg-usbiot-red/10 text-usbiot-red font-medium"
                                    }`}
                                    title={`${m.home} vs ${m.away} — ${m.time}`}
                                  >
                                    <span className="hidden md:inline">
                                      {m.time} {m.isHome ? "vs" : "@"}{" "}
                                      {m.isHome ? m.away : m.home}
                                    </span>
                                    <span className="md:hidden">
                                      {m.isHome ? m.away.split(" ").pop() : m.home.split(" ").pop()}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </ScrollReveal>
            </TabsContent>

            {/* ── Upcoming Matches ── */}
            <TabsContent value="upcoming">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-4"
              >
                {upcomingMatches.length === 0 && (
                  <p className="text-center text-muted-foreground py-12">
                    Aucun match a venir pour cette selection.
                  </p>
                )}
                {upcomingMatches.map((match) => (
                  <motion.div key={match.id} variants={staggerItem}>
                    <Card className="group hover:ring-usbiot-red/30 hover:ring-2 transition-all">
                      <CardContent className="px-4 py-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          {/* Date block */}
                          <div className="flex items-center gap-3 md:w-48 shrink-0">
                            <div className="flex flex-col items-center justify-center rounded-lg bg-usbiot-red/10 px-3 py-2 min-w-[56px]">
                              <span className="text-xs font-semibold text-usbiot-red uppercase">
                                {new Date(match.date).toLocaleDateString("fr-FR", { weekday: "short" })}
                              </span>
                              <span className="text-lg font-bold text-usbiot-red">
                                {new Date(match.date).getDate()}
                              </span>
                              <span className="text-[10px] text-usbiot-red/70">
                                {new Date(match.date).toLocaleDateString("fr-FR", { month: "short" })}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                              <Clock className="size-3.5" weight="regular" />
                              {match.time}
                            </div>
                          </div>

                          {/* Teams */}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 text-base font-semibold">
                              <span className={match.isHome ? "text-usbiot-red" : ""}>
                                {match.home}
                              </span>
                              <span className="text-xs text-muted-foreground font-normal">
                                vs
                              </span>
                              <span className={!match.isHome ? "text-usbiot-red" : ""}>
                                {match.away}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
                              <MapPin className="size-3.5" weight="regular" />
                              {match.location}
                            </div>
                          </div>

                          {/* Category badge */}
                          <div className="shrink-0">
                            <Badge
                              className={
                                categoryColors[match.category] ||
                                "bg-muted text-muted-foreground"
                              }
                            >
                              {match.category}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* ── Results ── */}
            <TabsContent value="results">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-4"
              >
                {recentResults.length === 0 && (
                  <p className="text-center text-muted-foreground py-12">
                    Aucun resultat pour cette selection.
                  </p>
                )}
                {recentResults.map((match) => {
                  const win = isWin(match);
                  const draw = isDraw(match);
                  return (
                    <motion.div key={match.id} variants={staggerItem}>
                      <Card
                        className={`transition-all ${
                          win
                            ? "ring-1 ring-usbiot-gold/40"
                            : draw
                              ? "ring-1 ring-usbiot-gold/20"
                              : "ring-1 ring-usbiot-red/20"
                        }`}
                      >
                        <CardContent className="px-4 py-4">
                          <div className="flex flex-col md:flex-row md:items-center gap-4">
                            {/* Date */}
                            <div className="text-sm text-muted-foreground md:w-40 shrink-0">
                              <span className="capitalize">
                                {formatDate(match.date)}
                              </span>
                            </div>

                            {/* Score */}
                            <div className="flex-1 flex items-center gap-3">
                              <span
                                className={`font-semibold ${match.isHome ? "text-usbiot-red" : ""}`}
                              >
                                {match.home}
                              </span>
                              <div className="flex items-center gap-1 px-3 py-1 rounded-md bg-muted font-heading font-bold text-lg">
                                <span>{match.score?.home}</span>
                                <span className="text-muted-foreground">-</span>
                                <span>{match.score?.away}</span>
                              </div>
                              <span
                                className={`font-semibold ${!match.isHome ? "text-usbiot-red" : ""}`}
                              >
                                {match.away}
                              </span>
                            </div>

                            {/* Result + Category */}
                            <div className="flex items-center gap-2 shrink-0">
                              <Badge
                                className={
                                  win
                                    ? "bg-usbiot-gold text-usbiot-ink"
                                    : draw
                                      ? "bg-usbiot-gold/60 text-usbiot-ink"
                                      : "bg-usbiot-red text-white"
                                }
                              >
                                {win ? "Victoire" : draw ? "Nul" : "Defaite"}
                              </Badge>
                              <Badge
                                variant="outline"
                                className="text-xs"
                              >
                                {match.category}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 md:py-36 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-lg mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Besoin d&apos;informations ?
              </h2>
              <p className="text-muted-foreground mb-8">
                Pour toute question sur le calendrier, les deplacements ou les
                convocations, contactez le club.
              </p>
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Nous contacter
                  <ArrowRight className="size-4" weight="bold" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Trophy,
  Barbell,
  Sun,
  Confetti,
  X,
  CalendarBlank,
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/motion";

type GalleryCategory = "Tous" | "Matchs" | "Entrainements" | "Stages" | "Evenements";

const categories: { label: GalleryCategory; icon: typeof Camera }[] = [
  { label: "Tous", icon: Camera },
  { label: "Matchs", icon: Trophy },
  { label: "Entrainements", icon: Barbell },
  { label: "Stages", icon: Sun },
  { label: "Evenements", icon: Confetti },
];

const categoryColors: Record<GalleryCategory, string> = {
  Tous: "bg-muted text-foreground",
  Matchs: "bg-usbiot-red/10 text-usbiot-red border-usbiot-red/20",
  Entrainements: "bg-usbiot-gold/10 text-usbiot-gold-dark border-usbiot-gold/20",
  Stages: "bg-usbiot-red/10 text-usbiot-red border-usbiot-red/20",
  Evenements: "bg-usbiot-gold-dark/10 text-usbiot-gold-dark border-usbiot-gold-dark/20",
};

const categoryBg: Record<Exclude<GalleryCategory, "Tous">, string> = {
  Matchs: "from-usbiot-red/20 via-usbiot-red-dark/10 to-usbiot-ink/20",
  Entrainements: "from-usbiot-gold/20 via-usbiot-gold-dark/10 to-usbiot-gold-dark/20",
  Stages: "from-usbiot-red/20 via-usbiot-red-dark/10 to-usbiot-red-dark/20",
  Evenements: "from-usbiot-gold-dark/20 via-usbiot-gold/10 to-usbiot-gold-dark/20",
};

const categoryIcons: Record<Exclude<GalleryCategory, "Tous">, typeof Camera> = {
  Matchs: Trophy,
  Entrainements: Barbell,
  Stages: Sun,
  Evenements: Confetti,
};

interface GalleryItem {
  id: number;
  category: Exclude<GalleryCategory, "Tous">;
  caption: string;
  date: string;
  tall?: boolean;
}

const galleryItems: GalleryItem[] = [
  { id: 1, category: "Matchs", caption: "Victoire 3-1 contre l'AS Antibes — U13", date: "23 Mars 2026", tall: true },
  { id: 2, category: "Entrainements", caption: "Seance technique U10 — travail de passe", date: "18 Mars 2026" },
  { id: 3, category: "Stages", caption: "Stage de la Toussaint — journee penalty", date: "28 Oct 2025" },
  { id: 4, category: "Evenements", caption: "Tournoi de Noel — remise des trophees", date: "20 Dec 2025", tall: true },
  { id: 5, category: "Matchs", caption: "Derby contre Valbonne — Seniors", date: "15 Mars 2026" },
  { id: 6, category: "Entrainements", caption: "Preparation physique Seniors — endurance", date: "12 Mars 2026", tall: true },
  { id: 7, category: "Stages", caption: "Stage d'ete — atelier gardien de but", date: "8 Juil 2025" },
  { id: 8, category: "Evenements", caption: "Assemblee generale annuelle du club", date: "15 Sep 2025" },
  { id: 9, category: "Matchs", caption: "Finale de coupe — U15 en action", date: "1 Mars 2026", tall: true },
  { id: 10, category: "Entrainements", caption: "Ecole de foot U7 — premiers dribbles", date: "5 Mars 2026" },
  { id: 11, category: "Stages", caption: "Stage de Printemps — match inter-groupes", date: "10 Avr 2026" },
  { id: 12, category: "Evenements", caption: "Fete de fin de saison — barbecue et matchs", date: "21 Juin 2025", tall: true },
  { id: 13, category: "Matchs", caption: "U18 en deplacement a Nice", date: "8 Fev 2026" },
  { id: 14, category: "Entrainements", caption: "Seance tactique U14 — mise en place defensive", date: "20 Fev 2026" },
  { id: 15, category: "Evenements", caption: "Journee portes ouvertes — decouverte du club", date: "7 Sep 2025" },
];

export default function GaleriePage() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("Tous");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeFilter === "Tous"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-usbiot-red via-usbiot-red-dark to-usbiot-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(205,183,40,0.15),_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <Badge className="mb-6 bg-usbiot-gold/20 text-usbiot-gold border-usbiot-gold/30 font-semibold uppercase tracking-wider text-xs">
              Vie du club
            </Badge>
            <h1 className="text-white font-heading leading-[1.05]">
              Notre <span className="text-usbiot-gold">Galerie</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Matchs, entrainements, stages et evenements — revivez les meilleurs
              moments de l&apos;US Biot en images.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Photos"
            title="Les moments forts"
            description="Filtrez par categorie pour retrouver vos souvenirs preferes."
          />

          {/* FILTERS */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((cat) => (
                <Button
                  key={cat.label}
                  variant={activeFilter === cat.label ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(cat.label)}
                  className={`font-semibold ${
                    activeFilter === cat.label
                      ? "bg-usbiot-red hover:bg-usbiot-red-dark text-white"
                      : ""
                  }`}
                >
                  <cat.icon className="w-4 h-4 mr-1.5" weight="bold" />
                  {cat.label}
                </Button>
              ))}
            </div>
          </ScrollReveal>

          {/* MASONRY GRID */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-40px" }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => {
                const IconComp = categoryIcons[item.category];
                return (
                  <motion.div
                    key={item.id}
                    variants={staggerItem}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="break-inside-avoid"
                  >
                    <div
                      className="group relative rounded-xl overflow-hidden cursor-pointer border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      onClick={() => setSelectedItem(item)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedItem(item);
                        }
                      }}
                      aria-label={`Voir: ${item.caption}`}
                    >
                      {/* Placeholder image area */}
                      <div
                        className={`relative bg-gradient-to-br ${categoryBg[item.category]} flex items-center justify-center ${
                          item.tall ? "h-72 md:h-80" : "h-48 md:h-56"
                        }`}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05),_transparent_70%)]" />
                        <IconComp className="w-12 h-12 text-foreground/15 group-hover:text-foreground/25 transition-colors" weight="duotone" />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-usbiot-ink/0 group-hover:bg-usbiot-ink/40 transition-colors duration-300 flex items-center justify-center">
                          <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" weight="duotone" />
                        </div>
                      </div>

                      {/* Info bar */}
                      <div className="p-4 bg-card">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant="outline"
                            className={`text-xs font-medium ${categoryColors[item.category]}`}
                          >
                            {item.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <CalendarBlank className="w-3 h-3" weight="regular" />
                            {item.date}
                          </span>
                        </div>
                        <p className="text-sm font-medium leading-snug line-clamp-2">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" weight="duotone" />
              <p className="text-muted-foreground">
                Aucune photo dans cette categorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-usbiot-ink/80 backdrop-blur-sm p-6"
            onClick={() => setSelectedItem(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.caption}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-usbiot-ink/60 hover:bg-usbiot-ink/80 text-white flex items-center justify-center transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" weight="bold" />
              </button>

              {/* Large placeholder */}
              {(() => {
                const IconComp = categoryIcons[selectedItem.category];
                return (
                  <div
                    className={`relative bg-gradient-to-br ${categoryBg[selectedItem.category]} flex items-center justify-center h-72 md:h-[28rem]`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08),_transparent_70%)]" />
                    <IconComp className="w-20 h-20 text-foreground/15" weight="duotone" />
                  </div>
                );
              })()}

              {/* Caption */}
              <div className="p-6 bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="outline"
                    className={`text-xs font-medium ${categoryColors[selectedItem.category]}`}
                  >
                    {selectedItem.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <CalendarBlank className="w-3 h-3" weight="regular" />
                    {selectedItem.date}
                  </span>
                </div>
                <p className="font-heading font-semibold text-lg">
                  {selectedItem.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

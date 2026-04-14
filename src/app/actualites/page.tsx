"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarBlank, ArrowRight, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/motion";

type ArticleCategory = "Match" | "Club" | "Formation" | "Stage" | "Evenement";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  date: string;
  gradient: string;
  featured?: boolean;
}

const categoryColors: Record<ArticleCategory, string> = {
  Match: "bg-usbiot-red text-white",
  Club: "bg-usbiot-gold text-usbiot-ink",
  Formation: "bg-usbiot-gold text-usbiot-ink",
  Stage: "bg-usbiot-red-dark text-white",
  Evenement: "bg-usbiot-gold-dark text-white",
};

const featuredArticle: Article = {
  id: 0,
  title: "L'US Biot remporte le tournoi departemental U13",
  excerpt:
    "Une belle victoire pour nos jeunes joueurs qui ont domine la competition tout au long du week-end. Retour sur un parcours exemplaire de determination et d'esprit d'equipe qui fait la fierte de tout le club.",
  category: "Match",
  date: "10 Avril 2026",
  gradient: "from-usbiot-red via-usbiot-red-dark to-usbiot-ink",
  featured: true,
};

const articles: Article[] = [
  {
    id: 1,
    title: "Inscriptions ouvertes pour les stages de Paques",
    excerpt:
      "Les stages de vacances reviennent du 20 au 24 avril. Places limitees, reservez des maintenant pour vos enfants.",
    category: "Stage",
    date: "8 Avril 2026",
    gradient: "from-usbiot-red-dark to-usbiot-ink",
  },
  {
    id: 2,
    title: "Nouveau partenariat avec Sport 2000 Antibes",
    excerpt:
      "Le club est fier d'annoncer un nouveau partenariat qui permettra d'equiper toutes les equipes pour la saison prochaine.",
    category: "Club",
    date: "5 Avril 2026",
    gradient: "from-usbiot-gold to-usbiot-gold-dark",
  },
  {
    id: 3,
    title: "Resultats du week-end : 4 victoires sur 6 matchs",
    excerpt:
      "Beau week-end pour les equipes du club avec notamment une victoire ecrasante des U15 face a Villeneuve-Loubet.",
    category: "Match",
    date: "1 Avril 2026",
    gradient: "from-usbiot-red to-usbiot-red-dark",
  },
  {
    id: 4,
    title: "Formation : les educateurs obtiennent le BMF",
    excerpt:
      "Trois de nos educateurs viennent d'obtenir le Brevet de Moniteur de Football, gage de qualite pour l'encadrement.",
    category: "Formation",
    date: "28 Mars 2026",
    gradient: "from-usbiot-gold-dark to-usbiot-ink",
  },
  {
    id: 5,
    title: "Soiree de fin de saison le 20 juin",
    excerpt:
      "Reservez votre soiree ! Remise des trophees, spectacle des jeunes et barbecue geant au programme.",
    category: "Evenement",
    date: "25 Mars 2026",
    gradient: "from-usbiot-red via-usbiot-red-dark to-usbiot-ink",
  },
  {
    id: 6,
    title: "Stage de perfectionnement gardiens en mai",
    excerpt:
      "Un stage dedie aux gardiens de but, encadre par un ancien professionnel. Ouvert aux U12 et plus.",
    category: "Stage",
    date: "22 Mars 2026",
    gradient: "from-usbiot-red-dark to-usbiot-red",
  },
  {
    id: 7,
    title: "L'equipe Seniors valide son maintien en D2",
    excerpt:
      "Apres une saison reguliere, les Seniors assurent leur place en deuxieme division departementale.",
    category: "Match",
    date: "18 Mars 2026",
    gradient: "from-usbiot-red to-usbiot-ink",
  },
  {
    id: 8,
    title: "Journee portes ouvertes le 15 mai",
    excerpt:
      "Venez decouvrir le club, rencontrer les educateurs et assister a des ateliers gratuits pour les enfants de 4 a 12 ans.",
    category: "Club",
    date: "15 Mars 2026",
    gradient: "from-usbiot-gold to-usbiot-red-dark",
  },
];

export default function ActualitesPage() {
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
              Saison 2025-2026
            </Badge>
            <h1 className="text-white font-heading leading-[1.05]">
              Actualites <span className="text-usbiot-gold">du Club</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Suivez toute l&apos;actualite de l&apos;US Biot : resultats, evenements,
              stages et vie du club au quotidien.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="A la Une"
            title="Article en vedette"
          />
          <ScrollReveal>
            <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2">
                <div
                  className={`bg-gradient-to-br ${featuredArticle.gradient} min-h-[240px] md:min-h-[320px] flex items-center justify-center`}
                >
                  <div className="text-white/20 font-heading text-8xl font-bold">
                    USB
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      className={`${categoryColors[featuredArticle.category]} border-transparent text-xs font-semibold`}
                    >
                      {featuredArticle.category}
                    </Badge>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarBlank className="w-3.5 h-3.5" weight="regular" />
                      {featuredArticle.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div>
                    <Button className="bg-usbiot-red hover:bg-usbiot-red-dark text-white font-semibold">
                      Lire la suite
                      <ArrowRight className="w-4 h-4 ml-2" weight="bold" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-24 md:py-36 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Dernieres Nouvelles"
            title="Toutes les actualites"
            description="Retrouvez l'ensemble des articles, resultats et annonces du club."
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {articles.map((article) => (
              <motion.div key={article.id} variants={staggerItem}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-border/50">
                  <div
                    className={`bg-gradient-to-br ${article.gradient} h-44 flex items-center justify-center relative`}
                  >
                    <div className="text-white/10 font-heading text-6xl font-bold">
                      USB
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge
                        className={`${categoryColors[article.category]} border-transparent text-xs font-semibold`}
                      >
                        {article.category}
                      </Badge>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarBlank className="w-3 h-3" weight="regular" />
                        {article.date}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-2 leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1 transition-all">
                      Lire la suite
                      <ArrowRight className="w-3.5 h-3.5" weight="bold" />
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* PAGINATION */}
          <ScrollReveal>
            <div className="mt-12 flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="font-semibold"
                disabled
              >
                <CaretLeft className="w-4 h-4" weight="bold" />
              </Button>
              <Button
                size="sm"
                className="bg-usbiot-red hover:bg-usbiot-red-dark text-white font-semibold min-w-9"
              >
                1
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="font-semibold min-w-9"
              >
                2
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="font-semibold min-w-9"
              >
                3
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="font-semibold"
              >
                <CaretRight className="w-4 h-4" weight="bold" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading mb-4">
              Restez <span className="text-usbiot-red">informe</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Suivez-nous sur les reseaux sociaux pour ne rien manquer de
              l&apos;actualite du club et de ses equipes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-usbiot-red hover:bg-usbiot-red-dark text-white font-bold text-base px-8"
                >
                  Nous contacter
                  <ArrowRight className="w-4 h-4 ml-2" weight="bold" />
                </Button>
              </Link>
              <Link href="/inscriptions">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold text-base px-8"
                >
                  S&apos;inscrire au club
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  UsersThree,
  Trophy,
  CalendarBlank,
  Star,
  ArrowRight,
  Shield,
  Heart,
  Target,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/motion";

const stats = [
  { value: "300+", label: "Licenciés", icon: UsersThree },
  { value: "15+", label: "Équipes", icon: Shield },
  { value: "75+", label: "Années", icon: Trophy },
  { value: "5/5", label: "Avis Google", icon: Star },
];

const categories = [
  { name: "U7 - U9", age: "5-8 ans", color: "bg-usbiot-red" },
  { name: "U10 - U11", age: "9-10 ans", color: "bg-usbiot-gold" },
  { name: "U12 - U13", age: "11-12 ans", color: "bg-usbiot-red-dark" },
  { name: "U14 - U15", age: "13-14 ans", color: "bg-usbiot-gold/80" },
  { name: "U16 - U18", age: "15-17 ans", color: "bg-usbiot-red/80" },
  { name: "Seniors", age: "18+ ans", color: "bg-usbiot-gold-dark" },
];

const values = [
  {
    icon: Heart,
    title: "Esprit Familial",
    description:
      "Un club où chaque membre compte. Ambiance chaleureuse pour les joueurs et leurs familles.",
  },
  {
    icon: Target,
    title: "Formation",
    description:
      "Un encadrement diplômé pour accompagner chaque joueur dans sa progression technique et tactique.",
  },
  {
    icon: Trophy,
    title: "Compétition",
    description:
      "Des équipes engagées en championnat de district et départemental pour vivre la passion du football.",
  },
  {
    icon: Shield,
    title: "Infrastructures",
    description:
      "Terrain synthétique dernière génération, vestiaires modernes, installations haut niveau.",
  },
];

const testimonials = [
  {
    name: "Chris RAD",
    text: "Club ambiance familiale, personnel attentif, bon esprit, installations récentes",
    rating: 5,
  },
  {
    name: "Charles Cecchini",
    text: "Un club familial et sain aux structures haut niveau",
    rating: 5,
  },
  {
    name: "Fabien Tourre",
    text: "Superbe stade, super infrastructure. Dernier terrain synthétique",
    rating: 5,
  },
  {
    name: "BorgesPinto",
    text: "Excelente escola de futebol, ambiente familiar entre dirigentes, atletas e familiares",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO -- cinematic, editorial, left-aligned */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-usbiot-ink" />
        <div className="absolute inset-0 bg-gradient-to-b from-usbiot-red/90 via-usbiot-red-dark/70 to-usbiot-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,_rgba(216,38,28,0.4),_transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,_rgba(205,183,40,0.12),_transparent)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-usbiot-gold/[0.06] via-transparent to-transparent skew-x-[-6deg] origin-top-right" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />

        {/* Ghost watermark logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/2 right-[5%] -translate-y-1/2 hidden lg:block pointer-events-none"
        >
          <Image
            src="/images/logo-usbiot.png"
            alt=""
            width={440}
            height={520}
            className="opacity-[0.07] brightness-0 invert"
            priority
            aria-hidden
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-40 pb-48 md:pb-56 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-12 h-[2px] bg-usbiot-gold" />
              <Badge className="bg-transparent text-usbiot-gold border-usbiot-gold/40 font-bold uppercase tracking-[0.2em] text-[11px] px-4 py-1.5 rounded-none">
                Saison 2025-2026
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-white font-heading leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            >
              Le football
              <br />
              <span className="text-usbiot-gold italic font-extrabold">en famille</span>
              <br />
              <span className="text-white/30">à Biot</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-white/50 text-lg md:text-xl leading-relaxed max-w-lg"
            >
              Depuis plus de 75 ans, l&apos;US Biot forme, éduque et fait vibrer
              petits et grands par la passion du football sur la Côte d&apos;Azur.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap gap-4 items-center"
            >
              <Link href="/inscriptions">
                <Button
                  size="lg"
                  className="bg-usbiot-gold hover:bg-usbiot-gold-dark text-usbiot-ink font-bold text-base px-10 h-14 rounded-none transition-all duration-300 hover:translate-x-1"
                >
                  S&apos;inscrire
                  <ArrowRight className="w-4 h-4 ml-2" weight="bold" />
                </Button>
              </Link>
              <Link href="/le-club" className="group">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white/60 hover:text-white hover:bg-white/5 font-semibold text-base px-8 h-14 rounded-none"
                >
                  Découvrir le club
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" weight="bold" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar -- overlapping into next section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 right-0 z-10 translate-y-1/2"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 bg-gradient-to-r from-usbiot-red to-usbiot-red-dark border border-white/[0.06]">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 md:p-8 text-center relative ${
                    i < stats.length - 1 ? "md:border-r border-white/[0.06]" : ""
                  } ${i < 2 ? "border-b md:border-b-0 border-white/[0.06]" : ""} group hover:bg-white/[0.03] transition-colors duration-500`}
                >
                  <stat.icon className="w-5 h-5 text-usbiot-gold mx-auto mb-3 opacity-50 group-hover:opacity-100 transition-opacity" weight="duotone" />
                  <div className="text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-white/35 uppercase tracking-[0.2em] font-semibold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Spacer for overlapping stats */}
      <div className="h-28 md:h-32" />

      {/* VALUES -- grid with gap-px for editorial divider look */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Nos Valeurs"
            title="Plus qu'un club, une famille"
            description="L'US Biot, c'est avant tout un état d'esprit. Découvrez ce qui nous rend uniques."
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={staggerItem}>
                <Card className="p-8 h-full rounded-none border-0 bg-card hover:bg-usbiot-red/[0.03] dark:hover:bg-usbiot-red/[0.06] transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-usbiot-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="w-14 h-14 bg-usbiot-red/[0.08] dark:bg-usbiot-red/[0.12] flex items-center justify-center mb-6 group-hover:bg-usbiot-red/[0.15] transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-usbiot-red" weight="duotone" />
                  </div>
                  <h3 className="font-heading text-lg font-bold tracking-tight mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-[0.9375rem] leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES -- dark section for contrast rhythm */}
      <section className="py-24 md:py-36 bg-gradient-to-br from-usbiot-red via-usbiot-red-dark to-usbiot-red noise-overlay relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,_rgba(216,38,28,0.15),_transparent)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-24 text-center">
            <ScrollReveal>
              <div className="flex items-center gap-3 justify-center mb-4">
                <span className="w-8 h-[2px] bg-usbiot-gold" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-usbiot-gold">
                  Nos Équipes
                </span>
                <span className="w-8 h-[2px] bg-usbiot-gold" />
              </div>
              <h2 className="font-heading text-white text-balance">De U7 à Seniors</h2>
              <p className="mt-5 max-w-xl text-white/40 text-lg leading-relaxed mx-auto">
                Une place pour chaque âge, chaque niveau. Trouvez votre catégorie.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 0.06}>
                <Link href="/equipes" className="group block">
                  <div className="p-6 text-center border border-white/[0.06] hover:border-usbiot-gold/30 transition-all duration-500 hover:bg-white/[0.03] relative overflow-hidden">
                    <div
                      className={`w-12 h-12 ${cat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
                    >
                      <Image
                        src="/images/logo-usbiot.png"
                        alt=""
                        width={28}
                        height={33}
                        className="brightness-0 invert"
                        aria-hidden
                      />
                    </div>
                    <div className="font-heading font-bold text-white text-sm tracking-tight">
                      {cat.name}
                    </div>
                    <div className="text-[11px] text-white/35 uppercase tracking-wider mt-1 font-medium">
                      {cat.age}
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/equipes">
              <Button variant="outline" className="font-semibold border-white/20 text-white hover:bg-white/10 rounded-none px-8 h-12">
                Voir toutes les équipes
                <ArrowRight className="w-4 h-4 ml-2" weight="bold" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* NEXT MATCH + CTA -- asymmetric split */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-6">
            <ScrollReveal className="lg:col-span-3">
              <Card className="p-0 overflow-hidden border-0 bg-gradient-to-br from-usbiot-red-dark to-usbiot-red relative h-full">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(216,38,28,0.2),_transparent_70%)]" />
                <div className="relative z-10 p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-6">
                    <CalendarBlank className="w-5 h-5 text-usbiot-red-light" weight="duotone" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-usbiot-red-light">
                      Prochain Match
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-center">
                      <Image
                        src="/images/logo-usbiot.png"
                        alt="US Biot"
                        width={64}
                        height={76}
                        className="mx-auto mb-3 brightness-0 invert"
                      />
                      <span className="font-heading font-bold text-sm text-white">US Biot</span>
                    </div>
                    <div className="text-center px-8">
                      <div className="text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2">
                        Samedi 19 Avril
                      </div>
                      <div className="font-heading font-extrabold text-usbiot-red-light" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>VS</div>
                      <div className="text-xs text-white/40 mt-1">
                        15:00 - Stade René Cuicala
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-[76px] bg-white/[0.06] flex items-center justify-center mb-3 mx-auto">
                        <Image
                          src="/images/logo-usbiot.png"
                          alt="Adversaire"
                          width={40}
                          height={47}
                          className="opacity-30 brightness-0 invert"
                        />
                      </div>
                      <span className="font-heading font-bold text-sm text-white/60">Adversaire</span>
                    </div>
                  </div>
                  <Link href="/calendrier">
                    <Button variant="outline" className="w-full font-semibold border-white/15 text-white hover:bg-white/10 rounded-none h-12">
                      Voir le calendrier complet
                    </Button>
                  </Link>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-2">
              <Card className="p-0 overflow-hidden border-0 relative h-full bg-gradient-to-br from-usbiot-gold via-usbiot-gold to-usbiot-gold-dark">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.15),_transparent_60%)]" />
                <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Star className="w-5 h-5 text-usbiot-ink/60" weight="duotone" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-usbiot-ink/60">
                        Rejoignez-nous
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-usbiot-ink tracking-tight leading-tight mb-4">
                      Inscriptions
                      <br />
                      Saison 2025-2026
                    </h3>
                    <p className="text-usbiot-ink/60 leading-relaxed mb-8">
                      Que ce soit pour la compétition, le loisir ou un stage de vacances, il y a
                      une place pour votre enfant à l&apos;US Biot.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Link href="/inscriptions">
                      <Button className="w-full bg-usbiot-red hover:bg-usbiot-red-dark text-white font-bold rounded-none h-12">
                        Inscription au club
                        <ArrowRight className="w-4 h-4 ml-2" weight="bold" />
                      </Button>
                    </Link>
                    <Link href="/inscriptions#stages">
                      <Button variant="outline" className="w-full font-semibold mt-2 border-usbiot-red-dark/30 text-usbiot-red-dark hover:bg-usbiot-red-dark/10 rounded-none h-12">
                        Stages de vacances
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS -- left accent bar for editorial feel */}
      <section className="py-24 md:py-36 bg-muted/50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-usbiot-red/[0.04] rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Témoignages"
            title="Ce qu'ils disent de nous"
            description="La parole à nos membres et visiteurs. Note moyenne: 5/5 sur Google."
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={staggerItem}>
                <Card className="p-0 h-full border-0 overflow-hidden relative group">
                  <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-usbiot-red via-usbiot-gold to-transparent" />
                  <div className="p-6 pl-8">
                    <div className="flex items-center gap-0.5 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-usbiot-gold" weight="fill" />
                      ))}
                    </div>
                    <p className="text-[0.9375rem] text-foreground/80 leading-relaxed mb-6 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-usbiot-red/10 flex items-center justify-center text-usbiot-red font-heading font-bold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-heading font-bold text-sm tracking-tight">{t.name}</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-[0.15em]">Avis Google</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Nous Trouver"
            title="Stade René Cuicala"
            description="Au cœur de Biot, des installations modernes pour la pratique du football."
          />
          <ScrollReveal>
            <div className="overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.5!2d7.0964!3d43.6275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cc2c0f12345678%3A0x0!2sStade+Ren%C3%A9+Cuicala+Biot!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du Stade René Cuicala, Biot"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

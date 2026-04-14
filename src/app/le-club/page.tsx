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
  FirstAidKit,
  Gavel,
  CurrencyEur,
  CalendarBlank,
  Briefcase,
  Users,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/motion";

const timeline = [
  {
    year: "1949",
    title: "Fondation de l'US Biot",
    description:
      "Le 13 mars 1949, Henri Curel, Marcel Camatte, Jean Estela, Joseph Berlie, Jean Ballatore, Louis G\u00e9ra, Joseph Vallauri, Marius Gioanni et Albert Purgato fondent l'Union Sportive de Biot. La premi\u00e8re assembl\u00e9e se tient le 1er juin 1949, pr\u00e9sid\u00e9e par Joseph Vallauri. Marcel Camatte devient le premier pr\u00e9sident.",
  },
  {
    year: "Ann\u00e9es 60",
    title: "Arriv\u00e9e de Jean Davanne",
    description:
      "Jean Davanne, professionnel au Stade de Reims, rejoint le club. Les dirigeants construisent eux-m\u00eames les premi\u00e8res tribunes du stade.",
  },
  {
    year: "1974",
    title: "Acc\u00e8s au PHA",
    description:
      "Saison exceptionnelle : 26 victoires en 32 matchs et 60 buts marqu\u00e9s. L'US Biot acc\u00e8de au PHA, le plus haut niveau d\u00e9partemental.",
  },
  {
    year: "1979",
    title: "Aux portes de la Division d'Honneur",
    description:
      "Sous la direction de Robert Perret, ancien professionnel, le PHA termine premier mais \u00e9choue en barrages pour l'acc\u00e8s \u00e0 la Division d'Honneur.",
  },
  {
    year: "Ann\u00e9es 80",
    title: "Essor du club",
    description:
      "Jean-Paul Gaidoz (ancien professionnel) rejoint le club aux c\u00f4t\u00e9s d'Ermano Verucchi. L'US Biot d\u00e9passe les 500 licenci\u00e9s et organise un tournoi jeunes de renomm\u00e9e r\u00e9gionale.",
  },
  {
    year: "1996/97",
    title: "7\u00e8me tour de Coupe de France",
    description:
      "Avec Jean-Michel Biancotti comme entra\u00eeneur, l'\u00e9quipe premi\u00e8re atteint le 7\u00e8me tour de la Coupe de France. Pierre Bel, qui donnera son nom au nouveau stade, \u00e9volue dans cette \u00e9quipe.",
  },
  {
    year: "2010",
    title: "Pr\u00e9sidence de Laurent Charri\u00e8re",
    description:
      "Laurent Charri\u00e8re prend la pr\u00e9sidence du club et engage une reconstruction fond\u00e9e sur la formation des jeunes, avec Ermano Verucchi, J\u00e9r\u00f4me Verucchi, Mohamed Boughazi \u00e0 ses c\u00f4t\u00e9s.",
  },
  {
    year: "2013",
    title: "Complexe Pierre Operto",
    description:
      "La commune de Biot met \u00e0 disposition le Complexe Pierre Operto, offrant des installations modernes pour l'ensemble des \u00e9quipes du club.",
  },
  {
    year: "Aujourd'hui",
    title: "Un club tourn\u00e9 vers l'avenir",
    description:
      "Le club propose d\u00e9sormais du football v\u00e9t\u00e9ran, du football \u00e0 7 et un tournoi jeunes de renomm\u00e9e r\u00e9gionale, tout en continuant de former les g\u00e9n\u00e9rations futures.",
  },
];

const presidents = [
  { year: "1949", name: "Jean Estela" },
  { year: "1971", name: "Jean Lechaczynski" },
  { year: "1972", name: "Paul Gilardi" },
  { year: "1985", name: "Jean-Pierre Chadel" },
  { year: "1996", name: "Jo\u00ebl Pradelli" },
  { year: "1997", name: "Paul Gilardi" },
  { year: "2000", name: "Jean-Paul Gaidoz" },
  { year: "2008", name: "Philippe Caristo" },
  { year: "2009", name: "Jean-Louis Sauvage" },
  { year: "2010", name: "Laurent Charri\u00e8re" },
];

const bureau = [
  {
    name: "Laurent Charri\u00e8re",
    role: "Pr\u00e9sident",
    description:
      "\u00c0 la t\u00eate du club depuis 2010, il porte la vision d'un club ancr\u00e9 dans la formation des jeunes et le d\u00e9veloppement du football biotois.",
    icon: Star,
  },
  {
    name: "M\u00e9hdi Ya\u00efche",
    role: "Vice-Pr\u00e9sident",
    description:
      "Il seconde le pr\u00e9sident dans la gestion quotidienne et le d\u00e9veloppement strat\u00e9gique du club.",
    icon: Handshake,
  },
  {
    name: "Marc Philibert",
    role: "Secr\u00e9taire",
    description:
      "Garant de l'organisation administrative et de la coordination entre les diff\u00e9rentes instances du club.",
    icon: Shield,
  },
  {
    name: "Henrick Kellou",
    role: "Tr\u00e9sorier",
    description:
      "Il veille \u00e0 la bonne gestion financi\u00e8re et \u00e0 la p\u00e9rennit\u00e9 des projets du club.",
    icon: Target,
  },
];

const commissions = [
  {
    name: "Commission Sportive",
    responsable: "Vacant",
    icon: Trophy,
  },
  {
    name: "Commission \u00c9v\u00e9nementielle",
    responsable: "Vacant",
    icon: CalendarBlank,
  },
  {
    name: "Commission Discipline",
    responsable: "Vacant",
    icon: Gavel,
  },
  {
    name: "Commission des Finances",
    responsable: "Vacant",
    icon: CurrencyEur,
  },
  {
    name: "Commission Administrative",
    responsable: "YPS SAS et Matthieu Roch",
    icon: Briefcase,
  },
  {
    name: "Commission Partenaires",
    responsable: "Damien Escoffier",
    icon: Users,
  },
];

const values = [
  {
    icon: Heart,
    title: "Esprit Familial",
    description:
      "Le club est avant tout une grande famille. Parents, joueurs et b\u00e9n\u00e9voles partagent des moments forts tout au long de la saison.",
  },
  {
    icon: Handshake,
    title: "Respect & Fair-Play",
    description:
      "Le respect de l'adversaire, de l'arbitre et des co\u00e9quipiers est au c\u0153ur de notre projet \u00e9ducatif et sportif.",
  },
  {
    icon: GraduationCap,
    title: "Formation & Progression",
    description:
      "Chaque joueur b\u00e9n\u00e9ficie d'un encadrement adapt\u00e9 \u00e0 son \u00e2ge et son niveau pour progresser \u00e0 son rythme.",
  },
  {
    icon: UsersThree,
    title: "Engagement B\u00e9n\u00e9vole",
    description:
      "Le club vit gr\u00e2ce \u00e0 l'investissement de dizaines de b\u00e9n\u00e9voles qui donnent de leur temps chaque semaine.",
  },
  {
    icon: Trophy,
    title: "Ambition Sportive",
    description:
      "Nous visons l'excellence sportive \u00e0 chaque cat\u00e9gorie tout en pr\u00e9servant le plaisir du jeu et la convivialit\u00e9.",
  },
  {
    icon: FirstAidKit,
    title: "Projet Sant\u00e9",
    description:
      "Port\u00e9 par Jean-Philippe Remon, kin\u00e9sith\u00e9rapeute du sport, le projet sant\u00e9 vise \u00e0 \u00e9duquer jeunes et moins jeunes aux bons gestes avant, pendant et apr\u00e8s l'effort pour minimiser les blessures et optimiser le plaisir.",
  },
];

const stadiumFeatures = [
  "Complexe Pierre Operto",
  "Mis \u00e0 disposition par la commune depuis 2013",
  "Vestiaires et infrastructures modernes",
  "Buvette et club house",
  "Parking gratuit",
  "Terrains d'entra\u00eenement",
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
              Depuis 1949
            </Badge>
            <h1 className="text-white font-heading leading-[1.05]">
              D&eacute;couvrez
              <br />
              <span className="text-usbiot-gold">l&apos;US Biot</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-xl">
              Plus de 75 ans de passion, de formation et de convivialit&eacute;
              au c&oelig;ur du village de Biot, sur la C&ocirc;te d&apos;Azur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Notre Histoire"
            title="Plus de 75 ans de passion biotoise"
            description="De la fondation le 13 mars 1949 &agrave; aujourd'hui, retour sur les moments cl&eacute;s qui ont forg&eacute; l'identit&eacute; de l'US Biot."
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

          {/* Presidents list */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-center mb-2">
              Les Pr&eacute;sidents de l&apos;US Biot
            </h3>
            <p className="text-muted-foreground text-center mb-8">
              De Jean Estela &agrave; Laurent Charri&egrave;re, les hommes qui
              ont guid&eacute; le club depuis sa fondation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {presidents.map((p) => (
                <Card
                  key={`${p.year}-${p.name}`}
                  className={`p-4 text-center border-border/50 ${
                    p.name === "Laurent Charri\u00e8re"
                      ? "ring-2 ring-primary bg-primary/5"
                      : ""
                  }`}
                >
                  <span className="text-xs font-bold text-primary font-heading block">
                    {p.year}
                  </span>
                  <span className="text-sm font-semibold mt-1 block">
                    {p.name}
                  </span>
                </Card>
              ))}
            </div>
          </div>

          {/* Notable pros */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="p-6 md:p-8 bg-muted/50 border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <Trophy
                    className="w-6 h-6 text-primary"
                    weight="duotone"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold">
                    Professionnels pass&eacute;s par l&apos;US Biot
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    Plusieurs joueurs professionnels ont port&eacute; le maillot
                    biotois : <strong>Jean Davanne</strong> (Stade de Reims),{" "}
                    <strong>Robert Perret</strong>,{" "}
                    <strong>Jean-Paul Bernad</strong>, et surtout{" "}
                    <strong>Roger Novaro</strong>, seul Biotois &agrave; avoir
                    atteint le niveau professionnel, v&eacute;ritable fiert&eacute;
                    locale.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* BUREAU DIRIGEANT */}
      <section className="py-24 md:py-36 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Bureau Dirigeant"
            title="L'&eacute;quipe dirigeante"
            description="Les b&eacute;n&eacute;voles passionn&eacute;s qui font vivre le club au quotidien."
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {bureau.map((member) => (
              <motion.div key={member.name} variants={staggerItem}>
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <member.icon
                        className="w-6 h-6 text-primary"
                        weight="duotone"
                      />
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

          {/* Commissions */}
          <div className="mt-16">
            <h3 className="font-heading text-2xl font-bold text-center mb-2">
              Les Commissions
            </h3>
            <p className="text-muted-foreground text-center mb-8">
              L&apos;organisation interne du club en commissions
              sp&eacute;cialis&eacute;es.
            </p>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {commissions.map((commission) => (
                <motion.div key={commission.name} variants={staggerItem}>
                  <Card className="p-5 h-full border-border/50 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                        <commission.icon
                          className="w-5 h-5 text-primary"
                          weight="duotone"
                        />
                      </div>
                      <div>
                        <h4 className="font-heading text-sm font-bold">
                          {commission.name}
                        </h4>
                        <span
                          className={`text-xs ${
                            commission.responsable === "Vacant"
                              ? "text-muted-foreground/60 italic"
                              : "text-muted-foreground"
                          }`}
                        >
                          {commission.responsable}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* NOS VALEURS & PROJET SANTE */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Nos Valeurs"
            title="Ce qui nous anime"
            description="Les piliers fondateurs qui guident chaque action du club depuis 1949."
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
                    <value.icon
                      className="w-6 h-6 text-primary"
                      weight="duotone"
                    />
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

      {/* INSTALLATIONS */}
      <section className="py-24 md:py-36 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Nos Installations"
            title="Complexe Pierre Operto"
            description="Des installations modernes mises &agrave; disposition par la commune de Biot depuis 2013 pour la pratique du football dans les meilleures conditions."
          />
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="left">
              <Card className="overflow-hidden border-border/50">
                <div className="aspect-video bg-gradient-to-br from-primary/10 via-muted to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin
                      className="w-12 h-12 text-primary/40 mx-auto mb-3"
                      weight="duotone"
                    />
                    <p className="text-sm text-muted-foreground">
                      Complexe Pierre Operto
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-2">
                  Un &eacute;crin au c&oelig;ur de Biot
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mis &agrave; disposition par la commune de Biot depuis 2013,
                  le Complexe Pierre Operto offre des conditions optimales pour
                  l&apos;entra&icirc;nement et la comp&eacute;tition de
                  l&apos;ensemble des &eacute;quipes du club.
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
                  <span>Biot, 06410, France</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <Clock className="w-4 h-4" weight="regular" />
                  <span>
                    Entra&icirc;nements du lundi au samedi, matchs le dimanche
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
              <Star
                className="w-8 h-8 text-usbiot-gold-dark mx-auto mb-4"
                weight="duotone"
              />
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Rejoignez l&apos;aventure US Biot
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
                Que vous soyez d&eacute;butant ou confirm&eacute;, enfant ou
                adulte, il y a une place pour vous &agrave; l&apos;US Biot.
                Inscrivez-vous pour la saison 2025-2026.
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

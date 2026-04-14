"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  FileText,
  Camera,
  CreditCard,
  Shield,
  Star,
  UsersThree,
  CalendarBlank,
  ClipboardText,
  CurrencyEur,
  Info,
  SoccerBall,
  Leaf,
  Snowflake,
  Flower,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/motion";

const cotisations = [
  {
    category: "U5 a U9",
    years: "Nes en 2016 a 2020",
    price: 160,
    color: "bg-usbiot-gold",
  },
  {
    category: "U10 a U13",
    years: "Nes en 2012 a 2015",
    price: 180,
    color: "bg-usbiot-red",
  },
  {
    category: "U14 a U16",
    years: "Nes en 2009 a 2011",
    price: 190,
    color: "bg-usbiot-red-dark",
  },
  {
    category: "U17 a U19",
    years: "Nes en 2006 a 2008",
    price: 200,
    color: "bg-usbiot-red",
  },
  {
    category: "Seniors",
    years: "Nes avant 2006",
    price: 210,
    color: "bg-usbiot-red-dark",
  },
  {
    category: "Foot a 7",
    years: "Loisir adulte",
    price: 140,
    color: "bg-usbiot-gold",
  },
];

const paymentInfo = [
  "Cotisation obligatoire pour que la licence soit validee",
  "Paiement en 3 fois possible",
  "Cheque ANCV accepte",
  "Cheque de caution obligatoire en cas de paiement par un Comite d\u2019Entreprise",
  "Attestation de paiement fournie sur demande",
];

const stages = [
  {
    period: "Vacances de la Toussaint",
    dates: "Du 20 au 24 Octobre 2025",
    icon: Leaf,
  },
  {
    period: "Vacances de Fevrier",
    dates: "Du 16 au 20 Fevrier 2026",
    icon: Snowflake,
  },
  {
    period: "Vacances de Paques",
    dates: "Du 13 au 17 Avril 2026",
    icon: Flower,
  },
];

const inclus = [
  { icon: Shield, label: "Licence FFF incluse" },
  { icon: Star, label: "Equipement du club (maillot, short, chaussettes)" },
  { icon: CreditCard, label: "Assurance sportive" },
  { icon: UsersThree, label: "Acces aux entrainements et matchs" },
];

const documents = [
  { icon: FileText, label: "Certificat medical de non contre-indication a la pratique du football (moins de 3 mois)" },
  { icon: Camera, label: "Photo d\u2019identite recente" },
  { icon: ClipboardText, label: "Fiche d\u2019inscription completee et signee" },
  { icon: CreditCard, label: "Reglement par cheque ou especes (paiement en 2 ou 3 fois possible)" },
  { icon: FileText, label: "Copie de la piece d\u2019identite du joueur" },
  { icon: FileText, label: "Attestation de domicile de moins de 3 mois" },
];

export default function InscriptionsPage() {
  const [activeTab, setActiveTab] = useState<string | number>("inscription");

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
              Inscriptions{" "}
              <span className="text-usbiot-gold">&amp; Stages</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Rejoignez l&apos;US Biot pour la saison ou inscrivez votre enfant a
              un stage de vacances multi-activites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TARIFS & STAGES TABS */}
      <section className="py-24 md:py-36">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Tarifs & Stages"
            title="Cotisations et stages 2025-2026"
            description="Retrouvez les tarifs par categorie et les dates des stages de vacances."
          />

          <ScrollReveal>
            <Tabs
              defaultValue="inscription"
              value={activeTab}
              onValueChange={(val) => setActiveTab(val)}
            >
              <TabsList className="w-full grid grid-cols-2 mb-8 h-12">
                <TabsTrigger value="inscription" className="text-sm font-semibold h-full">
                  <ClipboardText className="w-4 h-4 mr-2" weight="bold" />
                  Inscription au club
                </TabsTrigger>
                <TabsTrigger value="stage" className="text-sm font-semibold h-full" id="stages">
                  <CalendarBlank className="w-4 h-4 mr-2" weight="bold" />
                  Stage de vacances
                </TabsTrigger>
              </TabsList>

              {/* INSCRIPTION TAB — Cotisation Grid */}
              <TabsContent value="inscription">
                <div className="space-y-8">
                  {/* Cotisation cards */}
                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                  >
                    {cotisations.map((tier) => (
                      <motion.div key={tier.category} variants={staggerItem}>
                        <Card className="p-5 text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                          <div
                            className={`w-10 h-10 ${tier.color} rounded-full mx-auto mb-3 flex items-center justify-center`}
                          >
                            <SoccerBall className="w-5 h-5 text-white" weight="duotone" />
                          </div>
                          <div className="font-heading font-bold text-sm mb-0.5">
                            {tier.category}
                          </div>
                          <div className="text-xs text-muted-foreground mb-3">
                            {tier.years}
                          </div>
                          <div className="font-heading text-3xl font-bold text-primary">
                            {tier.price}<span className="text-lg">&#8364;</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            par saison
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Payment info */}
                  <Card className="p-6 md:p-8 bg-muted/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-usbiot-gold/10 flex items-center justify-center shrink-0">
                        <CurrencyEur className="w-5 h-5 text-usbiot-gold-dark" weight="duotone" />
                      </div>
                      <h3 className="font-heading font-bold text-base">
                        Informations de paiement
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {paymentInfo.map((info, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-usbiot-gold-dark shrink-0 mt-0.5" weight="bold" />
                          <span className="text-sm leading-relaxed">{info}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </TabsContent>

              {/* STAGE TAB — Vacation periods */}
              <TabsContent value="stage">
                <div className="space-y-8">
                  <Card className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-usbiot-gold/10 flex items-center justify-center shrink-0">
                        <Info className="w-5 h-5 text-usbiot-gold-dark" weight="duotone" />
                      </div>
                      <h3 className="font-heading font-bold text-base">
                        Stages multi-activites
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6 ml-[52px]">
                      Ouverts aux licencies et non licencies.
                    </p>

                    <div className="space-y-4">
                      {stages.map((stage) => (
                        <div
                          key={stage.period}
                          className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50 hover:border-usbiot-gold/30 transition-colors"
                        >
                          <div className="w-12 h-12 rounded-lg bg-usbiot-red/10 flex items-center justify-center shrink-0">
                            <stage.icon className="w-6 h-6 text-usbiot-red" weight="duotone" />
                          </div>
                          <div className="flex-1">
                            <div className="font-heading font-bold text-sm">
                              {stage.period}
                            </div>
                            <div className="text-sm text-muted-foreground mt-0.5">
                              {stage.dates}
                            </div>
                          </div>
                          <Badge variant="outline" className="shrink-0 font-semibold text-xs border-usbiot-gold/30 text-usbiot-gold-dark">
                            1 semaine
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 md:py-36 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Inclus"
            title="Ce qui est compris dans l&apos;inscription"
            description="Tout le necessaire pour debuter ou poursuivre l&apos;aventure football."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {inclus.map((item) => (
              <motion.div key={item.label} variants={staggerItem}>
                <Card className="p-6 h-full border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" weight="duotone" />
                  </div>
                  <p className="font-medium text-sm leading-relaxed">
                    {item.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DOCUMENTS REQUIS */}
      <section className="py-24 md:py-36">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Documents"
            title="Documents requis pour l&apos;inscription"
            description="Preparez ces documents avant de venir finaliser l&apos;inscription au club."
          />

          <ScrollReveal>
            <Card className="p-6 md:p-8">
              <div className="space-y-4">
                {documents.map((doc, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 pb-4 border-b border-border/50 last:border-b-0 last:pb-0"
                  >
                    <div className="w-10 h-10 rounded-lg bg-usbiot-gold/10 flex items-center justify-center shrink-0">
                      <doc.icon className="w-5 h-5 text-usbiot-gold-dark" weight="duotone" />
                    </div>
                    <div className="flex items-center gap-3 min-h-10">
                      <Check className="w-4 h-4 text-usbiot-gold-dark shrink-0" weight="bold" />
                      <p className="text-sm leading-relaxed">{doc.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-sm mb-4">
                Des questions sur les inscriptions ? Contactez-nous directement.
              </p>
              <a href="mailto:usbiot.foot@gmail.com">
                <Button
                  variant="outline"
                  className="font-semibold"
                >
                  Nous contacter par email
                  <ArrowRight className="w-4 h-4 ml-2" weight="bold" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState, type FormEvent } from "react";
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
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

const tarifs = [
  {
    category: "U7 - U9",
    age: "5 - 8 ans",
    price: 250,
    color: "bg-emerald-500",
  },
  {
    category: "U10 - U13",
    age: "9 - 12 ans",
    price: 280,
    color: "bg-blue-500",
  },
  {
    category: "U14 - U18",
    age: "13 - 17 ans",
    price: 300,
    color: "bg-purple-500",
  },
  {
    category: "Seniors",
    age: "18+ ans",
    price: 320,
    color: "bg-usbiot-red",
  },
  {
    category: "Stage Semaine",
    age: "6 - 14 ans",
    price: 150,
    color: "bg-usbiot-gold",
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
  { icon: Camera, label: "Photo d'identite recente" },
  { icon: ClipboardText, label: "Fiche d'inscription completee et signee" },
  { icon: CreditCard, label: "Reglement par cheque ou especes (paiement en 2 ou 3 fois possible)" },
  { icon: FileText, label: "Copie de la piece d'identite du joueur" },
  { icon: FileText, label: "Attestation de domicile de moins de 3 mois" },
];

export default function InscriptionsPage() {
  const [activeTab, setActiveTab] = useState<string | number>("inscription");
  const [categorieClub, setCategorieClub] = useState<string | null>(null);
  const [periodeStage, setPeriodeStage] = useState<string | null>(null);

  function handleInscriptionSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Merci pour votre inscription ! Nous reviendrons vers vous dans les plus brefs delais.");
  }

  function handleStageSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Merci pour votre inscription au stage ! Nous vous confirmerons les details par email.");
  }

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
              un stage de vacances. Remplissez le formulaire ci-dessous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORMS SECTION */}
      <section className="py-24 md:py-36">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            label="Formulaire"
            title="Inscrivez-vous en ligne"
            description="Choisissez entre une inscription au club pour la saison ou un stage de vacances."
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

              {/* INSCRIPTION FORM */}
              <TabsContent value="inscription">
                <Card className="p-6 md:p-8">
                  <form onSubmit={handleInscriptionSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="nom-enfant" className="text-sm font-medium">
                          Nom de l&apos;enfant
                        </label>
                        <Input
                          id="nom-enfant"
                          placeholder="Dupont"
                          required
                          className="h-10"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="prenom-enfant" className="text-sm font-medium">
                          Prenom
                        </label>
                        <Input
                          id="prenom-enfant"
                          placeholder="Lucas"
                          required
                          className="h-10"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="date-naissance" className="text-sm font-medium">
                          Date de naissance
                        </label>
                        <Input
                          id="date-naissance"
                          type="date"
                          required
                          className="h-10"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="categorie" className="text-sm font-medium">
                          Categorie
                        </label>
                        <Select value={categorieClub} onValueChange={setCategorieClub}>
                          <SelectTrigger className="w-full h-10" id="categorie">
                            <SelectValue placeholder="Choisir une categorie" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="u7-u9">U7 - U9 (5-8 ans)</SelectItem>
                            <SelectItem value="u10-u11">U10 - U11 (9-10 ans)</SelectItem>
                            <SelectItem value="u12-u13">U12 - U13 (11-12 ans)</SelectItem>
                            <SelectItem value="u14-u15">U14 - U15 (13-14 ans)</SelectItem>
                            <SelectItem value="u16-u18">U16 - U18 (15-17 ans)</SelectItem>
                            <SelectItem value="seniors">Seniors (18+ ans)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="border-t border-border pt-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                        Informations du parent / tuteur
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="nom-parent" className="text-sm font-medium">
                            Nom du parent
                          </label>
                          <Input
                            id="nom-parent"
                            placeholder="Dupont Jean"
                            required
                            className="h-10"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email-club" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email-club"
                            type="email"
                            placeholder="parent@email.com"
                            required
                            className="h-10"
                          />
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <label htmlFor="tel-club" className="text-sm font-medium">
                          Telephone
                        </label>
                        <Input
                          id="tel-club"
                          type="tel"
                          placeholder="06 12 34 56 78"
                          required
                          className="h-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message-club" className="text-sm font-medium">
                        Message (optionnel)
                      </label>
                      <Textarea
                        id="message-club"
                        placeholder="Informations complementaires, allergies, etc."
                        rows={3}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-usbiot-red hover:bg-usbiot-red-dark text-white font-bold text-base"
                    >
                      Envoyer l&apos;inscription
                      <ArrowRight className="w-4 h-4 ml-2" weight="bold" />
                    </Button>
                  </form>
                </Card>
              </TabsContent>

              {/* STAGE FORM */}
              <TabsContent value="stage">
                <Card className="p-6 md:p-8">
                  <form onSubmit={handleStageSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="nom-enfant-stage" className="text-sm font-medium">
                          Nom de l&apos;enfant
                        </label>
                        <Input
                          id="nom-enfant-stage"
                          placeholder="Dupont"
                          required
                          className="h-10"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="prenom-enfant-stage" className="text-sm font-medium">
                          Prenom
                        </label>
                        <Input
                          id="prenom-enfant-stage"
                          placeholder="Lucas"
                          required
                          className="h-10"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="age-stage" className="text-sm font-medium">
                          Age
                        </label>
                        <Input
                          id="age-stage"
                          type="number"
                          min={5}
                          max={16}
                          placeholder="8"
                          required
                          className="h-10"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="periode-stage" className="text-sm font-medium">
                          Periode du stage
                        </label>
                        <Select value={periodeStage} onValueChange={setPeriodeStage}>
                          <SelectTrigger className="w-full h-10" id="periode-stage">
                            <SelectValue placeholder="Choisir une periode" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="toussaint-2025">Vacances de la Toussaint 2025</SelectItem>
                            <SelectItem value="noel-2025">Vacances de Noel 2025</SelectItem>
                            <SelectItem value="hiver-2026">Vacances d&apos;Hiver 2026</SelectItem>
                            <SelectItem value="printemps-2026">Vacances de Printemps 2026</SelectItem>
                            <SelectItem value="ete-2026">Vacances d&apos;Ete 2026</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="border-t border-border pt-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                        Informations du parent / tuteur
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="nom-parent-stage" className="text-sm font-medium">
                            Nom du parent
                          </label>
                          <Input
                            id="nom-parent-stage"
                            placeholder="Dupont Jean"
                            required
                            className="h-10"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email-stage" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email-stage"
                            type="email"
                            placeholder="parent@email.com"
                            required
                            className="h-10"
                          />
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <label htmlFor="tel-stage" className="text-sm font-medium">
                          Telephone
                        </label>
                        <Input
                          id="tel-stage"
                          type="tel"
                          placeholder="06 12 34 56 78"
                          required
                          className="h-10"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-usbiot-gold hover:bg-usbiot-gold-dark text-usbiot-ink font-bold text-base"
                    >
                      Inscrire au stage
                      <ArrowRight className="w-4 h-4 ml-2" weight="bold" />
                    </Button>
                  </form>
                </Card>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-24 md:py-36 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Tarifs"
            title="Nos tarifs pour la saison 2025-2026"
            description="Des tarifs accessibles pour que chacun puisse pratiquer le football dans les meilleures conditions."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {tarifs.map((tarif) => (
              <motion.div key={tarif.category} variants={staggerItem}>
                <Card className="p-6 text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                  <div
                    className={`w-12 h-12 ${tarif.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                  >
                    <Shield className="w-6 h-6 text-white" weight="duotone" />
                  </div>
                  <div className="font-heading font-bold text-sm mb-1">
                    {tarif.category}
                  </div>
                  <div className="text-xs text-muted-foreground mb-3">
                    {tarif.age}
                  </div>
                  <div className="font-heading text-3xl font-bold text-primary">
                    {tarif.price}<span className="text-lg">&#8364;</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {tarif.category === "Stage Semaine" ? "par semaine" : "par saison"}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Inclus"
            title="Ce qui est compris dans l'inscription"
            description="Tout le necessaire pour debuter ou poursuivre l'aventure football."
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
      <section className="py-24 md:py-36 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Documents"
            title="Documents requis pour l'inscription"
            description="Preparez ces documents avant de venir finaliser l'inscription au club."
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
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" weight="bold" />
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

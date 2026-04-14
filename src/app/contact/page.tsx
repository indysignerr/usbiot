"use client";

import { motion } from "framer-motion";
import {
  Envelope,
  Phone,
  MapPin,
  Clock,
  PaperPlaneTilt,
  ChatCircle,
} from "@phosphor-icons/react";
import { FacebookIcon, InstagramIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/motion";

const contactInfo = [
  {
    icon: Phone,
    label: "Telephone",
    value: "06 89 98 36 61",
    description: "Egalement joignable sur WhatsApp",
    href: "tel:+33689983661",
  },
  {
    icon: Envelope,
    label: "Email",
    value: "usbiot.secretariat@gmail.com",
    description: "Reponse sous 48h",
    href: "mailto:usbiot.secretariat@gmail.com",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Stade Pierre Bel",
    description: "Biot 06410",
    href: "https://maps.google.com/?q=Stade+Pierre+Bel+Biot+06410",
  },
];

const openingHours = [
  { day: "Lundi", hours: "18h - 21h" },
  { day: "Mardi", hours: "17h30 - 21h" },
  { day: "Mercredi", hours: "14h - 19h" },
  { day: "Jeudi", hours: "17h30 - 21h" },
  { day: "Vendredi", hours: "Ferme" },
  { day: "Samedi", hours: "9h - 12h" },
  { day: "Dimanche", hours: "Matchs uniquement" },
];

const subjectOptions = [
  "Inscription",
  "Renseignements",
  "Partenariat / Sponsoring",
  "Organisation d'evenement",
  "Reclamation",
  "Autre",
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-usbiot-red via-usbiot-red-dark to-usbiot-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(205,183,40,0.15),_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-40 pb-16 lg:pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge className="mb-6 bg-usbiot-gold/20 text-usbiot-gold border-usbiot-gold/30 font-semibold uppercase tracking-wider text-xs">
              Contact
            </Badge>
            <h1 className="text-white font-heading leading-[1.05]">
              Contactez{" "}
              <span className="text-usbiot-gold">l&apos;US Biot</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Une question, une demande d&apos;inscription ou simplement envie
              de nous rejoindre ? N&apos;hesitez pas a nous ecrire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* LEFT: FORM */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <Card className="p-0">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="font-heading text-xl md:text-2xl mb-2">
                      Envoyez-nous un message
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Remplissez le formulaire ci-dessous et nous vous
                      repondrons dans les meilleurs delais.
                    </p>

                    <form
                      className="space-y-5"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label
                            htmlFor="nom"
                            className="text-sm font-medium leading-none"
                          >
                            Nom complet
                          </label>
                          <Input
                            id="nom"
                            placeholder="Jean Dupont"
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium leading-none"
                          >
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="jean@exemple.com"
                            className="h-11"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label
                            htmlFor="telephone"
                            className="text-sm font-medium leading-none"
                          >
                            Telephone
                          </label>
                          <Input
                            id="telephone"
                            type="tel"
                            placeholder="06 12 34 56 78"
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="sujet"
                            className="text-sm font-medium leading-none"
                          >
                            Sujet
                          </label>
                          <Select>
                            <SelectTrigger className="h-11 w-full" id="sujet">
                              <SelectValue placeholder="Choisir un sujet" />
                            </SelectTrigger>
                            <SelectContent>
                              {subjectOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Votre message..."
                          className="min-h-[140px]"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto bg-usbiot-red hover:bg-usbiot-red-dark text-white font-bold text-base px-8"
                      >
                        Envoyer le message
                        <PaperPlaneTilt className="w-4 h-4 ml-2" weight="bold" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* RIGHT: INFO */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact details */}
              <ScrollReveal delay={0.1}>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        variants={staggerItem}
                        className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/50 hover:bg-muted/50 transition-colors group"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-usbiot-red/10 dark:bg-usbiot-red/20 shrink-0">
                          <Icon className="w-5 h-5 text-usbiot-red" weight="duotone" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{info.label}</p>
                          <p className="text-foreground font-semibold">
                            {info.value}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {info.description}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </motion.div>
              </ScrollReveal>

              {/* Opening hours */}
              <ScrollReveal delay={0.2}>
                <div className="p-5 rounded-xl border border-border/50 bg-card/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-usbiot-gold/10 dark:bg-usbiot-gold/20">
                      <Clock className="w-5 h-5 text-usbiot-gold" weight="duotone" />
                    </div>
                    <h3 className="font-heading text-lg">
                      Horaires du secretariat
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {openingHours.map((item) => (
                      <div
                        key={item.day}
                        className="flex justify-between items-center py-1.5 border-b border-border/30 last:border-0"
                      >
                        <span className="text-sm text-muted-foreground">
                          {item.day}
                        </span>
                        <span
                          className={`text-sm font-medium ${
                            item.hours === "Ferme"
                              ? "text-muted-foreground/60"
                              : ""
                          }`}
                        >
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Social links */}
              <ScrollReveal delay={0.3}>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/usbiot/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border/50 bg-card/50 hover:bg-muted/50 transition-colors flex-1"
                  >
                    <FacebookIcon className="w-5 h-5 text-usbiot-blue" />
                    <span className="text-sm font-medium">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/usbiotfootball/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border/50 bg-card/50 hover:bg-muted/50 transition-colors flex-1"
                  >
                    <InstagramIcon className="w-5 h-5 text-usbiot-red" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  <a
                    href="https://wa.me/33689983661"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border/50 bg-card/50 hover:bg-muted/50 transition-colors flex-1"
                  >
                    <ChatCircle className="w-5 h-5 text-usbiot-green" weight="duotone" />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="py-24 md:py-36 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Nous trouver"
            title="Stade Pierre Bel"
            description="Chemin de la Brague, 06410 Biot — a 5 minutes de Sophia Antipolis et d'Antibes."
          />
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden border border-border/50 aspect-[16/7]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.5!2d7.0754!3d43.6286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cc2b3f3a6e3e3d%3A0x1234567890abcdef!2sStade%20Pierre%20Bel%2C%2006410%20Biot!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du Stade Pierre Bel, Biot"
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

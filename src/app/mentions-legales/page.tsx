"use client";

import { motion } from "framer-motion";
import {
  Scales,
  Copyright,
  Globe,
  Link as LinkIcon,
  Gavel,
  Buildings,
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { staggerContainer, staggerItem } from "@/lib/motion";

const sections = [
  {
    id: "editeur",
    title: "Editeur du site",
    icon: Buildings,
    content: [
      "Le present site internet https://usbiot.vercel.app est edite par l'Union Sportive de Biot (US Biot), association loi 1901, fondee en 1949.",
      "Siege social : Complexe Pierre Operto, Biot 06410, France.",
      "Telephone : 06 89 98 36 61",
      "Email : usbiot.secretariat@gmail.com",
      "President : Laurent Charriere.",
      "Directeur de la publication : Laurent Charriere, en sa qualite de President de l'association.",
    ],
  },
  {
    id: "hebergement",
    title: "Hebergement",
    icon: Globe,
    content: [
      "Le site est heberge par Vercel Inc., dont le siege social est situe au 340 S Lemon Ave #4133, Walnut, CA 91789, Etats-Unis.",
      "Site web de l'hebergeur : https://vercel.com",
      "Pour toute question relative a l'hebergement, vous pouvez contacter Vercel via leur site officiel.",
    ],
  },
  {
    id: "propriete-intellectuelle",
    title: "Propriete intellectuelle",
    icon: Copyright,
    content: [
      "L'ensemble du contenu de ce site (textes, images, photographies, logos, icones, videos, sons, logiciels, base de donnees, mise en page) est la propriete exclusive de l'Union Sportive de Biot ou de ses partenaires et est protege par les lois francaises et internationales relatives a la propriete intellectuelle.",
      "Toute reproduction, representation, modification, publication, transmission, denaturation, totale ou partielle du site ou de son contenu, par quelque procede que ce soit, et sur quelque support que ce soit est interdite sans l'autorisation ecrite prealable de l'US Biot.",
      "Toute exploitation non autorisee du site ou de son contenu, des informations qui y sont divulguees, engagerait la responsabilite de l'utilisateur et constituerait une contrefacon sanctionnee par les articles L.335-2 et suivants du Code de la propriete intellectuelle.",
    ],
  },
  {
    id: "responsabilite",
    title: "Responsabilite",
    icon: Scales,
    content: [
      "L'Union Sportive de Biot s'efforce de fournir sur son site des informations aussi precises que possible. Toutefois, elle ne pourra etre tenue responsable des omissions, des inexactitudes et des carences dans la mise a jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.",
      "Toutes les informations proposees sur le site sont donnees a titre indicatif et sont susceptibles d'evoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnes sous reserve de modifications ayant ete apportees depuis leur mise en ligne.",
      "L'US Biot ne saurait etre tenue pour responsable de tout dommage, direct ou indirect, quelle qu'en soit la cause, origine, nature ou consequence, provoque en raison de l'acces de quiconque au site ou de l'impossibilite d'y acceder, de meme que de l'utilisation du site et/ou du credit accorde a une quelconque information provenant directement ou indirectement de ce dernier.",
    ],
  },
  {
    id: "liens-hypertextes",
    title: "Liens hypertextes",
    icon: LinkIcon,
    content: [
      "Le site de l'US Biot peut contenir des liens hypertextes vers d'autres sites internet ou d'autres sources d'informations gerees par des tiers. Dans la mesure ou l'US Biot ne peut controler ces sites et ces sources externes, l'association ne peut etre tenue pour responsable de la mise a disposition de ces sites et sources externes.",
      "La mise en place d'un lien hypertexte vers le site de l'US Biot necessite une autorisation prealable et ecrite. Pour toute demande, veuillez nous contacter a l'adresse usbiot.secretariat@gmail.com.",
    ],
  },
  {
    id: "droit-applicable",
    title: "Droit applicable",
    icon: Gavel,
    content: [
      "Les presentes mentions legales sont regies par le droit francais. En cas de litige et a defaut de resolution amiable, les tribunaux francais seront seuls competents pour connaitre de ce differend.",
      "Conformement a la loi n 78-17 du 6 janvier 1978 modifiee relative a l'informatique, aux fichiers et aux libertes, ainsi qu'au Reglement General sur la Protection des Donnees (RGPD) du 25 mai 2018, vous disposez d'un droit d'acces, de rectification, de suppression et d'opposition aux donnees personnelles vous concernant.",
      "Pour exercer ces droits, vous pouvez adresser votre demande par courrier a : Union Sportive de Biot, Complexe Pierre Operto, Biot 06410, France, ou par email a usbiot.secretariat@gmail.com, en joignant une copie de votre piece d'identite.",
    ],
  },
];

export default function MentionsLegalesPage() {
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
              Informations legales
            </Badge>
            <h1 className="text-white font-heading leading-[1.05]">
              Mentions{" "}
              <span className="text-usbiot-gold">legales</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Informations relatives a l&apos;editeur du site, a
              l&apos;hebergement, a la propriete intellectuelle et au droit
              applicable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LEGAL SECTIONS */}
      <section className="py-24 md:py-36">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {sections.map((section, sectionIndex) => {
              const Icon = section.icon;
              return (
                <motion.div key={section.id} variants={staggerItem}>
                  <ScrollReveal delay={sectionIndex * 0.05}>
                    <div className="rounded-xl border border-border/50 bg-card/50 overflow-hidden p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-usbiot-red/10 dark:bg-usbiot-red/20">
                          <Icon
                            className="w-5 h-5 text-usbiot-red"
                            weight="duotone"
                          />
                        </div>
                        <h2 className="font-heading text-xl md:text-2xl">
                          {section.title}
                        </h2>
                      </div>
                      <div className="space-y-4">
                        {section.content.map((paragraph, i) => (
                          <p
                            key={i}
                            className="text-muted-foreground leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="pb-24 md:pb-36">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Derniere mise a jour : avril 2026
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

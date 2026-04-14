"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Eye,
  Database,
  UserCircle,
  Lock,
  Envelope,
  Cookie,
  Scales,
  Clock,
  UsersThree,
  PencilSimple,
  ArrowRight,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { staggerContainer, staggerItem } from "@/lib/motion";

const sections = [
  {
    id: "responsable",
    icon: UserCircle,
    title: "Responsable du traitement",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Le responsable du traitement des donnees personnelles collectees sur
          ce site est :
        </p>
        <ul className="space-y-2 text-muted-foreground leading-relaxed">
          <li>
            <span className="font-semibold text-foreground">
              Union Sportive de Biot (US Biot)
            </span>
          </li>
          <li>Association loi 1901</li>
          <li>Complexe Pierre Operto, Biot 06410, France</li>
          <li>Telephone : 06 89 98 36 61</li>
          <li>
            Email :{" "}
            <a
              href="mailto:usbiot.secretariat@gmail.com"
              className="text-usbiot-red hover:underline"
            >
              usbiot.secretariat@gmail.com
            </a>
          </li>
          <li>
            Representant legal : Laurent Charriere, President
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "donnees-collectees",
    icon: Database,
    title: "Donnees collectees",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Dans le cadre de l&apos;utilisation du site{" "}
          <a
            href="https://usbiot.vercel.app"
            className="text-usbiot-red hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            usbiot.vercel.app
          </a>
          , nous sommes susceptibles de collecter les categories de donnees
          suivantes :
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Donnees fournies via le formulaire de contact
            </h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground leading-relaxed">
              <li>Nom et prenom</li>
              <li>Adresse email</li>
              <li>Numero de telephone (facultatif)</li>
              <li>Contenu du message</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Donnees de navigation collectees automatiquement
            </h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground leading-relaxed">
              <li>Adresse IP</li>
              <li>Type et version du navigateur</li>
              <li>Pages consultees et duree de visite</li>
              <li>Date et heure de connexion</li>
              <li>Systeme d&apos;exploitation</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "finalites",
    icon: Eye,
    title: "Finalites du traitement",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Les donnees personnelles collectees sont utilisees pour les finalites
          suivantes :
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
          <li>
            Repondre aux demandes de contact et d&apos;information adressees via
            le formulaire du site
          </li>
          <li>
            Gerer les demandes d&apos;inscription et de renseignement relatives
            aux activites du club
          </li>
          <li>
            Ameliorer l&apos;experience utilisateur et le fonctionnement du site
          </li>
          <li>
            Realiser des statistiques anonymes de frequentation du site
          </li>
          <li>
            Respecter nos obligations legales et reglementaires
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "base-legale",
    icon: Scales,
    title: "Base legale du traitement",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Conformement au Reglement General sur la Protection des Donnees
          (RGPD), le traitement de vos donnees repose sur les bases legales
          suivantes :
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
          <li>
            <span className="font-semibold text-foreground">
              Consentement
            </span>{" "}
            : lorsque vous remplissez le formulaire de contact ou acceptez les
            cookies (article 6.1.a du RGPD)
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Interet legitime
            </span>{" "}
            : pour l&apos;amelioration de nos services et la gestion de la
            relation avec nos membres (article 6.1.f du RGPD)
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Obligation legale
            </span>{" "}
            : pour le respect de nos obligations comptables et administratives
            (article 6.1.c du RGPD)
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "duree-conservation",
    icon: Clock,
    title: "Duree de conservation",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Vos donnees personnelles sont conservees pour une duree proportionnee
          a la finalite pour laquelle elles ont ete collectees :
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
          <li>
            <span className="font-semibold text-foreground">
              Formulaire de contact
            </span>{" "}
            : les donnees sont conservees pendant 12 mois a compter de la
            derniere demande, puis supprimees
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Donnees de navigation
            </span>{" "}
            : les donnees de connexion sont conservees pendant 13 mois
            conformement aux recommandations de la CNIL
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Donnees des membres
            </span>{" "}
            : conservees pendant la duree de l&apos;adhesion et 3 ans apres la
            fin de la derniere saison d&apos;inscription
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "destinataires",
    icon: UsersThree,
    title: "Destinataires des donnees",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Les donnees collectees sont destinees exclusivement aux membres du
          bureau de l&apos;US Biot habilites a traiter les demandes. Elles ne
          sont en aucun cas cedees ou vendues a des tiers.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Toutefois, certaines donnees peuvent etre transmises a :
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
          <li>
            La Federation Francaise de Football (FFF) et le District des
            Alpes-Maritimes dans le cadre des licences et de la gestion
            sportive
          </li>
          <li>
            Notre hebergeur web (Vercel Inc.) pour le fonctionnement technique
            du site
          </li>
          <li>
            Les autorites competentes en cas d&apos;obligation legale
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "droits",
    icon: ShieldCheck,
    title: "Droits des utilisateurs",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Conformement au RGPD et a la loi Informatique et Libertes, vous
          disposez des droits suivants sur vos donnees personnelles :
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
          <li>
            <span className="font-semibold text-foreground">
              Droit d&apos;acces
            </span>{" "}
            : obtenir la confirmation que des donnees vous concernant sont
            traitees et en recevoir une copie
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Droit de rectification
            </span>{" "}
            : demander la correction de donnees inexactes ou incompletes
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Droit de suppression
            </span>{" "}
            : demander l&apos;effacement de vos donnees dans les conditions
            prevues par la reglementation
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Droit a la portabilite
            </span>{" "}
            : recevoir vos donnees dans un format structure et lisible par
            machine
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Droit d&apos;opposition
            </span>{" "}
            : vous opposer au traitement de vos donnees pour des motifs
            legitimes
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Droit a la limitation
            </span>{" "}
            : demander la suspension temporaire du traitement de vos donnees
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Pour exercer ces droits, contactez-nous a l&apos;adresse{" "}
          <a
            href="mailto:usbiot.secretariat@gmail.com"
            className="text-usbiot-red hover:underline"
          >
            usbiot.secretariat@gmail.com
          </a>{" "}
          en joignant une copie de votre piece d&apos;identite. Nous nous
          engageons a repondre dans un delai d&apos;un mois. En cas de
          desaccord, vous pouvez introduire une reclamation aupres de la CNIL
          (Commission Nationale de l&apos;Informatique et des Libertes).
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies et traceurs",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Le site usbiot.vercel.app est susceptible d&apos;utiliser des cookies
          pour assurer son bon fonctionnement et ameliorer l&apos;experience
          utilisateur.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Cookies strictement necessaires
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Ces cookies sont indispensables au fonctionnement du site et ne
              peuvent pas etre desactives. Ils ne collectent aucune donnee
              personnelle a des fins de profilage.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Cookies analytiques
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Ces cookies nous permettent de mesurer l&apos;audience du site de
              maniere anonyme (nombre de visites, pages les plus consultees).
              Ils ne sont deposes qu&apos;avec votre consentement prealable.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Vous pouvez a tout moment modifier vos preferences en matiere de
            cookies via les parametres de votre navigateur. La suppression des
            cookies peut affecter votre experience de navigation sur le site.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "securite",
    icon: Lock,
    title: "Securite des donnees",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-4">
          L&apos;US Biot met en oeuvre les mesures techniques et
          organisationnelles appropriees pour garantir la securite et la
          confidentialite de vos donnees personnelles :
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
          <li>Chiffrement des communications via le protocole HTTPS/TLS</li>
          <li>
            Acces restreint aux donnees personnelles aux seuls membres du
            bureau habilites
          </li>
          <li>
            Hebergement securise sur la plateforme Vercel avec protection
            contre les attaques DDoS
          </li>
          <li>
            Mise a jour reguliere des composants logiciels et correctifs de
            securite
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "modifications",
    icon: PencilSimple,
    title: "Modifications de la politique",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-4">
          L&apos;US Biot se reserve le droit de modifier la presente politique
          de confidentialite a tout moment afin de l&apos;adapter aux
          evolutions legales et reglementaires ou aux changements de nos
          pratiques.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Toute modification substantielle sera signalee sur cette page avec
          une date de mise a jour. Nous vous invitons a consulter
          regulierement cette page. Date de derniere mise a jour :{" "}
          <span className="font-semibold text-foreground">14 avril 2026</span>.
        </p>
      </>
    ),
  },
  {
    id: "contact-dpo",
    icon: Envelope,
    title: "Contact DPO",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Pour toute question relative a la protection de vos donnees
          personnelles ou pour exercer vos droits, vous pouvez contacter notre
          responsable de la protection des donnees :
        </p>
        <ul className="space-y-2 text-muted-foreground leading-relaxed">
          <li>
            <span className="font-semibold text-foreground">
              Laurent Charriere
            </span>{" "}
            — President, Delegue a la protection des donnees
          </li>
          <li>
            Email :{" "}
            <a
              href="mailto:usbiot.secretariat@gmail.com"
              className="text-usbiot-red hover:underline"
            >
              usbiot.secretariat@gmail.com
            </a>
          </li>
          <li>Telephone : 06 89 98 36 61</li>
          <li>
            Adresse : Complexe Pierre Operto, Biot 06410, France
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          En cas de difficulte dans la gestion de vos donnees personnelles,
          vous pouvez egalement adresser une reclamation a la CNIL :{" "}
          <a
            href="https://www.cnil.fr"
            className="text-usbiot-red hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.cnil.fr
          </a>
        </p>
      </>
    ),
  },
];

export default function PolitiqueDeConfidentialitePage() {
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
              RGPD
            </Badge>
            <h1 className="text-white font-heading leading-[1.05]">
              Politique de{" "}
              <span className="text-usbiot-gold">confidentialite</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Decouvrez comment l&apos;US Biot collecte, utilise et protege vos
              donnees personnelles conformement au RGPD.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="py-24 md:py-36">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div key={section.id} variants={staggerItem}>
                  <ScrollReveal delay={index * 0.03}>
                    <Card className="border-border/50 bg-card/50 p-6 md:p-8">
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
                      {section.content}
                    </Card>
                  </ScrollReveal>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-usbiot-red via-usbiot-red-dark to-usbiot-ink p-8 md:p-12 text-center noise-overlay">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(205,183,40,0.12),_transparent_60%)]" />
              <div className="relative z-10">
                <h2 className="font-heading text-white text-2xl md:text-3xl mb-4">
                  Une question sur vos donnees ?
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
                  Contactez notre responsable de la protection des donnees pour
                  exercer vos droits ou obtenir des informations
                  complementaires.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-usbiot-gold hover:bg-usbiot-gold-dark text-usbiot-ink font-bold text-base px-8"
                  >
                    Nous contacter
                    <ArrowRight className="w-4 h-4 ml-2" weight="bold" />
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

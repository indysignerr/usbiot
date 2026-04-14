"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Question,
  ArrowRight,
  ClipboardText,
  Barbell,
  Trophy,
  Sun,
  MapPin,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { staggerContainer, staggerItem } from "@/lib/motion";

const faqSections = [
  {
    id: "inscriptions",
    title: "Inscriptions",
    icon: ClipboardText,
    questions: [
      {
        q: "A partir de quel age peut-on inscrire son enfant ?",
        a: "Les inscriptions sont ouvertes des l'age de 5 ans (categorie U7). L'enfant doit avoir 5 ans revolus au 1er janvier de la saison en cours. Pour les tout-petits, nous proposons des seances d'eveil au football adaptees a leur age avec une approche ludique et pedagogique.",
      },
      {
        q: "Quels documents sont necessaires pour l'inscription ?",
        a: "Pour finaliser l'inscription, vous devrez fournir : une photo d'identite recente, un certificat medical de non contre-indication a la pratique du football (datant de moins de 3 mois), une copie de la piece d'identite de l'enfant, une attestation d'assurance responsabilite civile, et le formulaire d'inscription dument rempli et signe par les deux parents.",
      },
      {
        q: "Quels sont les tarifs de la licence pour la saison ?",
        a: "Les tarifs varient selon la categorie d'age : de 180EUR a 230EUR pour les jeunes (U7 a U18), et environ 280EUR pour les seniors. Ce tarif comprend la licence FFF, l'assurance, un kit d'entrainement (maillot, short, chaussettes) et l'acces a toutes les installations du club. Des tarifs preferentiels sont proposes pour les familles avec plusieurs enfants inscrits.",
      },
      {
        q: "Quand peut-on s'inscrire pour la prochaine saison ?",
        a: "Les inscriptions pour la saison 2025-2026 ouvrent generalement fin mai pour les renouvellements et mi-juin pour les nouvelles inscriptions. Nous organisons des journees d'inscription au stade Pierre Bel. Il est conseille de s'inscrire le plus tot possible car certaines categories peuvent etre completes. Suivez nos reseaux sociaux pour connaitre les dates exactes.",
      },
      {
        q: "Peut-on etre rembourse en cas de desistement ?",
        a: "Un remboursement partiel est possible si la demande est faite avant le 30 septembre de la saison en cours. Passe cette date, la cotisation reste due dans son integralite car la licence FFF a ete souscrite. En cas de blessure longue duree (certificat medical a l'appui), un avoir peut etre propose pour la saison suivante. Contactez le secretariat pour etudier votre situation.",
      },
    ],
  },
  {
    id: "entrainements",
    title: "Entrainements",
    icon: Barbell,
    questions: [
      {
        q: "Quels sont les horaires d'entrainement ?",
        a: "Les horaires varient selon les categories : les U7-U9 s'entrainent le mercredi de 14h a 15h30 et le samedi matin de 10h a 11h30. Les U10-U13 s'entrainent le mardi et jeudi de 17h30 a 19h. Les U14-U18 s'entrainent le lundi et mercredi de 18h a 19h30. Les seniors s'entrainent le mardi et jeudi de 19h30 a 21h. Retrouvez le planning complet sur la page Entrainements.",
      },
      {
        q: "Quel equipement faut-il pour les entrainements ?",
        a: "Le kit d'entrainement du club (inclus dans l'inscription) est obligatoire pour tous les entrainements. Prevoyez egalement : des chaussures a crampons moules (pas de crampons visses sur synthetique), des protege-tibias (obligatoires), une gourde d'eau, et en hiver des sous-vetements thermiques. Le club dispose d'un partenaire pour l'equipement complementaire.",
      },
      {
        q: "Que se passe-t-il en cas de pluie ou mauvais temps ?",
        a: "Le terrain synthetique du stade Pierre Bel permet de s'entrainer dans la plupart des conditions meteorologiques. Seuls les orages violents, les vents tres forts ou le gel peuvent entrainer une annulation. En cas d'annulation, les educateurs previennent les parents via le groupe WhatsApp de l'equipe au plus tard 1 heure avant l'entrainement.",
      },
      {
        q: "Comment se passent les premiers entrainements ?",
        a: "Pour les nouveaux joueurs, nous proposons jusqu'a 3 seances d'essai gratuites avant de finaliser l'inscription. L'enfant est accueilli par l'educateur de sa categorie qui l'integre progressivement au groupe. Aucun niveau minimum n'est requis : nos educateurs diplomes adaptent les exercices pour que chacun progresse a son rythme et prenne du plaisir.",
      },
    ],
  },
  {
    id: "competitions",
    title: "Competitions",
    icon: Trophy,
    questions: [
      {
        q: "Le club participe-t-il a des tournois ?",
        a: "Oui, l'US Biot participe a de nombreux tournois tout au long de la saison. Nous organisons aussi notre propre tournoi annuel au mois de juin, l'un des plus importants du departement. Les equipes de jeunes participent regulierement a des tournois le week-end dans les Alpes-Maritimes et le Var. C'est un moment fort de cohesion et de plaisir pour les joueurs.",
      },
      {
        q: "Comment sont organises les deplacements pour les matchs ?",
        a: "Pour les matchs a l'exterieur, les parents assurent generalement le transport de leurs enfants. Un systeme de covoiturage est mis en place via le groupe WhatsApp de chaque equipe. Pour les tournois plus eloignes, le club peut organiser un deplacement collectif en minibus. Les horaires et lieux de rendez-vous sont communiques par l'educateur en debut de semaine.",
      },
      {
        q: "Faut-il un niveau minimum pour jouer en competition ?",
        a: "Non, toutes les equipes sont engagees en championnat et chaque joueur inscrit a vocation a participer aux matchs. Notre philosophie est de faire jouer tout le monde, quel que soit le niveau. Pour les plus jeunes (U7-U9), les rencontres se font sous forme de plateaux sans classement, dans un esprit de decouverte et de plaisir du jeu.",
      },
    ],
  },
  {
    id: "stages",
    title: "Stages",
    icon: Sun,
    questions: [
      {
        q: "Quand ont lieu les stages pendant les vacances ?",
        a: "Le club organise des stages de football pendant les vacances scolaires de la Toussaint, de fevrier et de Paques, ainsi qu'un grand stage d'ete en juillet. Les stages durent generalement une semaine (du lundi au vendredi), de 9h a 17h. Les inscriptions ouvrent environ un mois avant chaque stage et les places sont limitees.",
      },
      {
        q: "Que comprend le programme des stages ?",
        a: "Les stages sont encadres par nos educateurs diplomes et comprennent : des seances techniques (dribble, passe, frappe), des ateliers tactiques adaptes a l'age, des matchs et tournois internes, des jeux ludiques et des activites de cohesion. L'objectif est de progresser tout en s'amusant dans une ambiance conviviale. Un gouter est offert chaque apres-midi.",
      },
      {
        q: "Les repas sont-ils inclus dans les stages ?",
        a: "Pour les stages a la journee, le dejeuner n'est pas inclus. Les enfants doivent apporter leur repas froid (pas de possibilite de rechauffer). En revanche, le gouter de l'apres-midi est offert par le club. Pensez a prevoir une gourde d'eau, une casquette et de la creme solaire pour les stages d'ete. Le prix d'un stage est d'environ 120EUR a 150EUR la semaine.",
      },
    ],
  },
  {
    id: "pratique",
    title: "Pratique",
    icon: MapPin,
    questions: [
      {
        q: "Y a-t-il un parking au stade ?",
        a: "Oui, un parking gratuit est disponible a proximite immediate du stade Pierre Bel. Il dispose d'environ 50 places. Les jours de match ou de tournoi, le parking peut etre sature : nous recommandons alors de se garer dans les rues adjacentes ou d'utiliser le covoiturage. L'acces au stade est egalement possible a pied depuis le centre de Biot (10 minutes).",
      },
      {
        q: "Le club dispose-t-il de vestiaires ?",
        a: "Le stade Pierre Bel dispose de vestiaires modernes et recemment renoves. Chaque equipe a acces a un vestiaire equipe de douches, bancs et casiers. Les vestiaires sont accessibles 30 minutes avant et apres les entrainements et matchs. Nous demandons aux joueurs de respecter la proprete des lieux et de ne pas laisser d'objets de valeur sans surveillance.",
      },
      {
        q: "Comment contacter le club pour plus d'informations ?",
        a: "Plusieurs moyens de nous joindre : par telephone au 06 89 98 36 61 (egalement joignable sur WhatsApp), par email a usbiot.secretariat@gmail.com, ou directement au stade Pierre Bel aux horaires de permanence (mercredi 14h-18h et samedi 9h-12h). Vous pouvez aussi nous suivre sur Facebook et Instagram (@usbiotfootball) pour toute l'actualite du club.",
      },
    ],
  },
];

export default function FAQPage() {
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
              Foire aux questions
            </Badge>
            <h1 className="text-white font-heading leading-[1.05]">
              Toutes vos{" "}
              <span className="text-usbiot-gold">questions</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Retrouvez les reponses aux questions les plus frequentes sur
              l&apos;inscription, les entrainements, les competitions et la vie
              du club.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTIONS */}
      <section className="py-24 md:py-36">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {faqSections.map((section, sectionIndex) => {
              const Icon = section.icon;
              return (
                <motion.div key={section.id} variants={staggerItem}>
                  <ScrollReveal delay={sectionIndex * 0.05}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-usbiot-red/10 dark:bg-usbiot-red/20">
                        <Icon className="w-5 h-5 text-usbiot-red" weight="duotone" />
                      </div>
                      <h2 className="font-heading text-xl md:text-2xl">
                        {section.title}
                      </h2>
                    </div>

                    <Accordion className="rounded-xl border border-border/50 bg-card/50 overflow-hidden">
                      {section.questions.map((item, i) => (
                        <AccordionItem key={i} value={i}>
                          <AccordionTrigger className="px-5 py-4 text-base font-medium hover:no-underline hover:bg-muted/50 transition-colors">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="px-5 pb-4 text-muted-foreground leading-relaxed">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
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
                  Vous n&apos;avez pas trouve votre reponse ?
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
                  N&apos;hesitez pas a nous contacter directement, notre equipe se
                  fera un plaisir de vous repondre.
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

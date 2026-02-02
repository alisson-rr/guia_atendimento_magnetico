import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Heart,
  Target,
  Sparkles,
  Check,
  X,
  Shield,
  Clock,
  BookOpen,
  FileText,
  CalendarCheck,
  Users,
  ArrowRight,
  Phone,
  Play,
} from "lucide-react";

// Image URLs
const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/fpinq1SAzfh2uTkBQreVXE/sandbox/1uDQVocZvioVyazfq6TLAx-img-1_1770065595000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZnBpbnExU0F6ZmgydVRrQlFyZVZYRS9zYW5kYm94LzF1RFFWb2NadmlvVnlhemZxNlRMQXgtaW1nLTFfMTc3MDA2NTU5NTAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nNIJpD9KoMDWboOJGHb-qB761aNZk5OLdUkoHEF6GWGjX5I5Y1vsTr3cKhx4xYcSuQsCvHJ8H20fcJL7qrOvCznB0XywXnFzTMtR-u6xcaOel3Dz8Ph8LssQkKGS2sBUEx3F1ng2DwrU6NzBaVk6inqnpa-yJISVb0B95ZvshBqFTL0ae--hjgtuS4qOEDQg~VmtQ1hI39RHT5jn0P-mXwaLlQMPwzJgd1Uvqbyp8axp0xgocQz7EQuqFKoyU97mvzMwEQucysnAOz0Uis0pyo8IANyGaVOcZv4Z8o5iyeb0FJvcxvE79Y7Li2aBYiyPYC~yokJ~~rYCCquboeT1HA__";
const EBOOK_MOCKUP = "https://private-us-east-1.manuscdn.com/sessionFile/fpinq1SAzfh2uTkBQreVXE/sandbox/1uDQVocZvioVyazfq6TLAx-img-2_1770065592000_na1fn_ZWJvb2stbW9ja3Vw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZnBpbnExU0F6ZmgydVRrQlFyZVZYRS9zYW5kYm94LzF1RFFWb2NadmlvVnlhemZxNlRMQXgtaW1nLTJfMTc3MDA2NTU5MjAwMF9uYTFmbl9aV0p2YjJzdGJXOWphM1Z3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SnYPdPporXm81YlCniRXEssNczDY1MD6ta8CM1Veh3iWWtzL-hPCSOYG0TT4fuE3uXKyusCRs0Uyy21dKoFsUQJaLqP5vc4C8W2BAqZd-6Ap830Fjzy84rPNhSxkvvsJaoYCspjIt6oaA3fLUb6i33y7ylLowLkz4cVrCU3LyZ2WHfYVEE8fwxRiCxL5zrsEkn3UzLaFC9ByxYjaPlxj--VdP8pwpiV8zWpnqbBc~LYcTIHqxwOw~Par83Q5-VLd9~eA-FXSyv2BfcGrPCEDsQjbB24aDuescQXtmU9k8FWfclPgJoep0noXbaeQikfuo3qlx7btENNYZ7wA~yEzfw__";
const AUTHOR_WORKSPACE = "https://private-us-east-1.manuscdn.com/sessionFile/fpinq1SAzfh2uTkBQreVXE/sandbox/1uDQVocZvioVyazfq6TLAx-img-3_1770065599000_na1fn_YXV0aG9yLXdvcmtzcGFjZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZnBpbnExU0F6ZmgydVRrQlFyZVZYRS9zYW5kYm94LzF1RFFWb2NadmlvVnlhemZxNlRMQXgtaW1nLTNfMTc3MDA2NTU5OTAwMF9uYTFmbl9ZWFYwYUc5eUxYZHZjbXR6Y0dGalpRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lF2aCjU9~eEF5G8MYWrUUrEYcjrftMGqux~uwaJPgDKOLyIM2qlF64Xmcri9wtI-tyhb~0jJ7uJ8Y8FFoLAoZcrG1mlIN4geYip7atwAZ7iGDza9YNNeWThwf356sz2jObWeYARzH2ZfDSigaH~yLiX4nXx5SUrXmS~yfKHdHKxHFRtG0~O5qlFcwXy~3nMI9rZIGN19HZ1NovV8UKzuGwtVopz7yga1pC~qATG5JQX0sbJR1j7f-kRWDJ~74z1ruIondQI89BtsRB9~ogY3GWb2bAjhpuAo93zUtLTYIe1Ca5AaB7R7C6l-VbvIq8of-kaYOmHxZ09agpR-Ac7nlg__";
const WHATSAPP_MOCKUP = "https://private-us-east-1.manuscdn.com/sessionFile/fpinq1SAzfh2uTkBQreVXE/sandbox/1uDQVocZvioVyazfq6TLAx-img-4_1770065599000_na1fn_d2hhdHNhcHAtY29udmVyc2F0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZnBpbnExU0F6ZmgydVRrQlFyZVZYRS9zYW5kYm94LzF1RFFWb2NadmlvVnlhemZxNlRMQXgtaW1nLTRfMTc3MDA2NTU5OTAwMF9uYTFmbl9kMmhoZEhOaGNIQXRZMjl1ZG1WeWMyRjBhVzl1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vNblW8l2JZ-AfuRAxAyqCGbFtyp7i7WYn4LWwcwSJvizxI56WjQqQfACVstEJjqiefz9ROccBObZm40O4rVwaid4UfHxSFzlvlSiJHujYpFDCa2f8JSar3qmvJPGSUqAhMwQ-f11MJ6A~PdknZ6aIC6GNb7gXgIyZdnSTek~LgH-OND37B3dT7-QEEnJeWZ5Y~RVRyKRlS87EBUUUPnqdJ~3ce49CgZHTSsJ9LXPTivawUTpQno44jl5nCINM1ankG3rbWhPQGk4iyYutO0Vr1LYDkY18qn0cDx0hEbO1mmVLcKgxfw5cjBhKmspHuNDThaOct1RFW4hZszvqmgKEQ__";

const WHATSAPP_LINK = "https://wa.me/5551994408307?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Guia%20Atendimento%20Magn%C3%A9tico";
const CHECKOUT_LINK = "#"; // Replace with actual checkout link

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 } as const,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  Método C.A.R.E. para Clínicas
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
              >
                Chega de Clientes que{" "}
                <span className="text-primary">Somem</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-muted-foreground max-w-xl"
              >
                Descubra o método simples para lotar sua agenda com o WhatsApp e
                ter o controle do seu negócio. Transforme conversas em
                agendamentos, sem precisar de tecnologia cara ou complexa.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="gold-gradient text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href={CHECKOUT_LINK}>
                    Quero Transformar Conversas em Agendamentos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Acesso imediato</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - E-book Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:flex justify-center"
            >
              <img
                src={EBOOK_MOCKUP}
                alt="Guia Atendimento Magnético"
                className="w-full max-w-md drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* VSL Section - Placeholder for Video */}
      <section className="py-16 bg-card">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video bg-foreground/5 rounded-2xl overflow-hidden shadow-2xl border border-border">
              {/* VSL Placeholder - Replace with actual video embed */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center shadow-lg mb-4 cursor-pointer hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
                <p className="text-muted-foreground text-sm">Assista ao vídeo e descubra como transformar seu atendimento</p>
              </div>
            </div>
            <p className="text-center mt-6 text-sm text-muted-foreground">
              Vídeo de 3 minutos que vai mudar sua forma de atender
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Se isso acontece no seu atendimento,{" "}
              <span className="text-primary">esse guia é pra você</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {[
              "A pessoa chama no WhatsApp, você responde… e ela some?",
              "Você sente que precisa insistir para fechar o agendamento?",
              "Acaba cobrando menos do que gostaria para conseguir fechar?",
              "Depende de indicação ou promoção para encher a agenda?",
            ].map((pain, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-l-4 border-l-primary/50 shadow-soft hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <X className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{pain}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground">
              Não é falta de esforço.{" "}
              <span className="font-semibold text-foreground">
                É falta de um processo claro de condução no atendimento.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Method C.A.R.E. Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium mb-4">
              O MÉTODO
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Atendimento não é só responder.{" "}
              <span className="text-primary">É saber conduzir até o agendamento.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              O Atendimento Magnético é um método simples de condução de conversas,
              criado para levar até o agendamento.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                letter: "C",
                title: "Capturar Atenção",
                description:
                  "Você aprende a responder de um jeito que mantém o interesse ativo desde a primeira mensagem.",
                icon: MessageSquare,
              },
              {
                letter: "A",
                title: "Acolher com Conexão",
                description:
                  "O lead se sente seguro, entendido e confiante antes mesmo de falar em preço.",
                icon: Heart,
              },
              {
                letter: "R",
                title: "Resolver para Converter",
                description:
                  "A conversa avança naturalmente para o agendamento, sem insistência.",
                icon: Target,
              },
              {
                letter: "E",
                title: "Encantar para Fidelizar",
                description:
                  "Menos faltas, mais retorno e mais indicações.",
                icon: Sparkles,
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-white">
                        {item.letter}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12 text-lg font-medium text-foreground"
          >
            Esse método te dá controle da conversa, sem forçar venda.
          </motion.p>
        </div>
      </section>

      {/* Author Story Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src={AUTHOR_WORKSPACE}
                alt="Workspace do Alisson Rosa"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-1 lg:order-2 space-y-6"
            >
              <motion.p variants={fadeInUp} className="text-primary font-medium">
                A HISTÓRIA POR TRÁS DO MÉTODO
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold"
              >
                Como um desenvolvedor resolveu o caos do atendimento no WhatsApp
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-4 text-muted-foreground">
                <p>
                  Olá, eu sou <strong className="text-foreground">Alisson Rosa</strong>. E antes mesmo de pensar em criar um método, eu já percebia algo que me incomodava muito como cliente: a dificuldade absurda que clínicas e salões têm para se comunicar pelo WhatsApp.
                </p>
                <p>
                  Sempre que eu tentava agendar um serviço, era a mesma história: demora, confusão, falta de clareza. Muitas vezes, eu simplesmente desistia.
                </p>
                <p>
                  Com um <strong className="text-foreground">olhar técnico</strong>, de desenvolvedor, ficou claro: não era falta de organização. Era falta de uma <strong className="text-foreground">estratégia de venda</strong> e de um <strong className="text-foreground">processo claro de atendimento</strong>.
                </p>
                <p>
                  Foi assim que nasceu a <strong className="text-foreground">Agenda Magnética</strong>, uma automação de atendimento com mensagens humanizadas. Mas nem todo mundo podia investir em uma automação complexa.
                </p>
                <p>
                  Então eu fiz o óbvio: <strong className="text-foreground">extraí a essência desse sistema</strong>, transformei em um método manual e acessível, e criei o <strong className="text-foreground">Guia Atendimento Magnético</strong>.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Como é o atendimento{" "}
              <span className="text-primary">antes e depois</span> de ter um processo claro
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              A diferença não está na quantidade de mensagens. Está na condução da conversa.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* Before */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-2 border-destructive/20 bg-destructive/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-destructive">Antes</h3>
                  <ul className="space-y-4">
                    {[
                      "Responde rápido, mas a conversa esfria",
                      "Cliente pede preço e some",
                      "Precisa insistir para tentar fechar",
                      "Acaba cobrando menos",
                      "Agenda imprevisível",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* After */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-2 border-primary/30 bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Depois</h3>
                  <ul className="space-y-4">
                    {[
                      "Conversas que avançam naturalmente",
                      "Agendamentos sem insistência",
                      "Mais segurança na hora de cobrar",
                      "Menos faltas e mais retorno",
                      "Agenda previsível",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12 text-lg font-medium text-foreground"
          >
            O atendimento deixa de ser cansativo e passa a ser estratégico.
          </motion.p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Por que o atendimento influencia tanto no agendamento?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              A maioria das decisões acontece antes do preço.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { value: "75%", description: "dos clientes decidem se confiam ou não nos primeiros minutos da conversa" },
              { value: "70%", description: "das pessoas desistem quando sentem insegurança no atendimento" },
              { value: "57%", description: "preferem não comprar a ter que insistir ou negociar demais" },
              { value: "40%", description: "dos agendamentos são perdidos por falha na condução, não por preço" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center shadow-soft hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <p className="text-4xl md:text-5xl font-bold text-primary mb-3">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12 text-lg font-semibold text-foreground"
          >
            Se o atendimento não conduz, o cliente não decide.
          </motion.p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              O que você recebe ao acessar o{" "}
              <span className="text-primary">Guia do Atendimento Magnético</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Tudo pronto para aplicar no mesmo dia, mesmo sem experiência em vendas ou atendimento.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                icon: BookOpen,
                title: "Guia completo do Atendimento Magnético",
                description: "Um passo a passo claro para conduzir conversas até o agendamento, sem insistência.",
              },
              {
                icon: FileText,
                title: "Scripts prontos de WhatsApp",
                description: "Respostas organizadas para cada etapa da conversa, do primeiro contato ao fechamento.",
              },
              {
                icon: CalendarCheck,
                title: "Estratégias para reduzir faltas e sumiços",
                description: "Como confirmar, lembrar e manter o compromisso do cliente.",
              },
              {
                icon: Users,
                title: "Método aplicável a qualquer serviço",
                description: "Funciona para clínicas, profissionais liberais e atendimentos personalizados.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shadow-md">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12 text-lg font-medium text-foreground"
          >
            Você não aprende teoria. Você aprende a conduzir conversas até o agendamento.
          </motion.p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Card className="shadow-2xl border-2 border-primary/20 overflow-hidden">
                <div className="gold-gradient p-6 text-center text-white">
                  <h2 className="text-2xl font-bold mb-2">
                    Acesso Imediato ao Guia Atendimento Magnético
                  </h2>
                  <p className="opacity-90">
                    Menos do que o prejuízo de um dia com agenda vazia
                  </p>
                </div>
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <p className="text-2xl text-muted-foreground line-through">
                      R$ 127,00
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">por apenas</p>
                    <p className="text-6xl font-bold text-primary">
                      R$ 47<span className="text-2xl">,00</span>
                    </p>
                  </div>

                  <ul className="text-left space-y-3 mb-8">
                    {[
                      "Acesso vitalício",
                      "Todos os bônus inclusos",
                      "Sem mensalidade",
                      "Sem letras miúdas",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    className="w-full gold-gradient text-white font-bold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href={CHECKOUT_LINK}>
                      Quero Minha Agenda Magnética Agora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>

                  <div className="mt-6 p-4 bg-muted rounded-xl flex items-center gap-4">
                    <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                    <div className="text-left">
                      <p className="font-bold text-sm">Garantia de 7 dias incondicional</p>
                      <p className="text-xs text-muted-foreground">
                        Se não gostar, é só mandar uma mensagem e devolvemos seu dinheiro. Sem perguntas. Sem burocracia.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Talvez você esteja pensando...
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: '"Não tenho tempo para aprender isso agora."',
                  answer:
                    "O método foi feito para quem já vive na correria. Você aplica em conversas reais, enquanto atende, otimizando seu tempo desde o primeiro dia.",
                },
                {
                  question: '"Já tentei de tudo no WhatsApp e não funcionou."',
                  answer:
                    "Aqui não é sobre responder mais rápido ou falar bonito. É sobre conduzir a conversa com clareza e estratégia até o agendamento, usando um processo testado e validado.",
                },
                {
                  question: '"Isso funciona para minha área?"',
                  answer:
                    "Sim! Funciona para qualquer serviço que dependa de conversa para vender ou agendar. Clínicas de estética, consultórios, profissionais liberais e atendimentos personalizados – o método C.A.R.E. é universal.",
                },
                {
                  question: '"E se eu não gostar?"',
                  answer:
                    "Você tem 7 dias de garantia incondicional. Se o Guia Atendimento Magnético não fizer sentido para você, é só pedir o reembolso. Simples assim, sem burocracia.",
                },
                {
                  question: '"Como vou receber o e-book?"',
                  answer:
                    "Após a confirmação do pagamento, você receberá acesso imediato ao e-book em formato PDF, que poderá ser baixado e acessado em qualquer dispositivo (computador, tablet, celular).",
                },
                {
                  question: '"Preciso de algum software específico para usar os scripts?"',
                  answer:
                    "Não! O método foi desenvolvido para ser aplicado diretamente no WhatsApp Business, utilizando as ferramentas que você já tem. Não é necessário nenhum software adicional ou complexo.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-xl border shadow-soft px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Pronto para parar de perder agendamentos e ter uma{" "}
              <span className="text-primary">agenda previsível</span>?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
              Acesso imediato com garantia total de 7 dias. Ou você ama, ou devolvemos seu dinheiro sem burocracia.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                className="gold-gradient text-white font-bold text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={CHECKOUT_LINK}>
                  Quero Minha Agenda Magnética Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-card border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-display text-xl font-bold text-primary mb-1">
                Guia Atendimento Magnético
              </p>
              <p className="text-sm text-muted-foreground">
                Transforme conversas em agendamentos
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">(51) 99440-8307</span>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Alisson Rosa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

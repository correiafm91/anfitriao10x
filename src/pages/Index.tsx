
import { motion } from "framer-motion";
import { ArrowRight, Home, TrendingUp, Users, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ProfitabilityChart from "@/components/ProfitabilityChart";
import OccupancyChart from "@/components/OccupancyChart";
import StepsSection from "@/components/StepsSection";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Home className="w-4 h-4 inline-block mr-2" />
            Marketing Imobiliário Especializado
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-left">
            <span className="text-gray-200">
              <TextGenerateEffect words="Feche 10x mais" />
            </span>
            <br />
            <span className="text-primary font-bold">
              <TextGenerateEffect words="clientes imobiliários" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            Estratégias de <span className="text-primary font-bold">marketing imobiliário</span> que convertem leads em vendas. Nossa consultoria especializada aumenta seu faturamento com técnicas comprovadas.{" "}
            <span className="text-white">Aumento médio de 300% nas vendas.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start mb-8"
          >
            <Button size="lg" className="button-gradient">
              Quero Vender Mais Imóveis
            </Button>
            <Button size="lg" variant="link" className="text-white">
              Ver Resultados <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>+300% em vendas médias</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>+100 corretores atendidos</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" />
              <span>4.9/5 de satisfação</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Garantia de 30 dias</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <Card className="glass rounded-xl overflow-hidden p-8 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">10x</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Dashboard Corretor 10x
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-gray-400">Vendas</span>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">+300%</div>
                  <div className="text-sm text-gray-400">Aumento médio</div>
                </div>
                
                <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="text-sm text-gray-400">Conversão</span>
                  </div>
                  <div className="text-3xl font-bold text-orange-500 mb-1">85%</div>
                  <div className="text-sm text-gray-400">Taxa leads</div>
                </div>
                
                <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Star className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-gray-400">Avaliação</span>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">4.9★</div>
                  <div className="text-sm text-gray-400">Nota média</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.section>

      {/* Charts Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Resultados <span className="text-primary">Comprovados</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja como nossos clientes multiplicaram suas vendas imobiliárias
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ProfitabilityChart />
          <OccupancyChart />
        </div>
      </section>

      {/* Steps Section */}
      <StepsSection />

      {/* Contact Form Section */}
      <div id="contact" className="bg-black">
        <ContactForm />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-black">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para <span className="text-primary">10x</span> sua receita?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de corretores que já multiplicaram suas vendas com nossas estratégias.
          </p>
          <Button size="lg" className="button-gradient">
            Começar Agora - Consulta Gratuita
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            ✓ Sem compromisso ✓ Análise gratuita ✓ Resultados em 30 dias
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;


import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Search, FileText, TrendingUp, Star, Users, Target } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Análise Completa",
    description: "Fazemos uma análise detalhada do seu anúncio atual, preços, fotos e concorrência local.",
    icon: Search,
    color: "from-primary/20 to-primary/5"
  },
  {
    number: "02",
    title: "Otimização do Anúncio",
    description: "Reformulamos título, descrição e amenidades para aumentar a visibilidade e atratividade.",
    icon: FileText,
    color: "from-orange-500/20 to-orange-500/5"
  },
  {
    number: "03",
    title: "Estratégia de Preços",
    description: "Implementamos precificação dinâmica baseada em demanda, sazonalidade e eventos locais.",
    icon: TrendingUp,
    color: "from-primary/20 to-primary/5"
  },
  {
    number: "04",
    title: "Melhoria das Avaliações",
    description: "Criamos estratégias para aumentar as avaliações positivas e melhorar sua reputação.",
    icon: Star,
    color: "from-orange-500/20 to-orange-500/5"
  },
  {
    number: "05",
    title: "Marketing Digital",
    description: "Desenvolvemos campanhas de marketing para aumentar a visibilidade da sua propriedade.",
    icon: Users,
    color: "from-primary/20 to-primary/5"
  },
  {
    number: "06",
    title: "Monitoramento e Resultados",
    description: "Acompanhamos os resultados e fazemos ajustes contínuos para maximizar sua receita.",
    icon: Target,
    color: "from-orange-500/20 to-orange-500/5"
  }
];

const StepsSection = () => {
  return (
    <section className="container px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Nosso <span className="text-primary">Método</span> Comprovado
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Siga nosso processo passo a passo para transformar sua propriedade em uma máquina de receita
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-black/40 backdrop-blur-xl border-white/5 hover:border-primary/20 transition-all duration-300 h-full relative">
              {/* Step Number Badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-white">
                {step.number}
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;

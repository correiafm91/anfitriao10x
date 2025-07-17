
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Nossos clientes começam a ver um aumento nas reservas entre 15-30 dias após a implementação de nossas estratégias. O crescimento médio é de 300% no primeiro trimestre."
  },
  {
    question: "Vocês trabalham com qualquer tipo de propriedade?",
    answer: "Sim! Trabalhamos com apartamentos, casas, pousadas, chalés e qualquer tipo de acomodação. Cada propriedade recebe uma estratégia personalizada baseada em suas características únicas."
  },
  {
    question: "Como funciona a otimização de preços?",
    answer: "Utilizamos algoritmos avançados que analisam mais de 50 variáveis do mercado em tempo real, incluindo eventos locais, sazonalidade, concorrência e demanda, ajustando seus preços automaticamente para maximizar a receita."
  },
  {
    question: "Preciso ter experiência como anfitrião?",
    answer: "Não! Nosso método funciona tanto para iniciantes quanto para anfitriões experientes. Fornecemos todo o suporte necessário, desde a criação do anúncio até a gestão completa da propriedade."
  },
  {
    question: "Qual é a garantia de resultados?",
    answer: "Oferecemos garantia de 30 dias. Se você não estiver satisfeito com os resultados, devolvemos 100% do valor investido, sem perguntas."
  },
  {
    question: "Qual é a duração do serviço?",
    answer: "Nosso projeto Anfitrião 10x é uma consultoria que dura de 2 a 3 semanas. Durante esse período, implementamos todas as estratégias necessárias para otimizar sua propriedade e maximizar suas receitas no Airbnb."
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossa consultoria de marketing para Airbnb
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="glass glass-hover rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-medium text-white pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <Minus className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

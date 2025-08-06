
"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Proprietário de Apartamento - Copacabana",
    initial: "CS",
    content: "Migrei do aluguel tradicional para temporada e em 3 meses triplicou minha renda! O Imóvel 10x me ensinou tudo. Saí de R$ 2.500 para R$ 8.500 mensais.",
    rating: 5,
    result: "+340% renda"
  },
  {
    name: "Marina Santos",
    role: "Proprietária de Casa - Gramado",
    initial: "MS",
    content: "Tinha uma casa parada há meses no aluguel tradicional. Com a consultoria, transformei em pousada de temporada. Agora tá sempre lotada!",
    rating: 5,
    result: "+280% ocupação"
  },
  {
    name: "Roberto Oliveira",
    role: "Investidor Imobiliário",
    initial: "RO",
    content: "Tenho 4 imóveis e todos migraram para temporada com ajuda do Imóvel 10x. Minha renda mensal passou de R$ 12.000 para R$ 48.000. Incrível!",
    rating: 5,
    result: "+400% receita"
  },
  {
    name: "Ana Costa",
    role: "Proprietária Iniciante",
    initial: "AC",
    content: "Herdei um apartamento e não sabia o que fazer. O time me guiou na migração para Airbnb. Agora tenho renda passiva garantida todo mês!",
    rating: 5,
    result: "+220% rentabilidade"
  },
  {
    name: "Paulo Mendes",
    role: "Dono de Chalé em Campos do Jordão",
    initial: "PM",
    content: "Já alugava por temporada, mas com as estratégias do Imóvel 10x consegui otimizar preços e ocupação. Os resultados superaram expectativas!",
    rating: 5,
    result: "+180% lucro"
  },
  {
    name: "Fernanda Lima",
    role: "Proprietária de Cobertura - Ipanema",
    initial: "FL",
    content: "Estava no vermelho com aluguel tradicional. Em 2 meses no temporada já recuperei o investimento. O suporte é excepcional!",
    rating: 5,
    result: "+450% ROI"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">
            Proprietários que <span className="text-primary">Multiplicaram</span> sua Renda
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja os depoimentos reais dos nossos clientes
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-primary/20 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {testimonial.initial}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-white/70 leading-relaxed mb-4">
                    {testimonial.content}
                  </p>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                    <p className="text-primary font-bold text-center">
                      {testimonial.result}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-primary/20 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {testimonial.initial}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-white/70 leading-relaxed mb-4">
                    {testimonial.content}
                  </p>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                    <p className="text-primary font-bold text-center">
                      {testimonial.result}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

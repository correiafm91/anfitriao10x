
"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Proprietário de Apartamento no Ipanema",
    initial: "CS",
    content: "Em 3 meses minha receita triplicou! O Anfitrião 10x transformou meu apartamento em uma máquina de fazer dinheiro. A taxa de ocupação passou de 40% para 95%.",
    rating: 5,
    result: "+300% receita"
  },
  {
    name: "Marina Santos",
    role: "Anfitriã de Pousada em Búzios",
    initial: "MS",
    content: "Antes eu tinha dor de cabeça com preços e comunicação. Agora tudo é automático e minha pousada está sempre lotada. Melhor investimento que já fiz!",
    rating: 5,
    result: "+250% ocupação"
  },
  {
    name: "Roberto Oliveira",
    role: "Investidor Imobiliário",
    initial: "RO",
    content: "Tenho 5 propriedades no Airbnb e o Anfitrião 10x cuida de tudo. Minha receita passou de R$ 8.000 para R$ 32.000 mensais. Equipe sensacional!",
    rating: 5,
    result: "+400% ROI"
  },
  {
    name: "Ana Costa",
    role: "Proprietária de Chalé em Gramado",
    initial: "AC",
    content: "Eu era iniciante no Airbnb e estava perdida. O time me ensinou tudo e otimizou meu anúncio. Agora tenho lista de espera de hóspedes!",
    rating: 5,
    result: "+180% reservas"
  },
  {
    name: "Paulo Mendes",
    role: "Anfitrião Superhost em Floripa",
    initial: "PM",
    content: "Já era Superhost, mas com o Anfitrião 10x consegui maximizar ainda mais meus resultados. A gestão de preços dinâmica é revolucionária!",
    rating: 5,
    result: "+150% receita"
  },
  {
    name: "Fernanda Lima",
    role: "Proprietária de Casa na Chapada",
    initial: "FL",
    content: "Saí do vermelho para o lucro em apenas 2 meses. O atendimento é impecável e os resultados falam por si só. Recomendo de olhos fechados!",
    rating: 5,
    result: "+320% lucro"
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
            Anfitriões que <span className="text-primary">Multiplicaram</span> seus Resultados
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

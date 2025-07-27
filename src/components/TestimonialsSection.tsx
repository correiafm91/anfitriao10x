
"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Corretor de Imóveis - Rio de Janeiro",
    initial: "CS",
    content: "Em 3 meses minhas vendas triplicaram! O Corretor 10x transformou minha abordagem de marketing. Agora fecho 15 imóveis por mês contra 5 antes.",
    rating: 5,
    result: "+300% vendas"
  },
  {
    name: "Marina Santos",
    role: "Corretora Especialista em Luxo",
    initial: "MS",
    content: "Antes eu tinha dificuldade para gerar leads qualificados. Agora minha agenda está sempre cheia e fecho negócios de alto valor. Melhor investimento que já fiz!",
    rating: 5,
    result: "+250% comissões"
  },
  {
    name: "Roberto Oliveira",
    role: "Corretor Autônomo",
    initial: "RO",
    content: "Trabalho há 10 anos no mercado e o Corretor 10x revolucionou meus resultados. Minha comissão passou de R$ 15.000 para R$ 60.000 mensais. Equipe sensacional!",
    rating: 5,
    result: "+400% faturamento"
  },
  {
    name: "Ana Costa",
    role: "Corretora Iniciante",
    initial: "AC",
    content: "Eu era nova no mercado imobiliário e estava perdida. O time me ensinou todas as estratégias e otimizou meu perfil. Agora tenho fila de clientes esperando!",
    rating: 5,
    result: "+180% contratos"
  },
  {
    name: "Paulo Mendes",
    role: "Corretor Top de Vendas",
    initial: "PM",
    content: "Já era top nas vendas, mas com o Corretor 10x consegui maximizar ainda mais meus resultados. As estratégias de captação são revolucionárias!",
    rating: 5,
    result: "+150% receita"
  },
  {
    name: "Fernanda Lima",
    role: "Corretora de Imóveis Comerciais",
    initial: "FL",
    content: "Saí de 2 vendas para 12 vendas mensais em apenas 2 meses. O atendimento é impecável e os resultados falam por si só. Recomendo de olhos fechados!",
    rating: 5,
    result: "+500% lucro"
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
            Corretores que <span className="text-primary">Multiplicaram</span> seus Resultados
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

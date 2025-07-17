
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Enviado! Aguarde a nossa equipe.",
      description: "Entraremos em contato em até 24 horas.",
    });
  };

  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          Solicite sua{" "}
          <span className="text-gradient font-medium">Consultoria</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas
        </motion.p>
      </div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="glass rounded-xl p-8"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <Input 
                  placeholder="Seu nome completo"
                  className="bg-black/50 border-white/10 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-black/50 border-white/10 text-white placeholder:text-gray-400"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <Input 
                  placeholder="(11) 99999-9999"
                  className="bg-black/50 border-white/10 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Cidade</label>
                <Input 
                  placeholder="Sua cidade"
                  className="bg-black/50 border-white/10 text-white placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tipo de Propriedade</label>
              <Input 
                placeholder="Apartamento, casa, pousada, etc."
                className="bg-black/50 border-white/10 text-white placeholder:text-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <Textarea 
                placeholder="Conte-nos sobre sua propriedade e seus objetivos..."
                className="bg-black/50 border-white/10 text-white placeholder:text-gray-400 min-h-[120px]"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="button-gradient w-full" 
              size="lg"
              disabled={isSubmitted}
            >
              {isSubmitted ? "Enviado!" : "Solicitar Consultoria Gratuita"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;

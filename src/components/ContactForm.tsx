
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
          className="glass rounded-xl p-8 text-center"
        >
          <p className="text-lg text-gray-200 mb-8">
            Clique no botão abaixo para preencher o formulário e nossa equipe entrará em contato em até 24 horas
          </p>

          <Button 
            onClick={handleSubmit}
            className="button-gradient" 
            size="lg"
            disabled={isSubmitted}
          >
            {isSubmitted ? "Enviado!" : "Solicitar Consultoria Gratuita"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">Anfitrião 10x</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-primary transition-colors">
              Início
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors">
              Resultados
            </a>
            <a href="#contact" className="text-white hover:text-primary transition-colors">
              Contato
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="button-gradient">
              Consultoria Gratuita
            </Button>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                Início
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                Resultados
              </a>
              <a href="#contact" className="text-white hover:text-primary transition-colors">
                Contato
              </a>
              <Button className="button-gradient w-full">
                Consultoria Gratuita
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

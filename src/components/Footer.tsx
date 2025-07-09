import React from 'react';
import { Droplets, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-2 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                AquaTerre
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Pionnier de l'aquaponie au Mali, nous transformons l'agriculture urbaine 
              avec des solutions durables et innovantes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#history" className="text-gray-400 hover:text-white transition-colors">Histoire</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Produits</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Nos services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Installation sur mesure</span></li>
              <li><span className="text-gray-400">Formation complète</span></li>
              <li><span className="text-gray-400">Maintenance & SAV</span></li>
              <li><span className="text-gray-400">Support technique</span></li>
              <li><span className="text-gray-400">Formation collective</span></li>
              <li><span className="text-gray-400">Consulting expert</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-400">Bamako, Mali</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+223 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">contact@aquaterre.ml</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-emerald-400">Horaires d'ouverture</h4>
              <div className="text-sm text-gray-400">
                <p>Lun - Ven: 8h00 - 18h00</p>
                <p>Samedi: 9h00 - 15h00</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 AquaTerre. Tous droits réservés.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Conditions d'utilisation
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Mentions légales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bannière de mission */}
        <div className="mt-8 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl p-6 text-center">
          <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Notre Mission
          </h4>
          <p className="text-gray-300 text-sm">
            Contribuer activement à une transition écologique et alimentaire au Mali, 
            en offrant une solution agricole innovante, inclusive, économique et durable.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
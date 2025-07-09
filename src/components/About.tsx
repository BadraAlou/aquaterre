import React from 'react';
import { Target, Users, Leaf, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              À propos d'AquaTerre
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pionnier de l'aquaponie au Mali, nous transformons l'agriculture urbaine 
            avec des solutions durables et innovantes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/4503271/pexels-photo-4503271.jpeg?auto=compress&cs=tinysrgb&h=400"
              alt="Système aquaponique moderne"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Notre Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              AquaTerre est une jeune entreprise malienne portée par une équipe pluridisciplinaire 
              passionnée par l'agriculture durable, la technologie verte et l'impact social. 
              Notre mission est de concevoir, installer et assurer le suivi de systèmes aquaponiques 
              sur mesure, pour une clientèle variée : particuliers et ONG.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nous voulons allier innovation technologique et enracinement local, en tenant compte 
              des réalités sociales, économiques et culturelles du Mali. Le projet ne se limite pas 
              à vendre un produit : il s'agit de créer une nouvelle culture de l'autoproduction 
              alimentaire durable.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-3 rounded-full w-fit mx-auto mb-4">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Vision</h4>
            <p className="text-gray-600">Devenir la référence nationale en aquaponie et micro-agriculture durable</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-full w-fit mx-auto mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Impact Social</h4>
            <p className="text-gray-600">Créer des emplois et stimuler l'entrepreneuriat local</p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-3 rounded-full w-fit mx-auto mb-4">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Écologie</h4>
            <p className="text-gray-600">Solutions durables pour l'environnement et le climat</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-3 rounded-full w-fit mx-auto mb-4">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Excellence</h4>
            <p className="text-gray-600">Formation et accompagnement personnalisé</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Pourquoi choisir AquaTerre ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <h4 className="text-xl font-bold mb-2">Expertise locale</h4>
              <p className="opacity-90">Adaptation aux conditions climatiques et culturelles du Mali</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Accompagnement complet</h4>
              <p className="opacity-90">Formation, installation, maintenance et suivi personnalisé</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Innovation accessible</h4>
              <p className="opacity-90">Technologie avancée rendue simple et abordable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
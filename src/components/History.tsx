import React from 'react';
import { Calendar, Globe, TrendingUp } from 'lucide-react';

const History = () => {
  const timelineEvents = [
    {
      period: "10ème siècle",
      title: "Les Chinampas Aztèques",
      description: "Les Aztèques développent des systèmes de cultures flottantes au Mexique, ancêtres de l'aquaponie moderne.",
      region: "Mexique"
    },
    {
      period: "Époque traditionnelle",
      title: "Riziculture intégrée",
      description: "En Asie (Chine, Indonésie), développement de systèmes traditionnels d'élevage de poissons dans les rizières.",
      region: "Asie"
    },
    {
      period: "Années 1970",
      title: "Théorisation moderne",
      description: "Scientifiques américains et australiens théorisent et automatisent le concept d'aquaponie.",
      region: "États-Unis, Australie"
    },
    {
      period: "Années 2000",
      title: "Développement en Afrique",
      description: "L'aquaponie commence à se développer en Afrique du Sud, au Kenya et au Ghana.",
      region: "Afrique"
    },
    {
      period: "Années 2010",
      title: "Arrivée au Sahel",
      description: "Introduction dans la zone sahélienne avec des projets pilotes pour la sécurité alimentaire.",
      region: "Mali, Niger, Burkina Faso"
    },
    {
      period: "2024",
      title: "AquaTerre Mali",
      description: "Lancement d'AquaTerre pour démocratiser l'aquaponie au Mali.",
      region: "Mali"
    }
  ];

  return (
    <section id="history" className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Histoire de l'Aquaponie
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un voyage à travers les siècles, des anciennes civilisations aux innovations modernes
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center space-x-3 mb-4">
                      <Calendar className="h-5 w-5 text-emerald-500" />
                      <span className="text-emerald-600 font-semibold text-lg">{event.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-blue-500" />
                      <span className="text-blue-600 font-medium">{event.region}</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full shadow-lg"></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-3 rounded-full w-fit mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Croissance mondiale</h3>
            <p className="text-gray-600">L'aquaponie connaît une croissance exponentielle dans le monde entier</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-full w-fit mx-auto mb-4">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Adaptation locale</h3>
            <p className="text-gray-600">Chaque région adapte l'aquaponie à ses conditions spécifiques</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-3 rounded-full w-fit mx-auto mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Avenir prometteur</h3>
            <p className="text-gray-600">L'aquaponie représente l'avenir de l'agriculture durable</p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">L'Aquaponie au Mali aujourd'hui</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-emerald-600 mb-3">Défis actuels</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Manque de sensibilisation et de formation</li>
                <li>• Coût initial relativement élevé</li>
                <li>• Absence de chaîne d'approvisionnement locale</li>
                <li>• Manque de réglementation claire</li>
                <li>• Besoin de données locales</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-600 mb-3">Opportunités</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Adaptation au climat sahélien</li>
                <li>• Réduction de la dépendance alimentaire</li>
                <li>• Création d'emplois qualifiés</li>
                <li>• Éducation environnementale</li>
                <li>• Stimulation de l'entrepreneuriat local</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
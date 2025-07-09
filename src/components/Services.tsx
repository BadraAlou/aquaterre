import React from 'react';
import { Settings, BookOpen, Wrench, Phone, Users, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Installation sur mesure",
      description: "Conception et installation de systèmes aquaponiques adaptés à votre espace et vos besoins",
      features: ["Évaluation du site", "Design personnalisé", "Installation complète", "Tests de fonctionnement"],
      color: "from-emerald-500 to-blue-500"
    },
    {
      icon: BookOpen,
      title: "Formation complète",
      description: "Ateliers pratiques et formation théorique pour maîtriser votre système aquaponique",
      features: ["Guides illustrés", "Vidéos tutoriels", "Formation en langues locales", "Certification"],
      color: "from-blue-500 to-teal-500"
    },
    {
      icon: Wrench,
      title: "Maintenance & SAV",
      description: "Service après-vente et maintenance pour garantir la performance de votre installation",
      features: ["Visites régulières", "Diagnostic technique", "Réparations", "Pièces de rechange"],
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: Phone,
      title: "Support technique",
      description: "Assistance téléphonique et suivi personnalisé pour répondre à toutes vos questions",
      features: ["Hotline WhatsApp", "Support SMS", "Consultation à distance", "Urgences 24/7"],
      color: "from-emerald-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Formation collective",
      description: "Programmes de formation pour groupes, écoles et organisations",
      features: ["Ateliers de groupe", "Partenariats éducatifs", "Formation ONG", "Sensibilisation communautaire"],
      color: "from-blue-500 to-teal-500"
    },
    {
      icon: Award,
      title: "Consulting expert",
      description: "Conseil stratégique pour projets aquaponiques commerciaux et institutionnels",
      features: ["Étude de faisabilité", "Plan d'affaires", "Optimisation rendement", "Accompagnement réglementaire"],
      color: "from-teal-500 to-emerald-500"
    }
  ];

  const packages = [
    {
      name: "Package Starter",
      price: "500 000",
      description: "Parfait pour débuter en aquaponie",
      features: [
        "Système small (1-2 personnes)",
        "Installation complète",
        "Formation de base (4h)",
        "1 mois de suivi",
        "Manuel utilisateur",
        "Garantie 6 mois"
      ],
      popular: false
    },
    {
      name: "Package Familial",
      price: "1 200 000",
      description: "Solution idéale pour une famille",
      features: [
        "Système medium (3-5 personnes)",
        "Installation complète",
        "Formation avancée (8h)",
        "3 mois de suivi",
        "Manuel + vidéos",
        "Garantie 12 mois",
        "2 visites de maintenance"
      ],
      popular: true
    },
    {
      name: "Package Professionnel",
      price: "2 500 000",
      description: "Pour les projets commerciaux",
      features: [
        "Système big (6+ personnes)",
        "Installation + optimisation",
        "Formation expert (16h)",
        "6 mois de suivi",
        "Documentation complète",
        "Garantie 24 mois",
        "Maintenance mensuelle",
        "Support prioritaire"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Nos Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un accompagnement complet pour votre réussite en aquaponie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className={`bg-gradient-to-r ${service.color} p-3 rounded-lg w-fit mb-4`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Nos Packages
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${pkg.popular ? 'ring-4 ring-emerald-500 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Plus populaire
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h4>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">{pkg.price} <span className="text-lg">FCFA</span></div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:from-emerald-600 hover:to-blue-600' 
                    : 'border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white'
                }`}>
                  Choisir ce package
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Besoin d'un service personnalisé ?</h3>
          <p className="text-lg opacity-90 mb-6">
            Contactez-nous pour une solution sur mesure adaptée à vos besoins spécifiques
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
            Demander un devis
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
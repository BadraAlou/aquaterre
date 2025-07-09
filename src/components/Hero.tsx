import React from 'react';
import { ArrowRight, Leaf, Fish, Droplets } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-3 rounded-full animate-pulse">
              <Droplets className="h-8 w-8 text-white" />
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-full animate-pulse delay-100">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-3 rounded-full animate-pulse delay-200">
              <Fish className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              AquaTerre
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Révolutionnez votre agriculture avec l'aquaponie - 
            <span className="text-emerald-600 font-semibold"> la solution durable</span> pour une production 
            alimentaire innovante au Mali
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>Découvrir nos solutions</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105">
              Voir nos produits
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-3 rounded-lg w-fit mx-auto mb-4">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Économie d'eau</h3>
              <p className="text-gray-600">95% d'économie d'eau par rapport à l'agriculture traditionnelle</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-lg w-fit mx-auto mb-4">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Production continue</h3>
              <p className="text-gray-600">Récoltes toute l'année, même en saison sèche</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-3 rounded-lg w-fit mx-auto mb-4">
                <Fish className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Double production</h3>
              <p className="text-gray-600">Poissons et légumes dans un même système</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
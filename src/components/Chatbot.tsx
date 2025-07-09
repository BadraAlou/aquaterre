import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const Chatbot = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel d'AquaTerre. Comment puis-je vous aider aujourd'hui ?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickResponses = [
    "Prix des systèmes aquaponiques",
    "Comment fonctionne l'aquaponie ?",
    "Services d'installation",
    "Formation disponible",
    "Maintenance et SAV",
    "Demander un devis"
  ];

  const botResponses = {
    "prix": "Nos systèmes aquaponiques varient selon la taille :\n• Package Starter : 500 000 FCFA\n• Package Familial : 1 200 000 FCFA\n• Package Professionnel : 2 500 000 FCFA\n\nTous incluent installation, formation et garantie !",
    "fonctionnement": "L'aquaponie combine l'élevage de poissons et la culture de légumes :\n• Les poissons produisent des déchets riches en nutriments\n• Les bactéries transforment ces déchets en engrais naturel\n• Les plantes absorbent les nutriments et purifient l'eau\n• L'eau propre retourne aux poissons\n\nC'est un cycle naturel parfait !",
    "installation": "Nos services d'installation incluent :\n• Évaluation de votre site\n• Design personnalisé\n• Installation complète\n• Tests de fonctionnement\n• Formation pratique\n• Garantie et support\n\nNos techniciens se déplacent partout à Bamako !",
    "formation": "Nous proposons plusieurs types de formation :\n• Formation de base (4h) - Incluse dans le package Starter\n• Formation avancée (8h) - Package Familial\n• Formation expert (16h) - Package Professionnel\n• Guides en langues locales\n• Vidéos tutoriels\n• Support continu",
    "maintenance": "Notre service après-vente comprend :\n• Visites régulières\n• Diagnostic technique\n• Réparations incluses\n• Pièces de rechange\n• Hotline WhatsApp\n• Support d'urgence 24/7\n\nVotre système fonctionne toujours parfaitement !",
    "devis": "Pour un devis personnalisé :\n• Décrivez votre projet\n• Indiquez votre espace disponible\n• Précisez vos objectifs\n• Mentionnez votre budget\n\nNous vous contacterons sous 24h avec une proposition détaillée !",
    "default": "Je comprends votre question ! Pour une réponse précise, je vous recommande de :\n• Utiliser les boutons de réponse rapide ci-dessous\n• Contacter notre équipe au +223 XX XX XX XX\n• Envoyer un email à contact@aquaterre.ml\n\nNotre équipe sera ravie de vous aider !"
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('prix') || message.includes('coût') || message.includes('tarif')) {
      return botResponses.prix;
    } else if (message.includes('fonctionnement') || message.includes('comment') || message.includes('marche')) {
      return botResponses.fonctionnement;
    } else if (message.includes('installation') || message.includes('installer')) {
      return botResponses.installation;
    } else if (message.includes('formation') || message.includes('apprendre') || message.includes('former')) {
      return botResponses.formation;
    } else if (message.includes('maintenance') || message.includes('sav') || message.includes('réparation')) {
      return botResponses.maintenance;
    } else if (message.includes('devis') || message.includes('devis') || message.includes('estimation')) {
      return botResponses.devis;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');
      setIsTyping(true);

      // Simulate bot response delay
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: getBotResponse(inputMessage),
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleQuickResponse = (response) => {
    setInputMessage(response);
    handleSendMessage();
  };

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-4 rounded-full shadow-2xl hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Assistant AquaTerre</h3>
            <p className="text-xs opacity-90">En ligne</p>
          </div>
        </div>
        <button
          onClick={onToggle}
          className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`p-2 rounded-full ${message.sender === 'user' ? 'bg-emerald-500' : 'bg-blue-500'}`}>
                {message.sender === 'user' ? (
                  <User className="h-4 w-4 text-white" />
                ) : (
                  <Bot className="h-4 w-4 text-white" />
                )}
              </div>
              <div
                className={`p-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-emerald-100' : 'text-gray-500'}`}>
                  {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2">
              <div className="p-2 rounded-full bg-blue-500">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-gray-100 p-3 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick responses */}
      <div className="p-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 mb-2">Réponses rapides :</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {quickResponses.slice(0, 3).map((response, index) => (
            <button
              key={index}
              onClick={() => handleQuickResponse(response)}
              className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
            >
              {response}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Tapez votre message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-2 rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Filter } from 'lucide-react';

const Products = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Cuve bac à poisson",
      price: 200000,
      quantity: 1,
      category: "cuves",
      image: "https://images.pexels.com/photos/4503271/pexels-photo-4503271.jpeg?auto=compress&cs=tinysrgb&h=300",
      description: "Cuve spécialisée pour l'élevage de poissons en aquaponie"
    },
    {
      id: 2,
      name: "Bac de culture",
      price: 40000,
      quantity: 1,
      category: "cuves",
      image: "https://images.pexels.com/photos/4503270/pexels-photo-4503270.jpeg?auto=compress&cs=tinysrgb&h=300",
      description: "Bac optimisé pour la culture des légumes"
    },
    {
      id: 3,
      name: "Média de culture (argile)",
      price: 75000,
      quantity: 1,
      category: "media",
      image: "https://images.pexels.com/photos/4503269/pexels-photo-4503269.jpeg?auto=compress&cs=tinysrgb&h=300",
      description: "Billes d'argile expansée pour la culture hydroponique"
    },
    {
      id: 4,
      name: "Pompe à eau",
      price: 40000,
      quantity: 2,
      category: "pompes",
      image: "https://images.pexels.com/photos/4503268/pexels-photo-4503268.jpeg?auto=compress&cs=tinysrgb&h=300",
      description: "Pompe haute performance pour circulation d'eau"
    },
    {
      id: 5,
      name: "Pompe à air + diffuseur",
      price: 35000,
      quantity: 2,
      category: "pompes",
      image: "https://images.pexels.com/photos/4503267/pexels-photo-4503267.jpeg?auto=compress&cs=tinysrgb&h=300",
      description: "Système d'aération pour l'oxygénation de l'eau"
    },
    {
      id: 6,
      name: "Testeur d'eau",
      price: 25000,
      quantity: 1,
      category: "monitoring",
      image: "https://images.pexels.com/photos/4503266/pexels-photo-4503266.jpeg?auto=compress&cs=tinysrgb&h=300",
      description: "Kit de test pH, ammoniaque, nitrites, nitrates"
    },
    {
      id: 7,
      name: "Chauffage",
      price: 40000,
      quantity: 2,
      category: "equipements",
      image: "https://images.pexels.com/photos/4503265/pexels-photo-4503265.jpeg?auto=compress&cs=tinysrgb&h=300",
      description: "Chauffage thermostaté pour aquarium"
    },
    {
      id: 8,
      name: "Éclairage",
      price: 80000,
      quantity: 2,
      category: "equipements",
      image: "https://images.pexels.com/photos/4503264/pexels-photo-4503264.jpeg?auto=compress&cs=tinysrgb&h=300",
      description: "Éclairage LED full spectrum pour croissance"
    },
    {
      id: 9,
      name: "Tuyaux, raccords, minuteur, flotteurs",
      price: 70000,
      quantity: 1,
      category: "accessoires",
      image: "https://images.pexels.com/photos/4503263/pexels-photo-4503263.jpeg?auto=compress&cs=tinysrgb&h=300",
      description: "Kit complet de plomberie et accessoires"
    },
    {
      id: 10,
      name: "IBC",
      price: 80000,
      quantity: 1,
      category: "cuves",
      image: "https://images.pexels.com/photos/4503262/pexels-photo-4503262.jpeg?auto=compress&cs=tinysrgb&h=300",
      description: "Container IBC 1000L pour système aquaponique"
    },
    {
      id: 11,
      name: "Épuisette",
      price: 10000,
      quantity: 3,
      category: "accessoires",
      image: "https://images.pexels.com/photos/4503261/pexels-photo-4503261.jpeg?auto=compress&cs=tinysrgb&h=300",
      description: "Épuisette fine pour manipulation des poissons"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'cuves', name: 'Cuves et bacs' },
    { id: 'pompes', name: 'Pompes' },
    { id: 'equipements', name: 'Équipements' },
    { id: 'monitoring', name: 'Monitoring' },
    { id: 'media', name: 'Média de culture' },
    { id: 'accessoires', name: 'Accessoires' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Notre Boutique
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tous les équipements nécessaires pour votre système aquaponique
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-gray-600">
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filtrer par catégorie:</span>
          </div>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Panier flottant */}
        {cart.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-white rounded-2xl shadow-2xl p-4 max-w-sm z-50 border border-gray-200">
            <h3 className="font-bold text-lg mb-3 text-gray-800">Panier ({cart.length})</h3>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 truncate">{item.name}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center hover:bg-emerald-600"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total:</span>
                <span className="text-emerald-600">{formatPrice(getTotalPrice())} FCFA</span>
              </div>
              <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-2 rounded-lg font-semibold mt-3 hover:from-emerald-600 hover:to-blue-600 transition-all duration-300">
                Commander
              </button>
            </div>
          </div>
        )}

        {/* Grille de produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-emerald-600">
                    {formatPrice(product.price)} <span className="text-sm">FCFA</span>
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                    Qté: {product.quantity}
                  </span>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Ajouter au panier</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total des produits */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Kit Complet Aquaponique
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Kit Standard - Prix total</h4>
              <div className="space-y-3">
                {products.map(product => (
                  <div key={product.id} className="flex justify-between items-center">
                    <span className="text-gray-600">{product.name} x{product.quantity}</span>
                    <span className="font-semibold">{formatPrice(product.price * product.quantity)} FCFA</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center text-2xl font-bold">
                  <span>Total Kit:</span>
                  <span className="text-emerald-600">
                    {formatPrice(products.reduce((total, product) => total + (product.price * product.quantity), 0))} FCFA
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Pourquoi choisir notre kit ?</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-600">Équipements de qualité professionnelle</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Compatibilité garantie entre tous les éléments</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-600">Support technique inclus</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-600">Garantie sur tous les équipements</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 rounded-lg font-semibold mt-6 hover:from-emerald-600 hover:to-blue-600 transition-all duration-300">
                Commander le kit complet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
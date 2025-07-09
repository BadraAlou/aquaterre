# AquaTerre - Site Web Django

Site web complet pour l'entreprise AquaTerre, spécialisée dans l'aquaponie au Mali.

## Fonctionnalités

### Site Principal
- **Page d'accueil** : Présentation de l'entreprise et des services
- **À propos** : Histoire et mission d'AquaTerre
- **Histoire de l'aquaponie** : Timeline interactive
- **Services** : Packages et services proposés
- **Contact** : Formulaire de contact avec validation

### Boutique E-commerce
- **Catalogue produits** : Tous les équipements aquaponiques
- **Filtrage par catégorie** : Navigation facile
- **Panier d'achat** : Gestion des commandes
- **Système de commande** : Processus complet
- **Administration** : Gestion des produits et commandes

### Chatbot Intelligent
- **Assistant virtuel** : Réponses automatiques
- **Base de connaissances** : FAQ sur l'aquaponie
- **Historique des conversations** : Sauvegarde en base
- **Interface moderne** : Design responsive

## Installation

### Prérequis
- Python 3.8+
- Django 4.2+
- Pillow (pour les images)

### Étapes d'installation

1. **Créer un environnement virtuel**
```bash
python -m venv aquaterre_env
source aquaterre_env/bin/activate  # Linux/Mac
# ou
aquaterre_env\Scripts\activate  # Windows
```

2. **Installer les dépendances**
```bash
pip install -r requirements.txt
```

3. **Configurer la base de données**
```bash
python manage.py makemigrations
python manage.py migrate
```

4. **Créer un superutilisateur**
```bash
python manage.py createsuperuser
```

5. **Collecter les fichiers statiques**
```bash
python manage.py collectstatic
```

6. **Lancer le serveur de développement**
```bash
python manage.py runserver
```

## Structure du Projet

```
aquaterre/
├── aquaterre/          # Configuration Django
├── main/               # Application principale
├── boutique/           # Application e-commerce
├── chatbot/            # Application chatbot
├── templates/          # Templates HTML
├── static/             # Fichiers statiques (CSS, JS, images)
├── media/              # Fichiers uploadés
└── requirements.txt    # Dépendances Python
```

## Configuration

### Variables d'environnement
Créez un fichier `.env` à la racine :
```
SECRET_KEY=votre-clé-secrète-django
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```

### Base de données
Par défaut, le projet utilise SQLite. Pour PostgreSQL :
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'aquaterre_db',
        'USER': 'votre_utilisateur',
        'PASSWORD': 'votre_mot_de_passe',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

## Utilisation

### Administration
Accédez à `/admin/` pour gérer :
- Produits et catégories
- Commandes clients
- Messages de contact
- Conversations chatbot

### Personnalisation
- **Couleurs** : Modifiez les variables CSS dans `static/css/style.css`
- **Contenu** : Éditez les templates dans `templates/`
- **Produits** : Ajoutez via l'interface admin

## Déploiement

### Production
1. Configurez `DEBUG = False`
2. Définissez `ALLOWED_HOSTS`
3. Configurez une base de données production
4. Utilisez un serveur web (Nginx + Gunicorn)
5. Configurez les fichiers statiques

### Exemple avec Gunicorn
```bash
pip install gunicorn
gunicorn aquaterre.wsgi:application
```

## Fonctionnalités Avancées

### Chatbot
- Réponses intelligentes basées sur mots-clés
- Sauvegarde des conversations
- Interface responsive
- Réponses rapides prédéfinies

### E-commerce
- Gestion de panier persistant
- Système de commandes complet
- Filtrage et recherche produits
- Interface d'administration

### SEO et Performance
- URLs optimisées
- Meta tags configurables
- Images optimisées
- Code minifié en production

## Support

Pour toute question ou problème :
- Email : contact@aquaterre.ml
- Téléphone : +223 XX XX XX XX

## Licence

Ce projet est propriétaire à AquaTerre Mali.
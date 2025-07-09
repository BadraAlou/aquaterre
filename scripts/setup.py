#!/usr/bin/env python
"""
Script de configuration initiale pour AquaTerre
"""
import os
import sys
import django
from django.core.management import execute_from_command_line

def setup_project():
    """Configure le projet Django"""
    print("🚀 Configuration d'AquaTerre...")
    
    # Configuration Django
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'aquaterre.settings')
    django.setup()
    
    # Migrations
    print("📦 Création des migrations...")
    execute_from_command_line(['manage.py', 'makemigrations'])
    
    print("🗄️ Application des migrations...")
    execute_from_command_line(['manage.py', 'migrate'])
    
    # Données initiales
    print("📊 Chargement des données initiales...")
    try:
        execute_from_command_line(['manage.py', 'loaddata', 'fixtures/initial_data.json'])
        print("✅ Données initiales chargées avec succès")
    except Exception as e:
        print(f"⚠️ Erreur lors du chargement des données : {e}")
    
    # Collecte des fichiers statiques
    print("🎨 Collecte des fichiers statiques...")
    execute_from_command_line(['manage.py', 'collectstatic', '--noinput'])
    
    print("✅ Configuration terminée !")
    print("\n🎯 Prochaines étapes :")
    print("1. Créer un superutilisateur : python manage.py createsuperuser")
    print("2. Lancer le serveur : python manage.py runserver")
    print("3. Accéder au site : http://127.0.0.1:8000")
    print("4. Administration : http://127.0.0.1:8000/admin")

if __name__ == '__main__':
    setup_project()
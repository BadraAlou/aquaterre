from django.urls import path

from main.views import nouvelle_commande
from . import views

app_name = 'commande'
urlpatterns = [
    path('passer/<int:kit_id>/', views.passer_commande, name='passer_commande'),
    path('nouvelle/', views.nouvelle_commande, name='nouvelle_commande'),
    path('confirmation/', views.confirmation, name='confirmation'),
    path('confirmation_spe/', views.confirmation_spe, name='confirmation_spe'),
    path('', views.liste_commandes, name='liste_commandes'),
]

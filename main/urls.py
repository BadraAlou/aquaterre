from django.urls import path
from . import views



urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('history/', views.history, name='history'),
    path('services/', views.services, name='services'),
    path('contact/', views.contact, name='contact'),
    path('tutoriel/', views.tutoriel_view, name='tutoriel'),
    path('newsletter/', views.newsletter_subscribe, name='newsletter_subscribe'),
    path('create-checkout-session/', views.create_checkout_session, name='create_checkout_session'),
    path('kit_detail/<int:kit_id>/', views.kit_detail, name='kit_detail'),
]

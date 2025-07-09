from django.conf import settings
from django.db import models
from django.contrib.auth.models import User


class Contact(models.Model):
    nom = models.CharField(max_length=100)
    email = models.EmailField()
    telephone = models.CharField(max_length=20, blank=True)
    sujet = models.CharField(max_length=200)
    message = models.TextField()
    type_service = models.CharField(max_length=50, choices=[
        ('installation', 'Installation'),
        ('formation', 'Formation'),
        ('maintenance', 'Maintenance'),
        ('consulting', 'Consulting'),
        ('autre', 'Autre'),
    ], blank=True)
    date_creation = models.DateTimeField(auto_now_add=True)
    traite = models.BooleanField(default=False)

    class Meta:
        verbose_name = "Contact"
        verbose_name_plural = "Contacts"
        ordering = ['-date_creation']

    def __str__(self):
        return f"{self.nom} - {self.sujet}"


class Newsletter(models.Model):
    email = models.EmailField(unique=True)
    date_inscription = models.DateTimeField(auto_now_add=True)
    actif = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Newsletter"
        verbose_name_plural = "Newsletters"

    def __str__(self):
        return self.email
    

class Kit(models.Model):
    nom = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    prix = models.PositiveIntegerField(default=0)  # en FCFA
    stock = models.PositiveIntegerField(default=0)
    actif = models.BooleanField(default=True)
    

    def __str__(self):
        return self.nom
    





from django.db import models
from django.conf import settings

from main.models import Kit


class Commande(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    kit = models.ForeignKey(Kit, on_delete=models.CASCADE)
    date_commande = models.DateTimeField(auto_now_add=True)
    statut = models.CharField(max_length=100, default='En attente')

    def __str__(self):
        return f"Commande de {self.user.username} - {self.kit.nom}"

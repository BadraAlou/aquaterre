from django.utils import timezone
from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model 

User = get_user_model()


class Conversation(models.Model):
    utilisateur = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    date_creation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Conversation #{self.id} - {self.utilisateur.username if self.utilisateur else 'Anonyme'}"

class Message(models.Model):
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE, null=True, blank=True)
    contenu = models.TextField()
    date_envoi = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message #{self.id} - {self.conversation}"


class ReponseBot(models.Model):
    message = models.ForeignKey(Message, on_delete=models.CASCADE)
    contenu = models.TextField()
    date_reponse = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Réponse au message #{self.message.id}"

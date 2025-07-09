from django.contrib import admin
from .models import Conversation, Message, ReponseBot

@admin.register(Conversation)
class ConversationAdmin(admin.ModelAdmin):
    list_display = ('id', 'utilisateur', 'date_creation')
    list_filter = ('date_creation',)
    search_fields = ('utilisateur__username',)


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'conversation', 'contenu', 'date_envoi')
    list_filter = ('date_envoi',)
    search_fields = ('contenu',)


@admin.register(ReponseBot)
class ReponseBotAdmin(admin.ModelAdmin):
    list_display = ('id', 'message', 'contenu', 'date_reponse')
    list_filter = ('date_reponse',)
    search_fields = ('contenu',)

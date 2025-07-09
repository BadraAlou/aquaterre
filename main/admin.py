from django.contrib import admin
from .models import Kit, Contact, Newsletter


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['nom', 'email', 'sujet', 'type_service', 'date_creation', 'traite']
    list_filter = ['type_service', 'traite', 'date_creation']
    search_fields = ['nom', 'email', 'sujet']
    readonly_fields = ['date_creation']
    list_editable = ['traite']


@admin.register(Newsletter)
class NewsletterAdmin(admin.ModelAdmin):
    list_display = ['email', 'date_inscription', 'actif']
    list_filter = ['actif', 'date_inscription']
    search_fields = ['email']
    list_editable = ['actif']

class KitAdmin(admin.ModelAdmin):
    list_display = ['nom', 'prix', 'stock']
    list_editable = ['stock']
    list_filter = ['actif']


admin.site.register(Kit, KitAdmin)


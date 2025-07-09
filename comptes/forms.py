from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(label="Adresse e‑mail", required=True)
    telephone = forms.CharField(label="Téléphone", required=False)

    class Meta:
        model = CustomUser
        fields = ("username", "email", "telephone", "password1", "password2")
        labels = {
            "username": "Nom d’utilisateur",
        }

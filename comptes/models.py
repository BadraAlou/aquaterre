from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password1 = models.CharField(max_length=128)
    password2 = models.CharField(max_length=128, blank=True)
    telephone = models.CharField(max_length=20, blank=True)
    pass

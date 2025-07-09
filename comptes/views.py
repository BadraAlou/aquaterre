from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from commande.models import Commande
from .forms import CustomUserCreationForm
from django.contrib.auth.decorators import login_required

@login_required
def compte_utilisateur(request):
    commandes = Commande.objects.filter(user=request.user).order_by('-date_commande')
    return render(request, 'comptes/compte_utilisateur.html', {
        'user': request.user,
        'commandes': commandes,
    })

def register_view(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = CustomUserCreationForm()
    return render(request, 'comptes/register.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('home')
        else:
            return render(request, 'comptes/login.html', {'error': 'Identifiants incorrects'})
    return render(request, 'comptes/login.html')

def logout_view(request):
    logout(request)
    return redirect('comptes:login')

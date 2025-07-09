import json
from django.conf import settings
from django.shortcuts import get_object_or_404, render, redirect
from django.contrib import messages
from django.http import JsonResponse
from .forms import  CommandeForm, ContactForm, NewsletterForm
from .models import Contact, Kit
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required



def home(request):
    """Vue de la page d'accueil"""
    return render(request, 'main/home.html')


def about(request):
    """Vue de la page à propos"""
    return render(request, 'main/about.html')


def history(request):
    """Vue de la page histoire"""
    return render(request, 'main/history.html')


def services(request):
    """Vue de la page services"""
    kits = Kit.objects.filter(actif=True)
    return render(request, 'main/services.html', {'kits': kits})


def contact(request):
    """Vue de la page contact"""
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(
                request, 'Merci pour votre message ! Nous vous contacterons bientôt.')
            return redirect('contact')
    else:
        form = ContactForm()

    return render(request, 'main/contact.html', {'form': form})


def newsletter_subscribe(request):
    """Vue pour l'inscription à la newsletter"""
    if request.method == 'POST':
        form = NewsletterForm(request.POST)
        if form.is_valid():
            try:
                form.save()
                return JsonResponse({'success': True, 'message': 'Inscription réussie !'})
            except:
                return JsonResponse({'success': False, 'message': 'Cet email est déjà inscrit.'})
        else:
            return JsonResponse({'success': False, 'message': 'Email invalide.'})

    return JsonResponse({'success': False, 'message': 'Méthode non autorisée.'})


def about(request):
    return render(request, 'main/about.html')





def liste_kits(request):
    kits = Kit.objects.filter(actif=True)
    return render(request, 'main/services.html', {'kits': kits})


def kit_detail(request, kit_id):
    kit = get_object_or_404(Kit, actif=True, id=kit_id)
    return render(request, 'main/kit_detail.html', {'kit': kit})

def tutoriel_view(request):
    return render(request, 'main/tutoriel.html')


@require_POST
def create_checkout_session(request):
    data = json.loads(request.body)
    kit_id = data.get('kit_id')

    try:
        kit = Kit.objects.get(id=kit_id)
        # Construire l'URL de redirection vers le formulaire de commande
        redirect_url = f"/commande/nouvelle/?kit_id={kit.id}"
        return JsonResponse({'redirect_url': redirect_url})
    except Kit.DoesNotExist:
        return JsonResponse({'error': 'Kit non trouvé'}, status=404)


@login_required
@login_required(login_url='comptes:login')  # redirige vers la page login
def nouvelle_commande(request):
    kit_id = request.GET.get('kit_id')
    if not kit_id:
        messages.error(request, "Aucun kit sélectionné.")
        return redirect('services')

    kit = get_object_or_404(Kit, id=kit_id)

    if request.method == 'POST':
        form = CommandeForm(request.POST)
        if form.is_valid():
            commande = form.save(commit=False)
            commande.kit = kit
            commande.user = request.user
            commande.save()

            if commande.kit.id == 3:
                print("Commande spéciale détectée")
                return redirect('commande:confirmation_spe')
            return redirect('commande:confirmation')
    else:
        form = CommandeForm()

    return render(request, 'commande/nouvelle_commande.html', {'form': form, 'kit': kit})
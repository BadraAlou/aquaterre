from pyexpat.errors import messages
from django.shortcuts import get_object_or_404, render, redirect

from main.forms import CommandeForm
from .models import Commande
from .models import Kit
from django.contrib.auth.decorators import login_required



@login_required
def confirmation_spe(request):
    return render(request, 'commande/confirmation_spe.html')

@login_required
def passer_commande(request, kit_id):
    kit = Kit.objects.get(id=kit_id)
    commande = Commande.objects.create(user=request.user, kit=kit)
    return redirect('liste_commandes')

@login_required
def liste_commandes(request):
    commandes = Commande.objects.filter(user=request.user)
    return render(request, 'commande/commandes.html', {'commandes': commandes})

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


@login_required
def confirmation(request):
    return render(request, 'commande/confirmation.html')

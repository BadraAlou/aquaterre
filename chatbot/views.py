from datetime import timezone
from .models import Conversation, Message, ReponseBot
from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import AnonymousUser
from django.utils import timezone




PREDEFINED_RESPONSES = {
    "Qu'est-ce que l’aquaponie ?": "L'aquaponie est un système qui combine la culture de plantes et l'élevage de poissons en circuit fermé.",
    "Comment commander un kit ?": "Vous pouvez commander un kit en visitant notre page Services, où plusieurs options sont disponibles.",
    "Quels sont vos services ?": "Nous offrons : installation personnalisée, formation, maintenance, et assistance technique.",
    "Où vous trouvez-vous ?": "Nous sommes basés à Bamako, Mali. Retrouvez toutes nos infos sur la page Contact.",
    "Quels sont les avantages de l’aquaponie ?": "C'est écologique, économique en eau, sans pesticides et très productif sur de petites surfaces."
}

def index(request):
    return render(request, 'chatbot/index.html')

@csrf_exempt
def chatbot_html(request):
    bot_intro = "Bonjour 👋 ! Je suis l’assistant d’AquaTerre. Sélectionnez une question ou contactez-nous si vous ne trouvez pas votre réponse."
    user_message = ""
    response = ""

    if request.method == "POST":
        user_message = request.POST.get("message", "").strip()

        # Si la question est reconnue
        if user_message in PREDEFINED_RESPONSES:
            response = PREDEFINED_RESPONSES[user_message]

            if request.user and not isinstance(request.user, AnonymousUser):
                conversation, _ = Conversation.objects.get_or_create(utilisateur=request.user)
            else:
                conversation = None

            msg_obj = Message.objects.create(
                conversation=conversation,
                contenu=user_message,
                date_envoi=timezone.now()
            )

            ReponseBot.objects.create(
                message=msg_obj,
                contenu=response,
                date_reponse=timezone.now()
            )

        else:
            # Question non reconnue → redirection vers page contact
            return redirect('contact')

    return render(request, 'chatbot/index.html', {
        'bot_intro': bot_intro,
        'user_message': user_message,
        'bot_response': response,
        'questions': list(PREDEFINED_RESPONSES.keys())
    })
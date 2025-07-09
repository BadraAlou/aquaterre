from django import forms
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Row, Column
from commande.models import Commande
from .models import  Contact, Newsletter


class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['nom', 'email', 'telephone', 'type_service', 'sujet', 'message']
        widgets = {
            'nom': forms.TextInput(attrs={'placeholder': 'Votre nom complet'}),
            'email': forms.EmailInput(attrs={'placeholder': 'votre@email.com'}),
            'telephone': forms.TextInput(attrs={'placeholder': '+223 94 13 79 02/ +223 98 90 77 80'}),
            'sujet': forms.TextInput(attrs={'placeholder': 'Sujet de votre message'}),
            'message': forms.Textarea(attrs={'placeholder': 'Décrivez votre projet ou posez vos questions...', 'rows': 5}),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.layout = Layout(
            Row(
                Column('nom', css_class='form-group col-md-6 mb-3'),
                Column('email', css_class='form-group col-md-6 mb-3'),
                css_class='form-row'
            ),
            Row(
                Column('telephone', css_class='form-group col-md-6 mb-3'),
                Column('type_service', css_class='form-group col-md-6 mb-3'),
                css_class='form-row'
            ),
            'sujet',
            'message',
            Submit('submit', 'Envoyer le message', css_class='btn btn-primary btn-lg w-100')
        )


class NewsletterForm(forms.ModelForm):
    class Meta:
        model = Newsletter
        fields = ['email']
        widgets = {
            'email': forms.EmailInput(attrs={'placeholder': 'Votre email'})
        }

class CommandeForm(forms.ModelForm):
    class Meta:
        model = Commande
        fields = []  

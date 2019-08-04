#coding: utf-8
__author__ = "Lário dos Santos Diniz"

import re

from django import forms
from django.core.exceptions import ValidationError
from django.db import transaction
from accounts.models import User

class UserCreateForm(forms.Form):    
    username = forms.CharField(max_length=50, label='Username')    
    email = forms.EmailField(label='Email')
    senha = forms.CharField(widget=forms.PasswordInput(), label='Senha')
    conf_senha = forms.CharField(widget=forms.PasswordInput(), label='Confirma Senha')    

    def clean_email(self):
        email = self.cleaned_data['email']
        if User.objects.filter(email=email).exists():
            raise ValidationError("There is already a user with this email.")
        return email

    def clean_username(self):
        username = self.cleaned_data['username']
        if User.objects.filter(username=username).exists():
            raise ValidationError("There is already a user with this login.")
        return username

    def clean(self):
        senha = self.cleaned_data['senha']

        if len(senha) < 6 or len(senha) > 18:        
            raise ValidationError("password must be between 6 and 18 characters")
        elif len(re.findall(r"[A-Z]", senha)) < 1:
            raise ValidationError('Senha tem que ter no mínimo uma letra maiuscula')
        elif len(re.findall(r"[a-z]", senha)) < 1:        
            raise ValidationError('Senha tem que ter no mínimo uma letra minuscula')
        elif len(re.findall(r"[0-9]", senha)) < 1:
            raise ValidationError('Senha tem que ter no mínimo um numero')
        elif len(re.findall(r"[~`!@#$%^&*()_+=-{};:'><]", senha)) < 1:
            raise ValidationError('Senha tem que ter no mínimo um caracter especial')

        senha02 = self.cleaned_data['conf_senha']
        if senha != senha02:
            raise ValidationError("Senhas não conferem!")
        return self.cleaned_data  

    def save(self):
        try:
            usuario = User()
            usuario.username = self.cleaned_data['username'] 
            usuario.email = self.cleaned_data['email']            
            usuario.is_staff = False
            usuario.is_active = True 
            usuario.set_password(self.cleaned_data['senha'])
            usuario.save()

            return True, usuario.id

        except:
            transaction.rollback()
            return False, "Erro ao salvar cliente."
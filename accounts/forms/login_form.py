#coding: utf-8
__author__ = "Lário dos Santos Diniz"

import random

from django import forms
from django.contrib.auth import authenticate

from accounts.models import User


class LoginForm(forms.ModelForm):
    """User Access Form"""
    
    class Meta:
        model = User
        fields = ('username','password')

    def __init__(self, *args, **kwargs):
        #username setting
        self.base_fields['username'].help_text = ''
        self.base_fields['username'].label ='Login'

        #setting password
        self.base_fields['password'].widget = forms.PasswordInput()
        self.base_fields['password'].label ='Senha'
        self.base_fields['password'].type ='password'

        super(LoginForm, self).__init__(*args, **kwargs)

    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')

        user = authenticate(username=username, password=password)
        if not user or not user.is_active:
            raise forms.ValidationError("Desculpe, Este Login é invalido. tente Novamente.")
        return self.cleaned_data

    def login(self, request):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        user = authenticate(username=username, password=password)
        return user

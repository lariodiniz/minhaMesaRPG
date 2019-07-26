#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.contrib.auth.forms import UserCreationForm

from accounts.models import User


class UserAdminCreationForm(UserCreationForm):
    """User Creation Form"""
    class Meta:
        model = User
        fields = ['username', 'name', 'email']

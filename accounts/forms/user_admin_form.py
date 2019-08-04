#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django import forms

from accounts.models import User


class UserAdminForm(forms.ModelForm):

    class Meta:
        model = User
        fields = ['username', 'name', 'email', 'is_active', 'is_staff']

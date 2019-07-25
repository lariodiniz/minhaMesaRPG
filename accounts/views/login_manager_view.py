#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.views.generic import TemplateView
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse_lazy

from accounts.forms import LoginForm
from financial.models import Manager

class LoginManagerView(TemplateView):
    template_name = 'accounts/login_manager.html'
    form_class = LoginForm
    initial = {'key': 'value'}

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:            
            return HttpResponseRedirect(reverse_lazy('financial:dashboard_manager'))
        else:            
            return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            user = form.login(request)
            if user:
               try:
                    Manager.objects.get(user= user)
                    login(request, user)
                    return HttpResponseRedirect(reverse_lazy('financial:list_associated'))
               except Manager.DoesNotExist:
                   messages.error(self.request, 'Usuário informado não é gerente.') 
                   return render(request, self.template_name, {'form': form})
        else:
            messages.error(self.request, 'Erro no Login') 
            return render(request, self.template_name, {'form': form})

login_manager_view = LoginManagerView.as_view()
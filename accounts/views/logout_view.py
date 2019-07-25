#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.contrib.auth import logout
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy

from financial.models import Manager

def logout_view(request):
    user = request.user
    try:
        Manager.objects.get(user= user)                    
        url =reverse_lazy('accounts:login_manager')
    except Manager.DoesNotExist:
        url = '/'                
    
    logout(request)
    return HttpResponseRedirect(url)
    
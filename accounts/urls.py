# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.urls import path
from django.contrib.auth import logout

from accounts.views import (login_view, login_manager_view, 
logout_view, update_password_view)

app_name = 'accounts'

urlpatterns = [
    path('', login_view, name='login'),  
    path('gerente/', login_manager_view, name='login_manager'),  
    path('sair/', logout_view, name='logout'), 
    path('alterar-senha/', update_password_view, name='update_password'),     
    
]

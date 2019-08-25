# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.urls import path

from api.views import (user_view, rpg_system_view, tresDeT_vantagens, tresDeT_desvantagens)

app_name = 'api'

urlpatterns = [     
    path('user/', user_view, name='user_view'), 
    path('system/', rpg_system_view, name='rpg_system_view') ,
    path('tresDeT/vantagens/', tresDeT_vantagens, name='tresDeT_vantagens'),
    path('tresDeT/desvantagens/', tresDeT_desvantagens, name='tresDeT_desvantagens')
    
]

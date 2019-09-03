# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.urls import path

from api.views import (user_view, rpg_system_view, tresDeT_vantagens, tresDeT_desvantagens,
tresDeT_magias, tresDeT_fichas_create, personagens, tresDeT_personagem, tresDeT_personagem_delete )

app_name = 'api'

urlpatterns = [     
    path('user/', user_view, name='user_view'), 
    path('system/', rpg_system_view, name='rpg_system_view') ,
    path('personagens/<int:pk>/', personagens, name='personagens') ,
    path('tresDeT/vantagens/', tresDeT_vantagens, name='tresDeT_vantagens'),
    path('tresDeT/desvantagens/', tresDeT_desvantagens, name='tresDeT_desvantagens'),
    path('tresDeT/magias/',tresDeT_magias, name='tresDeT_magias'),
    path('tresDeT/fichas/',tresDeT_fichas_create, name='tresDeT_fichas_create'),
    path('tresDeT/personagem/<int:pk>/', tresDeT_personagem, name='tresDeT_personagem'),
    path('tresDeT/personagem/<int:user>/<int:pk>/', tresDeT_personagem_delete, name='tresDeT_personagem_delete'),

    
]

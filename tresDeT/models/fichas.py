#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.db import models

from api.models import RPGSystem
from tresDeT.models import Vantagens, Desvantagens, Magias
from accounts.models import User

class Fichas(models.Model):
    name = models.CharField('Nome',max_length=50)   
    points = models.IntegerField('Pontos') 
    force = models.IntegerField('Força') 
    abiliity = models.IntegerField('Habilidade') 
    resistance = models.IntegerField('Resistencia') 
    armor = models.IntegerField('Armadura') 
    fire_power = models.IntegerField('Poder de Fogo') 
    health_points = models.IntegerField('Pontos de vida') 
    magic_points = models.IntegerField('Pontos de magia') 
    experience_points = models.IntegerField('Pontos de Experiencia') 

    damage_types = models.CharField('Tipos de dano',max_length=250) 
    items = models.CharField('Itens',max_length=250) 
    story = models.CharField('Historia',max_length=250) 
    
    benefits = models.ManyToManyField(Vantagens, verbose_name='Vantagens')
    disadvantages = models.ManyToManyField(Desvantagens, verbose_name='Desvantagens')
    magic = models.ManyToManyField(Magias, verbose_name='Magias')
    user = models.ForeignKey(User, verbose_name='Usuário', on_delete=models.CASCADE)
    system = models.ForeignKey(RPGSystem, verbose_name='Sistema', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Ficha 3D&T'
        verbose_name_plural = 'Fichas 3D&T'        

    def __str__(self):
        return '{}'.format(self.name)
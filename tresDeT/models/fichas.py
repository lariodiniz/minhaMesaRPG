#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.db import models

from api.models import RPGSystem
from tresDeT.models import Vantagens, Desvantagens, Magias, VantagensUnicas, Pericias, Especializacoes
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

    damage_types = models.CharField('Tipos de dano',max_length=250, blank=True) 
    items = models.CharField('Itens',max_length=250, blank=True) 
    story = models.CharField('Historia',max_length=250, blank=True) 
    
    benefits = models.ManyToManyField(Vantagens, verbose_name='Vantagens', blank=True)
    disadvantages = models.ManyToManyField(Desvantagens, verbose_name='Desvantagens', blank=True)
    magic = models.ManyToManyField(Magias, verbose_name='Magias', blank=True)
    expertise = models.ManyToManyField(Pericias, verbose_name='Pericias', blank=True)
    specializations = models.ManyToManyField(Especializacoes, verbose_name='Especializações', blank=True)
    unique_benefits = models.ManyToManyField(VantagensUnicas, verbose_name='Vantagens Unicas', blank=True)
    user = models.ForeignKey(User, verbose_name='Usuário', on_delete=models.CASCADE)
    system = models.ForeignKey(RPGSystem, verbose_name='Sistema', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Ficha 3D&T'
        verbose_name_plural = 'Fichas 3D&T'        

    def __str__(self):
        return '{}'.format(self.name)
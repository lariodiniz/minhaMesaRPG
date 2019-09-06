#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.db import models

from api.models import RPGSystem
from tresDeT.models import Acao

class Especializacoes(models.Model):
    
    name = models.CharField('Nome',max_length=200)
    description = models.CharField('Descrição', max_length=250, blank=True, null=True) 
    actions = models.ManyToManyField(Acao, verbose_name='Ação') 

    system = models.ForeignKey(RPGSystem, verbose_name='Sistema', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Especialização'
        verbose_name_plural = 'Especializações'        

    def __str__(self):
        return '{}'.format(self.name)
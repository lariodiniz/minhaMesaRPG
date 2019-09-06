#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.db import models

from api.models import RPGSystem

class AlcancesMagia(models.Model):
    
    description = models.CharField('Descrição', max_length=250, blank=True, null=True) 

    system = models.ForeignKey(RPGSystem, verbose_name='Sistema', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Alcance da Magia'
        verbose_name_plural = 'Alcances de Magia'        

    def __str__(self):
        return '{}'.format(self.description)
#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.db import models

from api.models import RPGSystem

class Magias(models.Model):
    
    name = models.CharField('Nome',max_length=100)
    description = models.CharField('Descrição', max_length=250, blank=True, null=True) 
    school = models.CharField('Escola', max_length=250, blank=True, null=True) 
    cost = models.CharField('Custo',max_length=50)
    duration = models.CharField('Duração',max_length=50)
    reach = models.CharField('Alcance',max_length=50)

    system = models.ForeignKey(RPGSystem, verbose_name='Sistema', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Magia'
        verbose_name_plural = 'Magias'        

    def __str__(self):
        return '{}'.format(self.name)
#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.db import models

from api.models import RPGSystem

class Vantagens(models.Model):
    
    name = models.CharField('Nome',max_length=30)
    description = models.CharField('Descrição', max_length=250, blank=True, null=True) 
    cost = models.IntegerField('Custo')
    system = models.ForeignKey(RPGSystem, verbose_name='Sistema', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Vantagem'
        verbose_name_plural = 'Vantagens'        

    def __str__(self):
        return '{} - {}'.format(self.name, self.cost)
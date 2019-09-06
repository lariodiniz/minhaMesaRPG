#coding: utf-8
__author__ = "Lário dos Santos Diniz"


from django.db import models
from api.models import RPGSystem

class Acao(models.Model):

    attributes = (
        ('FO', u'Força'),
        ('HA', u'Habilidade'),
        ('RE', u'Resistencia'),
        ('AR', u'Armadura'),
        ('PO', u'Poder de Fogo'),
        ('PV', u'Poder de Vida'),
        ('PM', u'Poder de Magia')
    )

    
    types = (
        ('S', u'Selecionar'),
        ('A', u'Ativo')
    )

    description = models.CharField('Descrição', max_length=250, blank=True, null=True) 
    bonus = models.IntegerField('Bonus')
    attribute = models.CharField(verbose_name='Atributo', max_length=2, choices=attributes)
    kind = models.CharField(verbose_name='Tipo', max_length=2, choices=types)

    system = models.ForeignKey(RPGSystem, verbose_name='Sistema', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Caracteristica'
        verbose_name_plural = 'Caracteristicas'        

    def __str__(self):
        return '{}'.format(self.description)
#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.db import models

from api.models import RPGSystem
from tresDeT.models import Livros, Vantagens, Desvantagens, Pericias, Especializacoes, BonusCaracteristicas

class VantagensUnicas(models.Model):
    
    name = models.CharField('Nome',max_length=200)
    description = models.CharField('Descrição', max_length=250, blank=True, null=True) 
    cost = models.CharField('Custo',max_length=50)
    page = models.IntegerField('Pagina')

    system = models.ForeignKey(RPGSystem, verbose_name='Sistema', on_delete=models.CASCADE)
    book = models.ForeignKey(Livros, verbose_name='Livro', on_delete=models.CASCADE) 
    
    vantagens = models.ManyToManyField(Vantagens, verbose_name='Vantagens', blank=True)
    desvantagens = models.ManyToManyField(Desvantagens, verbose_name='Desvantages', blank=True)
    pericias = models.ManyToManyField(Pericias, verbose_name='Pericias', blank=True)
    especializacoes = models.ManyToManyField(Especializacoes, verbose_name='Especializacões', blank=True)
    bonus = models.ManyToManyField(BonusCaracteristicas, verbose_name='Bonus', blank=True)


    class Meta:
        verbose_name = 'Vantagem Unica'
        verbose_name_plural = 'Vantagens Unicas'        

    def __str__(self):
        return '{}'.format(self.name)
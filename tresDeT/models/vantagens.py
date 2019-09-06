#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.db import models

from api.models import RPGSystem
from tresDeT.models import Livros, Acao

class Vantagens(models.Model):
    
    name = models.CharField('Nome',max_length=200)
    description = models.CharField('Descrição', max_length=250, blank=True, null=True) 
    cost = models.IntegerField('Custo')
    page = models.IntegerField('Pagina')
    magic_points = models.IntegerField('Pontos de Magia', null=True) 
    use_magic_points = models.BooleanField('Usa Pontos de Magia', default=False)
    actions = models.ManyToManyField(Acao, verbose_name='Ação') 

    system = models.ForeignKey(RPGSystem, verbose_name='Sistema', on_delete=models.CASCADE)    
    book = models.ForeignKey(Livros, verbose_name='Livro', on_delete=models.CASCADE) 

    class Meta:
        verbose_name = 'Vantagem'
        verbose_name_plural = 'Vantagens'        

    def __str__(self):
        return '{} - {}'.format(self.name, self.cost)
#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.db import models

from api.models import RPGSystem
from tresDeT.models import Livros, Especializacoes, Acao

class Pericias(models.Model):
    
    name = models.CharField('Nome',max_length=200)
    description = models.CharField('Descrição', max_length=250, blank=True, null=True) 
    cost = models.IntegerField('Custo')
    page = models.IntegerField('Pagina')    
    book = models.ForeignKey(Livros, verbose_name='Livro', on_delete=models.CASCADE) 
    system = models.ForeignKey(RPGSystem, verbose_name='Sistema', on_delete=models.CASCADE)
    specializations = models.ManyToManyField(Especializacoes, verbose_name='Especializações') 
    actions = models.ManyToManyField(Acao, verbose_name='Ação') 
    

    class Meta:
        verbose_name = 'Pericia'
        verbose_name_plural = 'Pericias'        

    def __str__(self):
        return '{}'.format(self.name)
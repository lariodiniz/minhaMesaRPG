#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.db import models

from api.models import RPGSystem
from tresDeT.models import Livros, EscolasMagia, AlcancesMagia, DuracoesMagia, Vantagens, Desvantagens, Acao

class Magias(models.Model):
    
    name = models.CharField('Nome',max_length=200)
    description = models.CharField('Descrição', max_length=250, blank=True, null=True) 
    cost = models.CharField('Custo',max_length=50)
    page = models.IntegerField('Pagina')
    magic_points = models.IntegerField('Pontos de Magia', null=True) 

    system = models.ForeignKey(RPGSystem, verbose_name='Sistema', on_delete=models.CASCADE)
    book = models.ForeignKey(Livros, verbose_name='Livro', on_delete=models.CASCADE) 
    school = models.ManyToManyField(EscolasMagia, verbose_name='Escola') 
    duration = models.ForeignKey(DuracoesMagia, verbose_name='Duração', on_delete=models.CASCADE) 
    reach = models.ForeignKey(AlcancesMagia, verbose_name='Alcance', on_delete=models.CASCADE) 
    requirements_vantagens = models.ManyToManyField(Vantagens, verbose_name='Exigencia Vantagem', blank=True)
    requirements_desvantagens = models.ManyToManyField(Desvantagens, verbose_name='Exigencia Desvantagem', blank=True)
    actions = models.ManyToManyField(Acao, verbose_name='Ação') 


    class Meta:
        verbose_name = 'Magia'
        verbose_name_plural = 'Magias'        

    def __str__(self):
        return '{}'.format(self.name)
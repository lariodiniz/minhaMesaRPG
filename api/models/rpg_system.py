#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.db import models

class RPGSystem(models.Model):
    
    name = models.CharField('Nome',max_length=30)
    description = models.CharField('Descrição', max_length=250, blank=True, null=True) 
    site = models.CharField('Site',max_length=100)

    class Meta:
        verbose_name = 'Sistema de RPG'
        verbose_name_plural = 'Sistemas de RPG'        

    def __str__(self):
        return 'Sistema {}'.format(self.name)
#coding: utf-8
__author__ = "Lário dos Santos Diniz"


from django.contrib import admin

from .models import (Vantagens, Desvantagens, Magias, Fichas, 
                      Livros, AlcancesMagia, DuracoesMagia, EscolasMagia, 
                      Especializacoes, Pericias, VantagensUnicas, BonusCaracteristicas)

class VantagensAdmin(admin.ModelAdmin):

    list_display = ['name', 'description']
    search_fields = ['name', 'description']

class DesvantagensAdmin(admin.ModelAdmin):

    list_display = ['name', 'description']
    search_fields = ['name', 'description']

class MagiasAdmin(admin.ModelAdmin):

    list_display = ['name', 'description']
    search_fields = ['name', 'description']    

class FichasAdmin(admin.ModelAdmin):

    list_display = ['name', 'story']
    search_fields = ['name', 'story']

class EspecializacoesAdmin(admin.ModelAdmin):

    list_display = ['name', 'description']
    search_fields = ['name', 'description']  

class PericiasAdmin(admin.ModelAdmin):

    list_display = ['name', 'description']
    search_fields = ['name', 'description']  

class LivrosAdmin(admin.ModelAdmin):

    list_display = ['name', 'description']
    search_fields = ['name', 'description']         

class VantagensUnicasAdmin(admin.ModelAdmin):

    list_display = ['name', 'description']
    search_fields = ['name', 'description']   
     
admin.site.register(VantagensUnicas, VantagensUnicasAdmin)
admin.site.register(Vantagens, VantagensAdmin)
admin.site.register(Desvantagens, DesvantagensAdmin)
admin.site.register(Magias, MagiasAdmin)
admin.site.register(Fichas, FichasAdmin)
admin.site.register(Livros, LivrosAdmin)
admin.site.register(Especializacoes, EspecializacoesAdmin)
admin.site.register(Pericias, PericiasAdmin)
admin.site.register(AlcancesMagia)
admin.site.register(DuracoesMagia)
admin.site.register(EscolasMagia)
admin.site.register(BonusCaracteristicas)
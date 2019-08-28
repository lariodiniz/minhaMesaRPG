#coding: utf-8
__author__ = "Lário dos Santos Diniz"


from django.contrib import admin

from .models import (Vantagens, Desvantagens, Magias)

class VantagensAdmin(admin.ModelAdmin):

    list_display = ['name', 'description']
    search_fields = ['name', 'description']

class DesvantagensAdmin(admin.ModelAdmin):

    list_display = ['name', 'description']
    search_fields = ['name', 'description']

class MagiasAdmin(admin.ModelAdmin):

    list_display = ['name', 'description']
    search_fields = ['name', 'description']    

admin.site.register(Vantagens, VantagensAdmin)
admin.site.register(Desvantagens, DesvantagensAdmin)
admin.site.register(Magias, MagiasAdmin)
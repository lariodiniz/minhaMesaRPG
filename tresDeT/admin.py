#coding: utf-8
__author__ = "Lário dos Santos Diniz"


from django.contrib import admin

from .models import (Vantagens, Desvantagens)

class VantagensAdmin(admin.ModelAdmin):

    list_display = ['name', 'description']
    search_fields = ['name', 'description']

class DesvantagensAdmin(admin.ModelAdmin):

    list_display = ['name', 'description']
    search_fields = ['name', 'description']

admin.site.register(Vantagens, VantagensAdmin)
admin.site.register(Desvantagens, DesvantagensAdmin)
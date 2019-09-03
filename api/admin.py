#coding: utf-8
__author__ = "Lário dos Santos Diniz"


from django.contrib import admin

from .models import (RPGSystem)

class RPGSystemAdmin(admin.ModelAdmin):

    list_display = ['name', 'description', 'site']
    search_fields = ['name', 'description', 'site']

admin.site.register(RPGSystem, RPGSystemAdmin)
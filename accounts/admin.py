#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.sessions.models import Session

from .models import User
from .forms import  UserAdminCreationForm, UserAdminForm

class UserAdmin(BaseUserAdmin):
    add_form = UserAdminCreationForm
    add_fieldsets = (
        (None,{
            'fields':('username', 'email', 'password1', 'password2')
        }),
    )
    form = UserAdminForm
    fieldsets = (
        (None,{
            'fields':('username', 'email',)
        }), 
        ('informações Básicas',{
            'fields':('name',  'last_login')
        }),  
        ('Permissões',{
            'fields':('is_active', 'is_staff', 'groups', 'user_permissions')
        }),                     
    )
    list_display = ['username', 'name', 'email', 'is_active', 'is_staff', 'date_joined']

admin.site.register(User, UserAdmin)

class SessionAdmin(admin.ModelAdmin):
    def _session_data(self, obj):
        return obj.get_decoded()
    list_display = ['session_key', '_session_data', 'expire_date']
    readonly_fields = ['_session_data']
    exclude = ['session_data']
    date_hierarchy='expire_date'

admin.site.register(Session, SessionAdmin)
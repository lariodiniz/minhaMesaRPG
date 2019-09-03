#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import serializers
from api.models import RPGSystem

class PersonagemSerializer(serializers.Serializer):
    
    id = serializers.CharField(max_length=200)
    name = serializers.CharField(max_length=200)
    description = serializers.CharField(max_length=200)
    system = serializers.CharField(max_length=200)
    slug = serializers.CharField(max_length=200)
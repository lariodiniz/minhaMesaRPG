#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import serializers
from tresDeT.models import Vantagens

class VantagensSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vantagens
        fields = ['id','name', 'cost', 'description']
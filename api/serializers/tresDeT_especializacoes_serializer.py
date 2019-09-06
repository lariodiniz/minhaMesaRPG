#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import serializers
from tresDeT.models import Especializacoes

class TresDeTEspecializacoesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Especializacoes
        fields = ['id','name', 'description']
#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import serializers
from tresDeT.models import Pericias

class TresDeTPericiasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pericias
        fields = ['id','name', 'cost', 'description']
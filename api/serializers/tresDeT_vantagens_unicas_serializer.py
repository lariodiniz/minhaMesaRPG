#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import serializers
from tresDeT.models import VantagensUnicas

class TresDeTVantagensUnicasSerializer(serializers.ModelSerializer):
    class Meta:
        model = VantagensUnicas
        fields = ['id','name', 'cost', 'description', 'page', 'book']

    book = serializers.StringRelatedField()
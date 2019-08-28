#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import serializers
from tresDeT.models import Magias

class MagiasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magias
        fields = ['id','name', 'cost', 'description', 'duration', 'reach']
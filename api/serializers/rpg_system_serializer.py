#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import serializers
from api.models import RPGSystem

class RPGSystemSerializer(serializers.ModelSerializer):
    class Meta:
        model = RPGSystem
        fields = ['id', 'name', 'description', 'site']
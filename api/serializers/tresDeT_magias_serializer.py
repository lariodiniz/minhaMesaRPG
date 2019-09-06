#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import serializers
from tresDeT.models import Magias

class TresDeTMagiasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Magias
        fields = ['id','name', 'cost', 'description', 'duration', 'reach', 'page', 'book']

    book = serializers.StringRelatedField()
    duration = serializers.StringRelatedField()
    reach = serializers.StringRelatedField()
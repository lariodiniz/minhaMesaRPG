#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import serializers
from tresDeT.models import Vantagens, Livros

from django.utils import six
from rest_framework import serializers

class MyPrimaryKeyRelatedField(serializers.PrimaryKeyRelatedField):

    def to_representation(self, value):
        return six.text_type(value)

class TresDeTVantagensSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vantagens
        fields = ['id','name', 'cost', 'description', 'page', 'book']

    book = serializers.StringRelatedField()
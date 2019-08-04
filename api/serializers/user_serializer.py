#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from accounts.models import User

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
        
    username = serializers.CharField(
            max_length=32,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    password = serializers.CharField(min_length=6, max_length=18, write_only=True)
    confirm_password = serializers.CharField(min_length=6,  max_length=18,  write_only=True)

    def validate(self, data):
        senha = data['password']
        confi_senha = data['confirm_password']

        if senha != confi_senha:
            raise serializers.ValidationError("passwords do not match")
        return data

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'confirm_password')

    def create(self, validated_data):
        usuario = User()
        usuario.username = validated_data['username'] 
        usuario.email = validated_data['email']            
        usuario.is_staff = False
        usuario.is_active = True 
        usuario.set_password(validated_data['password'])
        usuario.save()
        return usuario

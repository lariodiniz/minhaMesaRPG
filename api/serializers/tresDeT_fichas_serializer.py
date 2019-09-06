#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from tresDeT.models import (Fichas, Vantagens, Desvantagens, Magias, 
    Pericias, VantagensUnicas, Especializacoes)
from api.serializers import (TresDeTVantagensSerializer, 
    TresDeTDesvantagensSerializer, TresDeTMagiasSerializer, 
    TresDeTVantagensUnicasSerializer, TresDeTEspecializacoesSerializer,
    TresDeTPericiasSerializer)

from api.models import RPGSystem

from accounts.models import User

class TresDeTFichasSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fichas
        fields = ['id', 'name', 'points', 'force', 'abiliity', 'resistance', 'armor', 'fire_power',
                 'health_points', 'magic_points', 'benefits', 'disadvantages', 'damage_types',
                 'magic', 'items', 'story', 'user', 'system', 'experience_points', 'unique_benefits', 'expertise', 'specializations']

    benefits = TresDeTVantagensSerializer(many=True)
    unique_benefits = TresDeTVantagensUnicasSerializer(many=True)
    expertise = TresDeTPericiasSerializer(many=True)
    disadvantages = TresDeTDesvantagensSerializer(many=True)
    magic = TresDeTMagiasSerializer(many=True)
    specializations = TresDeTEspecializacoesSerializer(many=True)
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    system = serializers.PrimaryKeyRelatedField(queryset=RPGSystem.objects.all())
    
    def create(self, validated_data):
        
        print(validated_data)
        
        ficha = Fichas()
        ficha.name = validated_data['name']
        ficha.points = validated_data['points']
        ficha.force = validated_data['force']
        ficha.abiliity = validated_data['abiliity']
        ficha.resistance = validated_data['resistance']
        ficha.armor = validated_data['armor']
        ficha.fire_power = validated_data['fire_power']
        ficha.health_points = validated_data['health_points']
        ficha.magic_points = validated_data['magic_points']
        ficha.experience_points = validated_data['experience_points']
        ficha.damage_types = validated_data['damage_types']
        ficha.items = validated_data['items']
        ficha.story = validated_data['story']
    
        ficha.user = validated_data['user']
        ficha.system = validated_data['system']
        ficha.save()
        
        #Vantagens, Desvantagens, Magias
        for benefit in validated_data['benefits']: 
            vantagem = Vantagens.objects.get(name=benefit['name'], cost=benefit['cost'])
            ficha.benefits.add(vantagem)
        
        for disadvantage in validated_data['disadvantages']: 
            desvantagem = Desvantagens.objects.get(name=disadvantage['name'], cost=disadvantage['cost'])
            ficha.disadvantages.add(desvantagem)

        for magic in validated_data['magic']: 
            magias = Magias.objects.get(name=magic['name'], cost=magic['cost'])
            ficha.magic.add(magias)


        for unique_benefit in validated_data['unique_benefits']: 
            vantagem_unica = VantagensUnicas.objects.get(name=unique_benefit['name'], cost=unique_benefit['cost'])
            ficha.unique_benefits.add(vantagem_unica)

        for expertise in validated_data['expertise']: 
            pericia = Pericias.objects.get(name=expertise['name'], cost=expertise['cost'])
            ficha.expertise.add(pericia)
        
        for specialization in validated_data['specializations']: 
            especializacao = Especializacoes.objects.get(name=specialization['name'])
            ficha.specializations.add(especializacao)
        
        return ficha

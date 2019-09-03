#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from tresDeT.models import Fichas as TresDeT
from api.serializers import PersonagemSerializer

class BuscaPersonagens():

    def __init__(self, pk):
        ps = TresDeT.objects.filter(user__pk = pk)
        self.Personagens = []

        for pe in ps:
            p = {}
            p['name'] = pe.name
            p['description'] = pe.story
            p['system'] = pe.system.name
            p['slug'] = '/personagem/3deT/{}'.format(pe.pk)
            
            self.Personagens.append(p)


class Personagens(APIView):    
    """
    List all Personagens.
    """
    permission_classes = (IsAuthenticated,)

    def get(self, request, pk, format=None):  
        
        busca = BuscaPersonagens(pk)
        serializer = PersonagemSerializer(busca.Personagens, many=True)
        return Response(serializer.data)


personagens = Personagens.as_view()
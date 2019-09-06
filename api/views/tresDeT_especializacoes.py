#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from tresDeT.models import Especializacoes
from api.serializers import TresDeTEspecializacoesSerializer



class TresDeT_especializacoes(APIView):    
    """
    List all Especializacoes Unicas 3D&T.
    """
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):    
        
        objects = Especializacoes.objects.all()
        serializer = TresDeTEspecializacoesSerializer(objects, many=True)
        return Response(serializer.data)


tresDeT_especializacoes = TresDeT_especializacoes.as_view()
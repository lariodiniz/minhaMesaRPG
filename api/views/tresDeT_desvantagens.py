#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from tresDeT.models import Desvantagens
from api.serializers import TresDeTDesvantagensSerializer



class TresDeT_desvantagens(APIView):    
    """
    List all Desvantagens 3D&T.
    """
    permission_classes = (AllowAny,)

    def get(self, request, format=None):    
        
        desvantagens = Desvantagens.objects.all()
        serializer = TresDeTDesvantagensSerializer(desvantagens, many=True)
        return Response(serializer.data)


tresDeT_desvantagens = TresDeT_desvantagens.as_view()
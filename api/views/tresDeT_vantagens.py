#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from tresDeT.models import Vantagens
from api.serializers import VantagensSerializer



class TresDeT_vantagens(APIView):    
    """
    List all Vantagens 3D&T.
    """
    permission_classes = (AllowAny,)

    def get(self, request, format=None):    
        
        vantagens = Vantagens.objects.all()
        serializer = VantagensSerializer(vantagens, many=True)
        return Response(serializer.data)


tresDeT_vantagens = TresDeT_vantagens.as_view()
#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from tresDeT.models import VantagensUnicas
from api.serializers import TresDeTVantagensUnicasSerializer



class TresDeT_vantagens_unicas(APIView):    
    """
    List all Vantagens Unicas 3D&T.
    """
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):    
        
        vantagens = VantagensUnicas.objects.all()
        serializer = TresDeTVantagensUnicasSerializer(vantagens, many=True)
        return Response(serializer.data)


tresDeT_vantagens_unicas = TresDeT_vantagens_unicas.as_view()
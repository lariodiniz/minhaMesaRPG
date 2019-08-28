#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from tresDeT.models import Magias
from api.serializers import MagiasSerializer



class TresDeT_magias(APIView):    
    """
    List all Magias 3D&T.
    """
    permission_classes = (AllowAny,)

    def get(self, request, format=None):  
        magias = Magias.objects.all()
        serializer = MagiasSerializer(magias, many=True)
        return Response(serializer.data)


tresDeT_magias = TresDeT_magias.as_view()
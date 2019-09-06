#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from tresDeT.models import Pericias
from api.serializers import TresDeTPericiasSerializer



class TresDeT_pericias(APIView):    
    """
    List all Pericias Unicas 3D&T.
    """
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):    
        
        objects = Pericias.objects.all()
        serializer = TresDeTPericiasSerializer(objects, many=True)
        return Response(serializer.data)


tresDeT_pericias = TresDeT_pericias.as_view()
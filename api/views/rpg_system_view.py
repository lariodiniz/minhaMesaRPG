#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from api.serializers import RPGSystemSerializer



class RPGSystemView(APIView):    
    """
    List all RPG System.
    """
    def get(self, request, format=None):
        rpg_system = RPGSystemSerializer.objects.all()
        serializer = RPGSystemSerializer(rpg_system, many=True)
        return Response(serializer.data)


rpg_system_view = RPGSystemView.as_view()
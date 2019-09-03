#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from api.models import RPGSystem
from api.serializers import RPGSystemSerializer



class RPGSystemView(APIView):    
    """
    List all RPG System.
    """
    
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):    
        
        rpg_system = RPGSystem.objects.all()
        serializer = RPGSystemSerializer(rpg_system, many=True)
        return Response(serializer.data)


rpg_system_view = RPGSystemView.as_view()
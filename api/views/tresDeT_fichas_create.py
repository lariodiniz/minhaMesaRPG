#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from api.serializers import TresDeTFichasSerializer

class TresDeTFichasCreateView(APIView):
    #ignora a permissão
    permission_classes = (AllowAny,)

    def post(self, request, format='json'):  
        
        serializer = TresDeTFichasSerializer(data=request.data)
        
        if serializer.is_valid():
            ficha = serializer.save()
            if ficha:
                return Response(serializer.data, status=status.HTTP_201_CREATED)  
        
        print(serializer.errors)      
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

tresDeT_fichas_create = TresDeTFichasCreateView.as_view()
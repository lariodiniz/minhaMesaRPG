#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from api.serializers import UserSerializer

class UserView(APIView):
    #ignora a permissão
    permission_classes = (AllowAny,)

    def post(self, request, format='json'):        
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)        
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

user_view = UserView.as_view()
#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.http import Http404

from tresDeT.models import Fichas
from api.serializers import TresDeTFichasSerializer



class TresDeT_personagem(APIView):    
    """
    List one personagem 3D&T.
    """
    permission_classes = (AllowAny,)

    def get_object(self, pk):
        try:
            return Fichas.objects.get(pk=pk)
        except Fichas.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        personagem = self.get_object(pk)
        serializer = TresDeTFichasSerializer(personagem)
        return Response(serializer.data)


tresDeT_personagem = TresDeT_personagem.as_view()
#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.http import Http404

from tresDeT.models import Fichas
from api.serializers import TresDeTFichasSerializer



class TresDeT_personagem_delete(APIView):    
    """
    delete one personagem 3D&T.
    """
    permission_classes = (IsAuthenticated,)

    def get_object(self, pk, user):
        try:
            return Fichas.objects.get(pk=pk, user__pk=user)
        except Fichas.DoesNotExist:
            raise Http404

   
    def delete(self, request, user, pk, format=None):

        personagem = self.get_object(pk, user)
        personagem.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)        


tresDeT_personagem_delete = TresDeT_personagem_delete.as_view()
#coding: utf-8
__author__ = "Lário dos Santos Diniz"

from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from api.forms import UserCreateForm

class UserView(APIView):
    #ignora a permissão
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        form = UserCreateForm(request.data) 
        if form.is_valid():                            
            save, user = form.save()   
            if save:
                return Response(user, status=status.HTTP_201_CREATED)
        return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)

user_view = UserView.as_view()
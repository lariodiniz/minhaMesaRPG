# coding: utf-8
__author__ = "Lário dos Santos Diniz"


from rest_framework.test import APITestCase
from rest_framework.test import APIClient
from rest_framework.authtoken.models import Token
from django.urls import reverse
from django.conf import settings

from model_mommy import mommy

from tresDeT.models import Desvantagens


class DesvantagensViewTestCase(APITestCase):
    """test user view"""
    def setUp(self):
        
        self.url = reverse('api:tresDeT_desvantagens')
        
        self.user = mommy.prepare(settings.AUTH_USER_MODEL)
        self.username = 'teste'
        self.user.set_password('123456')
        self.user.save() 
        mommy.make(Desvantagens)

        self.client = APIClient()
        self.client.force_authenticate(user=self.user)


    def tearDown(self):
        pass

    def test_rpg_system_view_get(self):
        
        response = self.client.get(self.url)
        self.assertEquals(response.status_code, 200, 
                          'a get request for url "{}" is not returning status code 200'.format(self.url))        
        self.assertEqual(len(response.data), 1)

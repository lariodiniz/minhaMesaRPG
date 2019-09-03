# coding: utf-8
__author__ = "Lário dos Santos Diniz"


from rest_framework.test import APITestCase
from rest_framework.test import APIClient
from rest_framework.authtoken.models import Token
from django.urls import reverse
from django.conf import settings

from model_mommy import mommy

from tresDeT.models import Magias, Vantagens, Desvantagens, Fichas
from api.models import RPGSystem

class TresDeTFichasViewTestCase(APITestCase):
    """test Fichas view"""
    def setUp(self):
        
        self.url = reverse('api:tresDeT_fichas_create')

        self.user = mommy.prepare(settings.AUTH_USER_MODEL)
        self.username = 'teste'
        self.user.set_password('123456')
        self.user.save() 
        
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)   

        self.system = mommy.make(RPGSystem)


    def tearDown(self):
        pass
    
    def test_register_user(self):
        """test register ficha"""
        data = 	{
            "name":"Krunc", 
            "points":0, 
            "force":0, 
            "abiliity":0, 
            "resistance":0, 
            "armor":0, 
            "fire_power":0,
            "health_points":0, 
            "magic_points":0, 
            "benefits":[], 
            "disadvantages":[],
            "damage_types":"corte",
            "magic":[],
            "items":"Espada, ", 
            "story":"blablabla", 
            "user": self.user.pk, 
            "system": self.system.pk,
            "experience_points":0
		}
        response = self.client.post(self.url, data)
        print(response.data)
        self.assertEquals(response.status_code, 201, 
                          'a post request for url "{}" is not returning status code 200'.format(self.url))        
        
        self.assertEquals(Fichas.objects.count(), 1, 'check if you created a user')
        
        

   
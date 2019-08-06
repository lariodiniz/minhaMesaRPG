# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.test import TestCase, Client
from django.urls import reverse

from model_mommy import mommy

from api.models import RPGSystem


class RPGSystemViewTestCase(TestCase):
    """test user view"""
    def setUp(self):
        self.client = Client()
        self.url = reverse('api:rpg_system_view')

        mommy.make(RPGSystem)

    def tearDown(self):
        pass

    def test_rpg_system_view_get(self):
        
        response = self.client.get(self.url)
        self.assertEquals(response.status_code, 200, 
                          'a get request for url "{}" is not returning status code 200'.format(self.url))        

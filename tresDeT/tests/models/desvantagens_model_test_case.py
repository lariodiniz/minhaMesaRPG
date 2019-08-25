# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.test import TestCase
from model_mommy import mommy

from tresDeT.models import Desvantagens

class DesvantagensModelTestCase(TestCase):
    """Class Testing Model Desvantagens """

    def setUp(self):
        """Initial Test Settings"""
        self.desvantagens = mommy.make(Desvantagens)

    def tearDown(self):
        """Final method"""
        self.desvantagens.delete()

    def test_there_are_fields(self):
        """test the fields the model"""
        filds = ['name', 'cost', 'description']
        for fild in filds:
            self.assertTrue(fild in dir(Desvantagens),
                            'Class Vantagens does not have the field {}'.format(fild))

    def test_there_is_a_vantagens(self):
        """test if you are creating a Vantagens correctly"""
        self.assertEquals(Desvantagens.objects.count(), 1)
        self.assertEquals(Desvantagens.objects.all()[0].name, self.desvantagens.name)
        self.assertEquals(Desvantagens.objects.all()[0].cost, self.desvantagens.cost)
        self.assertEquals(Desvantagens.objects.all()[0].description, self.desvantagens.description)

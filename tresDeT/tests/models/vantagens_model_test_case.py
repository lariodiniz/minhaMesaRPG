# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.test import TestCase
from model_mommy import mommy

from tresDeT.models import Vantagens

class VantagensModelTestCase(TestCase):
    """Class Testing Model Vantagens """

    def setUp(self):
        """Initial Test Settings"""
        self.vantagens = mommy.make(Vantagens)

    def tearDown(self):
        """Final method"""
        self.vantagens.delete()

    def test_there_are_fields(self):
        """test the fields the model"""
        filds = ['name', 'cost', 'description']
        for fild in filds:
            self.assertTrue(fild in dir(Vantagens),
                            'Class Vantagens does not have the field {}'.format(fild))

    def test_there_is_a_vantagens(self):
        """test if you are creating a Vantagens correctly"""
        self.assertEquals(Vantagens.objects.count(), 1)
        self.assertEquals(Vantagens.objects.all()[0].name, self.vantagens.name)
        self.assertEquals(Vantagens.objects.all()[0].cost, self.vantagens.cost)
        self.assertEquals(Vantagens.objects.all()[0].description, self.vantagens.description)

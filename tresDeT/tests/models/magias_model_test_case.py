# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.test import TestCase
from model_mommy import mommy

from tresDeT.models import Magias

class MagiasModelTestCase(TestCase):
    """Class Testing Model Magias """

    def setUp(self):
        """Initial Test Settings"""
        self.magias = mommy.make(Magias)

    def tearDown(self):
        """Final method"""
        self.magias.delete()

    def test_there_are_fields(self):
        """test the fields the model"""
        filds = ['name', 'cost', 'description', 'duration', 'reach', 'school']
        for fild in filds:
            self.assertTrue(fild in dir(Magias),
                            'Class Magias does not have the field {}'.format(fild))

    def test_there_is_a_magias(self):
        """test if you are creating a Magias correctly"""
        self.assertEquals(Magias.objects.count(), 1)
        self.assertEquals(Magias.objects.all()[0].name, self.magias.name)
        self.assertEquals(Magias.objects.all()[0].cost, self.magias.cost)
        self.assertEquals(Magias.objects.all()[0].description, self.magias.description)

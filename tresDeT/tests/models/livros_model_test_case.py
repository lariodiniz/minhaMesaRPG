# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.test import TestCase
from model_mommy import mommy

from tresDeT.models import Livros

class LivrosModelTestCase(TestCase):
    """Class Testing Model Livros """

    def setUp(self):
        """Initial Test Settings"""
        self.livros = mommy.make(Livros)

    def tearDown(self):
        """Final method"""
        self.livros.delete()

    def test_there_are_fields(self):
        """test the fields the model"""
        filds = ['name', 'description', 'system']

        for fild in filds:
            self.assertTrue(fild in dir(Livros),
                            'Class Livros does not have the field {}'.format(fild))

    def test_there_is_a_livros(self):
        """test if you are creating a Livros correctly"""
        self.assertEquals(Livros.objects.count(), 1)
        self.assertEquals(Livros.objects.all()[0].name, self.livros.name)
        self.assertEquals(Livros.objects.all()[0].description, self.livros.description)

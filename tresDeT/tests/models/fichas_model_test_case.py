# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.test import TestCase
from model_mommy import mommy

from tresDeT.models import Fichas

class FichasModelTestCase(TestCase):
    """Class Testing Model Fichas """

    def setUp(self):
        """Initial Test Settings"""
        self.fichas = mommy.make(Fichas)

    def tearDown(self):
        """Final method"""
        self.fichas.delete()

    def test_there_are_fields(self):
        """test the fields the model"""
        filds = ['name', 'points', 'force', 'abiliity', 'resistance', 'armor', 'fire_power',
                 'health_points', 'magic_points', 'benefits', 'disadvantages', 'damage_types',
                 'magic', 'items', 'story', 'user', 'system', 'experience_points']
        for fild in filds:
            self.assertTrue(fild in dir(Fichas),
                            'Class Fichas does not have the field {}'.format(fild))

    def test_there_is_a_fichas(self):
        """test if you are creating a Fichas correctly"""
        self.assertEquals(Fichas.objects.count(), 1)
        self.assertEquals(Fichas.objects.all()[0].name, self.fichas.name)
        self.assertEquals(Fichas.objects.all()[0].points, self.fichas.points)
        self.assertEquals(Fichas.objects.all()[0].force, self.fichas.force)
        self.assertEquals(Fichas.objects.all()[0].magic_points, self.fichas.magic_points)
        self.assertEquals(Fichas.objects.all()[0].benefits, self.fichas.benefits)
        self.assertEquals(Fichas.objects.all()[0].user, self.fichas.user)

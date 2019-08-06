# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.test import TestCase
from django.conf import settings
from model_mommy import mommy

from api.models import RPGSystem


class RPGSystemModelTestCase(TestCase):

    def test_there_are_fields(self):
        """test the fields the model"""

        fields = ['name', 'description', 'site']

        for field in fields:
            self.assertTrue(field in dir(RPGSystem), 'Class RPGSystem does not have the field {}'.format(field))
# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.test import TestCase
from model_mommy import mommy

from accounts.models import User

class UserModelTestCase(TestCase):
    """Class Testing Model User """

    def setUp(self):
        """Initial Test Settings"""
        self.user = mommy.make(User)

    def tearDown(self):
        """Final method"""
        self.user.delete()

    def test_there_are_fields(self):
        """test the fields the model"""
        filds = ['username', 'name', 'email', 'is_staff', 'is_active', 'date_joined']
        for fild in filds:
            self.assertTrue(fild in dir(User),
                            'Class User does not have the field {}'.format(fild))

    def test_there_is_a_user(self):
        """test if you are creating a User correctly"""
        self.assertEquals(User.objects.count(), 1)
        self.assertEquals(User.objects.all()[0].username, self.user.username)
        self.assertEquals(User.objects.all()[0].name, self.user.name)
        self.assertEquals(User.objects.all()[0].email, self.user.email)

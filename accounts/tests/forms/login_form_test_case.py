# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.test import TestCase
from model_mommy import mommy

from accounts.forms import LoginForm
from django.conf import settings


class LoginFormTestCase(TestCase):
    """Class Testing Form Login """

    def setUp(self):
        """Initial Test Settings"""
        self.user = mommy.prepare(settings.AUTH_USER_MODEL)
        self.user.username="usuario"
        self.user.set_password('123456')
        self.user.save()

    def test_valid_form(self):
        """check if the form is logging in the user"""
        data = {'username': 'usuario', 'password':'123456'}
        form = LoginForm(data=data)
        self.assertTrue(form.is_valid(), 'error validating form with valid user')

    def test_invalid_form(self):
        """check if the form is not logging in the user invalid"""
        data = {'username': 'blablabla', 'password':'123456'}
        form = LoginForm(data=data)
        self.assertFalse(form.is_valid(), 'error validating form with invalid user')

    def test_fields_form(self):
        """tests the form fields"""
        form = LoginForm()        
        filds = ['username', 'password']
        for fild in filds:
            self.assertTrue(fild in form.fields,
                            'Login form does not have the field {}'.format(fild))

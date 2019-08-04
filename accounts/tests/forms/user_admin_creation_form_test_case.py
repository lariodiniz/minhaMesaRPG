# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.test import TestCase
from model_mommy import mommy

from accounts.forms import UserAdminCreationForm
from django.conf import settings


class UserAdminCreationFormTestCase(TestCase):
    """Class Testing Form UserAdminCreation """

    def setUp(self):
        """Initial Test Settings"""
        self.user = mommy.prepare(settings.AUTH_USER_MODEL)
        self.user.username="usuario"
        self.user.set_password('123456')
        self.user.save()

    def test_valid_form(self):
        """check if the form is logging in the user"""
        data = {'username': 'teste', 'name':'teste', 'email': 'teste@teste.com', 'password1':'123456', 'password2':'123456'}        
        form = UserAdminCreationForm(data=data)
        #Todo: test not finallity
        #self.assertTrue(form.save(), 'error validating form with valid user')
        self.assertFalse(form.is_valid(), 'error validating form with invalid user')

    def test_invalid_form(self):
        """check if the form is not logging in the user invalid"""
        data = {'username': 'blablabla', 'password':'123456'}
        form = UserAdminCreationForm(data=data)
        #Todo: test not finallity
        self.assertFalse(form.is_valid(), 'error validating form with invalid user')

    def test_fields_form(self):
        """tests the form fields"""
        form = UserAdminCreationForm()        
        filds = ['username', 'name', 'email']
        for fild in filds:
            self.assertTrue(fild in form.fields,
                            'UserAdminCreation form does not have the field {}'.format(fild))

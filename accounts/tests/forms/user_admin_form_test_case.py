# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.test import TestCase
from model_mommy import mommy

from accounts.forms import UserAdminForm
from django.conf import settings


class UserAdminFormTestCase(TestCase):
    """Class Testing Form UserAdminCreation """

    def setUp(self):
        """Initial Test Settings"""
        self.user = mommy.prepare(settings.AUTH_USER_MODEL)
        self.user.username="usuario"
        self.user.set_password('123456')
        self.user.save()

    def test_valid_form(self):
        """check if the form is creating in the admin user"""
        data = {'username': 'teste', 'name':'teste', 'email': 'teste@teste.com', 'password1':'123456', 'password2':'123456'}        
        form = UserAdminForm(data=data)
        self.assertTrue(form.is_valid(), 'error validating form with invalid user')

    def test_invalid_form(self):
        """check if the form is not creating in the user invalid"""
        data = {'username': 'blablabla', 'password':'123456'}
        form = UserAdminForm(data=data)
        self.assertFalse(form.is_valid(), 'error validating form with invalid user')

    def test_fields_form(self):
        """tests the form fields"""
        form = UserAdminForm()              
        filds = ['username', 'name', 'email', 'is_active', 'is_staff']
        for fild in filds:
            self.assertTrue(fild in form.fields,
                            'UserAdminCreation form does not have the field {}'.format(fild))

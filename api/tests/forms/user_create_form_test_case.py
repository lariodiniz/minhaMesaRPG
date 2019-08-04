# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.test import TestCase
from model_mommy import mommy

from api.forms import UserCreateForm
from accounts.models import User

class UserCreateFormTestCase(TestCase):
    """Class Testing Form UserCreate """

    def test_fields_form(self):
        """tests the form fields"""
        form = UserCreateForm()        
        filds = ['username', 'email', 'senha', 'conf_senha']
    
        for fild in filds:
            self.assertTrue(fild in form.fields,
                            'UserCreate form does not have the field {}'.format(fild))    

    def test_valid_form(self):
        """check if the form is creating in user"""
        data = {'username':'testeLogin', 'email': 'teste@teste.com', 'senha':'A@e123456', 'conf_senha':'A@e123456'}        
        form = UserCreateForm(data=data)
        self.assertTrue(form.is_valid(), 'error validating form with invalid user')
        retorno, id =  form.save()
        user = User.objects.get(username='testeLogin')
        self.assertEquals(User.objects.count(), 1, 'check if you created a user')
        self.assertEquals(user.pk, id, 'check user id created')
        #self.assertEquals(user.name,'teste', 'check name created')
        self.assertEquals(user.email,'teste@teste.com', 'check email created')

    def test_invalid_form_existing_email(self):
        """check if the form is not creating a user with date wrongs: existing email"""    
        user = mommy.prepare(User, email='teste@teste.com')
        user.set_password('123')
        user.save()

        data = {'username':'testeLogin', 'email': 'teste@teste.com', 'senha':'A@e123456', 'conf_senha':'A@e123456'}
        form = UserCreateForm(data=data) 
        self.assertFalse(form.is_valid(), 'error validating form with invalid user')

    def test_invalid_form_existing_username(self):
        """check if the form is not creating a user with date wrongs: existing username"""    
        user = mommy.prepare(User, username='testeLogin')
        user.set_password('123')
        user.save()

        data = {'username':'testeLogin', 'email': 'teste@teste.com', 'senha':'A@e123456', 'conf_senha':'A@e123456'}
        form = UserCreateForm(data=data) 
        self.assertFalse(form.is_valid(), 'error validating form with invalid user')

    def test_invalid_form_existing_different_passwords(self):
        """check if the form is not creating a user with date wrongs: different passwords"""    
        data = {'username':'testeLogin', 'email': 'teste@teste.com', 'senha':'A@e123456', 'conf_senha':'A@ert123456'}
        form = UserCreateForm(data=data) 
        self.assertFalse(form.is_valid(), 'error validating form with invalid user')

    def test_invalid_form_existing_password_less_six(self):
        """check if the form is not creating a user with date wrongs: passwords less than six"""    
        data = {'username':'testeLogin', 'email': 'teste@teste.com', 'senha':'A@e12', 'conf_senha':'A@ert12'}
        form = UserCreateForm(data=data) 
        self.assertFalse(form.is_valid(), 'error validating form with invalid user')

    def test_invalid_form_existing_password_more_eighteen(self):
        """check if the form is not creating a user with date wrongs: passwords more than eighteen"""    
        data = {'username':'testeLogin', 'email': 'teste@teste.com', 'senha':'A@e1234567891011121314151617', 'conf_senha':'A@e1234567891011121314151617'}
        form = UserCreateForm(data=data) 
        self.assertFalse(form.is_valid(), 'error validating form with invalid user')    

    def test_invalid_form_existing_password_no_lowercase_letter(self):
        """check if the form is not creating a user with date wrongs: no lowercase letter"""    
        data = {'username':'testeLogin', 'email': 'teste@teste.com', 'senha':'A1@23456', 'conf_senha':'A1@23456'}
        form = UserCreateForm(data=data) 
        self.assertFalse(form.is_valid(), 'error validating form with invalid user')

    def test_invalid_form_existing_password_no_capital_letter(self):
        """check if the form is not creating a user with date wrongs: no capital letter"""    
        data = {'username':'testeLogin', 'email': 'teste@teste.com', 'senha':'a1@23456', 'conf_senha':'a1@23456'}
        form = UserCreateForm(data=data) 
        self.assertFalse(form.is_valid(), 'error validating form with invalid user')
    #ToDo: não deixa criar usuario com senhas sem numeros
    #ToDo: não deixa criar usuario com senhas sem caracteres especiais

    def test_invalid_form(self):
        """check if the form is not creating a user with date wrongs"""    
        data = {'username':'testeLogin', 'email': 'teste@teste.com', 'senha':'A@e123456', 'conf_senha':'A@e123456'}
        form = UserCreateForm(data=data)
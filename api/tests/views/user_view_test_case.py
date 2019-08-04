# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.test import TestCase, Client
from django.urls import reverse


from accounts.models import User

class UserViewTestCase(TestCase):
    """test user view"""
    def setUp(self):
        self.client = Client()
        self.url = reverse('api:user_view')

    def tearDown(self):
        pass
    
    def test_register_user(self):
        """test register user"""
        data = {'username':'testeLogin', 'email': 'teste@teste.com', 'password':'A@e123456', 'confirm_password':'A@e123456'}
        response = self.client.post(self.url, data)
        self.assertEquals(response.status_code, 201, 
                          'a post request for url "{}" is not returning status code 200'.format(self.url))        
        user = User.objects.get(username='testeLogin')
        self.assertEquals(User.objects.count(), 1, 'check if you created a user')
        self.assertEquals(user.name,'', 'check name created')
        self.assertEquals(user.email,'teste@teste.com', 'check email created')

    def test_register_user_error(self):
        """test not register user with data error"""
        data = {'username':'testeLogin', 'email': 'teste@teste.com', 'senha':'A@e12', 'conf_senha':'A@e123'}
        response = self.client.post(self.url, data)
        self.assertEquals(response.status_code, 400, 
                          'a post request for url "{}" is not returning status code 200'.format(self.url))        

        self.assertEquals(User.objects.count(), 0, 'check if you not created a user')        
        
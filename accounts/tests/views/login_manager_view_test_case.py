# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth import get_user_model


class LoginManagerViewTestCase(TestCase):
    """test login view"""
    def setUp(self):
        self.client = Client()
        self.url = reverse('accounts:login_manager')

    def __get(self):
        return self.client.get(self.url)

    def tearDown(self):
        pass

    def test_status_code(self):
        """test if get method is returning status code 200"""
        response = self.__get()
        self.assertEquals(response.status_code, 
                          200, 
                          'a get request for url "{}" is not returning status code 200'.format(self.url))

    def test_template_used(self):
        """test the templates being used"""
        response = self.__get()
        self.assertTemplateUsed(response, 'accounts/login_manager.html','accounts/login_manager.html template not being used')
        self.assertTemplateUsed(response, 'layout/base.html', 'layout/base.html template not being used')

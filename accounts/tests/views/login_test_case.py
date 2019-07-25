# coding: utf-8
__author__ = "Lário dos Santos Diniz"

from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth import get_user_model


class LoginTestCase(TestCase):

    def setUp(self):
        self.client = Client()
        self.url = reverse('accounts:login')

    def tearDown(self):
        pass

    def test_status_code(self):
        response = self.client.get(self.url)
        self.assertEquals(response.status_code, 200)

    def test_template_used(self):
        response = self.client.get(self.url)
        self.assertTemplateUsed(response, 'accounts/login.html')
        self.assertTemplateUsed(response, 'layout/base.html', 'Template base não utilizado.')

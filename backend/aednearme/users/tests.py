from django.test import TestCase, Client
from django.urls import reverse
import json

# from .models import User

class TestViewsCase(TestCase):
    c = Client()

    # def setUp(self):
    #     self.credentials = {
    #         "username": "test",
    #         "first_name": "test",
    #         "last_name": "test",
    #         "email": "test@gmail.com",
    #         "password": "test",
    #     }
    #     User.objects.create_user(**self.credentials)
    
    def test_register(self):
        response = self.c.post(reverse('register'), {'username': 'test', 'email': 'test@test.com', 'password':'test'})
        self.assertEqual(response.status_code, 201)
    
    def test_login(self):
        self.c.post(reverse('register'), {'username': 'test', 'email': 'test@test.com', 'password':'test'})
        response = self.c.post(reverse('login'), {'username': 'test', 'password': 'test' })
        print(response)
        self.assertEqual(response.status_code, 200)

    def test_logout(self):
        self.c.post(reverse('register'), {'username': 'test', 'email': 'test@test.com', 'password':'test'})
        response = self.c.post(reverse('login'), {'username': 'test', 'password': 'test' })
        hold = response.content.decode('UTF-8')
        token = json.loads(hold)['token']
        print(token)
        response = self.c.post(reverse('logout'), **{'Authorization': f'Token {token}'})
        self.assertEqual(response.status_code, 200)



    



    # def test_login(self):
    #     response = self.client.post(
    #         "/user/login", {"email": "test@gmail.com", "password": "test"}
    #     )
    #     hold = response.content.decode("UTF-8")
    #     token = json.loads(hold)
    #     response = self.client.post(
    #         reverse("logout"), **{"Authorization": f"Token {token}"}
    #     )
    #     self.assertEqual(response.status_code, 200)

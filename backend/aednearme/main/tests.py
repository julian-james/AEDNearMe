from django.contrib.auth.models import User
from django.test import Client, TestCase
from django.urls import reverse
import datetime

from .models import Defib


# Create your tests here.
class BaseTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.defib = Defib.objects.create(name='Fido', breed=cls.poodle_breed)
        cls.user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')


# class TestBasicViews(BaseTestCase):
#     c = Client()

#     def test_home(self):
#         response = self.c.get(reverse('adoption-home'))
#         assert "doggos" in response.context
#         assert response.context['doggos'].count() == 1
#         assert "adoption/home.html" in [t.name for t in response.templates]

#     def test_about(self):
#         response = self.c.get(reverse('adoption-about'))
#         assert "adoption/about.html" in [t.name for t in response.templates]

#     def test_create(self):
#         response = self.c.get('dog-create')
#         assert "adoption/404.html" in [t.name for t in response.templates]

#     def test_show(self):
#         response = self.c.get('dog-show')
#         assert "adoption/404.html" in [t.name for t in response.templates]


class TestLoggedInViews(BaseTestCase):

    def setUp(self):
        self.c = Client()
        self.c.login(username="myusername", password="mypassword")

    def test_create_new_defib(self):
        now = datetime.datetime.now()
        response = self.c.post(reverse('api'), {
            'lat': '51.509865',
            'long': '-0.118092',
            'photo_url': '',
            'time_taken': now,
            'access': 'public',
            'approved': True
        })
        # assert Defib.objects.filter(latitude='51.509865').exists()
        self.assertEqual(response.status_code, 201)
    
    def test_create_new_defib(self):
        now = datetime.datetime.now()
        response = self.c.post(reverse('api'), { 'access': 'public' })
        self.assertEqual(response.status_code, 200)
    

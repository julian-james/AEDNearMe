from django.contrib.auth.models import User
from django.test import Client, TestCase, SimpleTestCase
from django.urls import reverse, resolve
from .views import get_all_defibs, create_defib
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

class TestUrls(SimpleTestCase):   

    def test_aed_url(self):
        url = reverse('aed/')
        self.assertEquals(resolve(url).func, get_all_defibs)



class TestLoggedInViews(BaseTestCase):

    def setUp(self):
        self.c = Client()
        self.c.login(username="trevor", password="gotMints365")

    def test_create_defib(self):
        now = datetime.datetime.now()
        initial_defib_count = Defib.objects.count()
        response = self.c.post(reverse('aed/upload'), {
            'lat': '51.509865',
            'long': '-0.118092',
            'photo_url': '',
            'time_taken': now,
            'access': 'public',
            'approved': True
        })
        # assert Defib.objects.filter(latitude='51.509865').exists()
        self.assertEqual(response.status_code, 201)
        self.assertEqual(Defib.objects.count(), initial_defib_count + 1)
    
    def test_create_defib(self):
        now = datetime.datetime.now()
        response = self.c.post(reverse('aed/upload/'), { 'access': 'public' })
        self.assertEqual(response.status_code, 200)
    
    def test_create_defib_url(self):
        url = reverse('aed/upload/')
        self.assertEquals(resolve(url).func, get_all_defibs)
    

class TestModels(TestCase):
  def test_defib(self):
    Defib.objects.create(
      address='123 Fenchurch Street',
      post_code='SW194TG',
      long='0.1276',
      lat='51.5072',
      what3words_link='',
      photo_url='',
      time_taken='',
      access='',
      approved='',
      comments='',
      user_id=''

    )
    self.assertEqual(Defib.objects.count(), 1)
    Defib.objects.create(
      address='64 Zoo Lane',
      post_code='SE237SX',
      long='0.1226',
      lat='51.5012',
      what3words_link='',
      photo_url='',
      time_taken='',
      access='',
      approved='',
      comments='',
      user_id=''
    )
    self.assertEqual(Defib.objects.count(), 2)

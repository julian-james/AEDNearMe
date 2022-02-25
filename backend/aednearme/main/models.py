from django.db import models
from django.contrib.auth.models import User

class Defib(models.Model):
    ACCESS_CHOICES = [
        ('public', 'public'),
        ('limited', 'limited'),
        ('unknown', 'unknown')
    ]

    long = models.CharField(max_length=50)
    lat = models.CharField(max_length=50)
    photo_url = models.URLField(null=True, blank=True)
    time_taken = models.DateTimeField(auto_now_add=True)
    access = models.CharField(max_length=50, choices=ACCESS_CHOICES, default='unknown')
    approved = models.BooleanField(default=False)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)


    def __str__(self):
        return f'Defib ID: {self.id}, Longitude: {self.long},       Latitude: {self.lat}, Time Taken: {self.time_taken},         User ID: {self.user_id}, Access: {self.access}'
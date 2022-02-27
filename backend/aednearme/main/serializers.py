from rest_framework import serializers
from .models import Defib

class DefibSerializer(serializers.ModelSerializer):

    class Meta:
        model = Defib
        fields = ('id', 'long', 'lat', 'photo_url', 'time_taken', 'access', 'approved', 'user_id')
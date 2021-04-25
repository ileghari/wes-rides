from rest_framework import serializers
from .models import Profile, Offer, Request



class ProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = Profile
    fields = ('name', 'email', 'connecting_options')

class OfferSerializer(serializers.ModelSerializer):
  class Meta:
    model = Offer
    fields = ('destination', 'date', 'means_of_transport', 'description')

class RequestSerializer(serializers.ModelSerializer):
  class Meta:
    model = Request
    fields = ('destination', 'date', 'means_of_transport', 'description')
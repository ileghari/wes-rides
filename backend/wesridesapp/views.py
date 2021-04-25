from django.shortcuts import render
from rest_framework import viewsets         
from .serializers import ProfileSerializer, OfferSerializer, RequestSerializer      
from .models import Profile, Offer, Request                    


class ProfileView(viewsets.ModelViewSet):       
  serializer_class = ProfileSerializer          
  queryset = Profile.objects.all()    


class OfferView(viewsets.ModelViewSet):       
  serializer_class = OfferSerializer          
  queryset = Offer.objects.all()      


class RequestView(viewsets.ModelViewSet):       
  serializer_class = RequestSerializer          
  queryset = Request.objects.all()        
from django.db import models

# Create your models here.

class Profile(models.Model):
    name = models.CharField(max_length = 120)
    email = models.CharField(max_length = 120, unique = True)
    connecting_options = models.TextField()


class Offer(models.Model):
    destination = models.CharField(max_length = 120)
    date = models.DateField()
    means_of_transport = models.TextField()
    description = models.TextField()


class Request(models.Model):
    destination = models.CharField(max_length = 120)
    date = models.DateField()
    means_of_transport = models.TextField()
    description = models.TextField()
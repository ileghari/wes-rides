from django.contrib import admin
from .models import Profile, Offer, Request

# Register your models here.

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'connecting_options')

class OfferAdmin(admin.ModelAdmin):
    list_display = ('destination', 'date', 'means_of_transport', 'description')

class RequestAdmin(admin.ModelAdmin):
    list_display = ('destination', 'date', 'means_of_transport', 'description')



admin.site.register(Profile, ProfileAdmin)
admin.site.register(Offer, OfferAdmin)
admin.site.register(Request, RequestAdmin)

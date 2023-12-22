from django.contrib import admin
from django.urls import path
from App1 import views

urlpatterns = [
    path("", views.Signup, name='signup'),
    path("signup.html", views.Signup, name='signup'),
    path("login.html", views.Login, name='login'),
    path("home", views.index, name='home'),
    path("about", views.about, name='about'),
    path('logout/', views.Logout, name='logout'),
    path("virtual", views.virtual, name='virtual'),
    path("services", views.services, name='services'),
    path("prospectus", views.prospectus, name='prospectus'),
    path("visitorsinfo", views.visitorsinfo, name='visitorsinfo'),
    path("facts", views.facts, name='facts'),
    path("ranking", views.ranking, name='ranking'),
    path("cuivirtual", views.cuivirtual, name='cuivirtual'),
]

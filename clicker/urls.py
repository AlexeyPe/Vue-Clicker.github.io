
from django.urls import path

# включить файл views
from . import views

# url главной страницы, url авторизации, регистрации, выхода.
urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("top", views.top, name="top"),
]

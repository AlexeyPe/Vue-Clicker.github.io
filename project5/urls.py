from django.contrib import admin
from django.urls import include, path

# добавил главное url, создал url, добавил include
urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("clicker.urls")),
]

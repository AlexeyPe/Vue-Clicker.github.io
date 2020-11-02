from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    count = models.IntegerField(null=True, blank=True)
    pass

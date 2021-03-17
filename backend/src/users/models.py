from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=320,
        unique=True,
        null=False,
        blank=False
    )
    pass

# Create your models here.

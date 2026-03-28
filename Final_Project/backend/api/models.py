from django.db import models

# Create your models here.

from django.contrib.auth.models import User
from django.db import models
 
class Category(models.Model):
    name = models.CharField(max_length=100)
 
class Task(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
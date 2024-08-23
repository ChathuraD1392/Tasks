from django.db import models

# Create my Book model and assign field values

class Book(models.Model):
    title= models.CharField(max_length=25)
    author= models.CharField(max_length=20)
    category= models.CharField(max_length=10)
    description= models.CharField(max_length=100)
    year= models.IntegerField()
    cover=models.ImageField(upload_to='photos/', null=True, blank=True) # photos will be saved in here


def __str__(self):
    return self.title
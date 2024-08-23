from rest_framework import serializers
from .models import Book

# create a serializer to convert model instance into a json

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Book
from .serializer import BookSerializer
from rest_framework import status
from django.core.paginator import Paginator

@api_view(['GET'])
def get_books(request):
    page = request.GET.get('page')
    filter_value = request.GET.get('filter', '')

    if filter_value:
        books = Book.objects.filter(category=filter_value)
    else:
        books = Book.objects.all()

    paginator = Paginator(books, 8)
    serializedData = BookSerializer(paginator.get_page(page), many=True).data
    total_pages = paginator.num_pages

    response_data = {
        'total_pages': total_pages,
        'books': serializedData,
    }

    return Response(response_data)

@api_view(['POST'])
def create_book(request):
    data = request.data
    serializer = BookSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def book_detail(request,pk):
    try:
        book = Book.objects.get(pk=pk)
    except Book.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
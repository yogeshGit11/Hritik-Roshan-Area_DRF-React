from .serializer import MovieSerializer
from movies.models import Hr_Movies
from rest_framework import viewsets
from rest_framework import filters


class GetMovies(viewsets.ReadOnlyModelViewSet):
    queryset=Hr_Movies.objects.all()
    serializer_class=MovieSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['movie_name']

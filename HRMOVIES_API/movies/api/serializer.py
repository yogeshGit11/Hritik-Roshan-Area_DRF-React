from movies.models import Hr_Movies
from rest_framework import serializers

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hr_Movies
        fields=['id','movie_name','movie_poster','movie_director','movie_story','movie_starring','movie_date','movie_collection','movie_source']
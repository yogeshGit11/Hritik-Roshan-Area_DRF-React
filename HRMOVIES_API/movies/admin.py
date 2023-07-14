from django.contrib import admin
from .models import Hr_Movies

@admin.register(Hr_Movies)
class AdminModel(admin.ModelAdmin):
    list_display=['id','movie_name','movie_poster','movie_director','movie_story','movie_starring','movie_date','movie_collection','movie_source']
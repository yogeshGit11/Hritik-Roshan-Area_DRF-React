from django.db import models

class Hr_Movies(models.Model):
    movie_name=models.CharField(max_length=200)
    movie_poster=models.ImageField(upload_to='movie_poster/')
    movie_director=models.CharField(max_length=100)
    movie_story=models.CharField(max_length=700)
    movie_starring =models.CharField(max_length=300)
    movie_date=models.DateField(auto_now_add=False,auto_now=False)
    movie_collection=models.CharField(max_length=50)
    movie_source=models.FileField(upload_to='movie_source/',default="not available")
    

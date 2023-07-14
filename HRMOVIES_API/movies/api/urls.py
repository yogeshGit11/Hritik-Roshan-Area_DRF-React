from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter

rt=DefaultRouter()
rt.register('HRMoviesData',views.GetMovies,basename='HRMoviesData')

urlpatterns = [
    path('',include(rt.urls))
]

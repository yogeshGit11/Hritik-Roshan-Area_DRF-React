# Generated by Django 4.1 on 2022-08-21 08:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0002_hr_movies_movie'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hr_movies',
            name='movie',
        ),
    ]
# Generated by Django 4.1 on 2022-08-18 05:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='hr_movies',
            name='movie',
            field=models.FileField(null=True, upload_to='movie/'),
        ),
    ]

# Generated by Django 4.2 on 2023-05-05 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_post_views'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='unique_views',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
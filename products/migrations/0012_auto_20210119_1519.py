# Generated by Django 3.0.4 on 2021-01-19 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0011_auto_20210117_1043'),
    ]

    operations = [
        migrations.AlterField(
            model_name='items',
            name='slug',
            field=models.SlugField(blank=True, null=True),
        ),
    ]

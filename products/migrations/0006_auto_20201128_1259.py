# Generated by Django 3.0.4 on 2020-11-28 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_auto_20201128_1234'),
    ]

    operations = [
        migrations.AlterField(
            model_name='items',
            name='image',
            field=models.ImageField(blank=True, upload_to='products/'),
        ),
    ]

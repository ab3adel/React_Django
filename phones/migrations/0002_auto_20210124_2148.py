# Generated by Django 3.0.4 on 2021-01-24 19:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('phones', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='phone',
            old_name='name',
            new_name='mobile_name',
        ),
    ]

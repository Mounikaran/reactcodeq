# Generated by Django 3.1.1 on 2020-09-16 15:32

import autoslug.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('useraccount', '0005_profile_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='slug',
            field=autoslug.fields.AutoSlugField(blank=True, editable=False, populate_from='user'),
        ),
    ]

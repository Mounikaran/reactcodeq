# Generated by Django 3.1.1 on 2020-09-21 05:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tags', '0003_auto_20200921_1118'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tag',
            name='version',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
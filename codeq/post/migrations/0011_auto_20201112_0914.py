# Generated by Django 3.1.1 on 2020-11-12 03:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0010_auto_20201112_0848'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='answer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comment', to='post.answer'),
        ),
    ]

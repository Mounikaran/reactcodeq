from django.db import models

from django.contrib.auth.models import User
from django.utils.text import slugify
# Create your models here.


class Group(models.Model):
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(allow_unicode=True, unique=True)
    description = models.TextField(blank=True, default='')
    members = models.ManyToManyField(User, through="GroupMember")

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)
        
    class Meta:
        ordering = ["name"]


class GroupMember(models.Model):
    group = models.ForeignKey(
        Group, related_name="memberships", on_delete=models.CASCADE)
    user = models.ForeignKey(
        User, related_name='user_groups', on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

    class Meta:
        unique_together = ("group", "user")

from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
import os

from django_extensions.db.fields import AutoSlugField
from multiselectfield import MultiSelectField

from tags.tag_choices import TAGS

# Create your models here.

@receiver(post_save, sender=User)
def create_favorites(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


def my_slugify_function(content):
    return content.replace('_', '-').lower()

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField(upload_to='profiles', default="default_img.png")
    slug = AutoSlugField(populate_from='user', blank=True)
    tag = MultiSelectField(choices=TAGS, null=True, default="")

    def __str__(self):
        return self.user.username



@receiver(models.signals.post_delete, sender=Profile)
def auto_delete_file_on_delete(sender, instance, **kwargs):
    """
    Deletes file from filesystem
    when corresponding `MediaFile` object is deleted.
    """
    if instance.profile_pic:
        if os.path.isfile(instance.profile_pic.path):
            os.remove(instance.profile_pic.path)


@receiver(models.signals.pre_save, sender=Profile)
def auto_delete_file_on_change(sender, instance, **kwargs):
    """
    Deletes old file from filesystem
    when corresponding `MediaFile` object is updated
    with new file.
    """
    if not instance.id:
        return False

    try:
        old_file = sender.objects.get(id=instance.id).profile_pic
    except sender.DoesNotExist:
        return False

    new_file = instance.profile_pic
    if not old_file == new_file:
        if os.path.isfile(old_file.path):
            os.remove(old_file.path)



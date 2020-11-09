from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator
import string as str
from random import choice

from multiselectfield import MultiSelectField
from django_extensions.db.fields import AutoSlugField

from tags.tag_choices import TAGS

# Create your models here.


def my_slugify_function(content):
    return content.replace(' ', '-').lower()

def generate_slug():
    n = 50
    random = str.ascii_uppercase + str.ascii_lowercase + str.digits
    return ''.join(choice(random) for _ in range(n))


class Question(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    slug = AutoSlugField(populate_from='title',
                         slugify_function=my_slugify_function)
    code = models.TextField(max_length=5000, null=True)
    image = models.ImageField(upload_to='questions/', null=True)
    tag = MultiSelectField(choices=TAGS, null=True, default="")
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.slug


class Answer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey('post.Question', on_delete=models.CASCADE)
    # short_answer = models.CharField(max_length=150, null=True)
    slug = models.SlugField(unique=True, max_length=50, default=generate_slug)
    code = models.TextField(max_length=5000, null=True)
    image = models.ImageField(upload_to='answers/', null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    votes = models.IntegerField(validators=[MinValueValidator(0)], default=0)

    def __str__(self):
        return self.user.username + self.question.title + self.id

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    answer = models.ForeignKey('post.Answer', on_delete=models.CASCADE)
    text = models.TextField(max_length=100)
    slug = models.SlugField(unique=True, max_length=50, default=generate_slug)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def __str__(self):
        return self.user.username + self.id
    

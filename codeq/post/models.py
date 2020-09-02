from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator

from multiselectfield import MultiSelectField


# Create your models here.

TAGS_LIST = ((1, 'Python'),
            (2, 'C'),
            (3, "C++"),
            (4, 'HTML'),
            (5, 'CSS'))


class Question(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=150, unique=True)
    code = models.TextField(max_length=5000, null=True)
    image = models.ImageField(upload_to='question_pics/', null=True)
    tags = MultiSelectField(choices = TAGS_LIST, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)


    def __str__(self):
        return self.title


class Answer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey('post.Question', on_delete=models.CASCADE)
    short_answer = models.CharField(max_length=150, null=True)
    code = models.TextField(max_length=5000, null=True)
    image = models.ImageField(upload_to='answer_pics/', null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    votes = models.IntegerField(validators=[MinValueValidator(0)])

    def __str__(self):
        return self.user.username + self.question.title + self.id

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    answer = models.ForeignKey('post.Answer', on_delete=models.CASCADE)
    text = models.TextField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def __str__(self):
        return self.user.username + self.id
    

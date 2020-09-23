from rest_framework import serializers, fields
from django.contrib.auth.models import User

from .models import Question, Comment, Answer
from tags.tag_choices import TAGS

class QuestionSeriaizer(serializers.ModelSerializer):
    tag = fields.MultipleChoiceField(choices=TAGS)
    class Meta:
        model = Question
        fields = "__all__"


class AnswerSeriaizer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = "__all__"


class CommentSeriaizer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"
